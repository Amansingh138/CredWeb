import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './CardStream.css';
import { Pause, Play, RotateCcw, ArrowLeftRight } from 'lucide-react';

const CARD_IMAGES = [
    "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b55e654d1341fb06f8_4.1.png",
    "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5a080a31ee7154b19_1.png",
    "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5c1e4919fd69672b8_3.png",
    "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5f6a5e232e7beb4be_2.png",
    "https://cdn.prod.website-files.com/68789c86c8bc802d61932544/689f20b5bea2f1b07392d936_4.png",
];

export const CardStream: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardLineRef = useRef<HTMLDivElement>(null);
    const particleCanvasRef = useRef<HTMLCanvasElement>(null);
    const scannerCanvasRef = useRef<HTMLCanvasElement>(null);
    const [speed, setSpeed] = useState(120);
    const [isPaused, setIsPaused] = useState(false);

    // Controller Refs to persist instances across renders
    const controllerRef = useRef<any>(null);
    const particleSystemRef = useRef<any>(null);
    const scannerRef = useRef<any>(null);

    useEffect(() => {
        if (!containerRef.current || !cardLineRef.current || !particleCanvasRef.current || !scannerCanvasRef.current) return;

        // Initialize Controllers
        controllerRef.current = new CardStreamController(containerRef.current, cardLineRef.current, setSpeed);
        particleSystemRef.current = new ParticleSystem(particleCanvasRef.current);
        scannerRef.current = new ParticleScanner(scannerCanvasRef.current);

        // Global communication bridge
        (window as any).setScannerScanning = (active: boolean) => {
            scannerRef.current?.setScanningActive(active);
        };

        return () => {
            controllerRef.current?.destroy();
            particleSystemRef.current?.destroy();
            scannerRef.current?.destroy();
            // Cleanup global
            delete (window as any).setScannerScanning;
        };
    }, []);

    const handleTogglePause = () => {
        if (controllerRef.current) {
            controllerRef.current.toggleAnimation();
            setIsPaused(!isPaused);
        }
    };

    const handleReset = () => {
        controllerRef.current?.resetPosition();
        setIsPaused(false);
    };

    const handleChangeDirection = () => {
        controllerRef.current?.changeDirection();
    };

    return (
        <section className="relative bg-brand-dark overflow-hidden py-20 border-t border-white/5">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>

            {/* Header / Slogan */}
            <div className="relative z-10 text-center mb-16 px-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                    Stop Juggling Apps. <br className="md:hidden" />
                    <span className="text-brand-gold">One Dashboard for Every Card.</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Don't fill multiple apps for credit cards. 1 app solves the same.
                </p>
            </div>

            <div className="card-stream-container">
                <div className="card-stream-wrapper" ref={containerRef}>
                    <canvas id="particleCanvas" ref={particleCanvasRef}></canvas>
                    <canvas id="scannerCanvas" ref={scannerCanvasRef}></canvas>

                    <div className="scanner"></div>

                    <div className="card-line" ref={cardLineRef}></div>
                </div>
            </div>
        </section>
    );
};


// --- Logic Implementations ---

class CardStreamController {
    container: HTMLElement;
    cardLine: HTMLElement;
    setSpeedCallback: (speed: number) => void;
    position = 0;
    velocity = 120;
    direction = -1;
    isAnimating = true;
    isDragging = false;
    lastTime = 0;
    lastMouseX = 0;
    mouseVelocity = 0;
    friction = 0.95;
    minVelocity = 30;
    containerWidth = 0;
    cardLineWidth = 0;
    animationFrameId: number | null = null;
    intervalId: NodeJS.Timeout | null = null; // Correct type for NodeJS/Browser environment

    constructor(container: HTMLElement, cardLine: HTMLElement, setSpeedCallback: (s: number) => void) {
        this.container = container;
        this.cardLine = cardLine;
        this.setSpeedCallback = setSpeedCallback;
        this.init();
    }

    init() {
        this.populateCardLine();
        this.calculateDimensions();
        this.setupEventListeners();
        this.updateCardPosition();
        this.animate();
        this.startPeriodicUpdates();
    }

    destroy() {
        if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
        if (this.intervalId) clearInterval(this.intervalId);
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('mousemove', this.handleDrag);
        document.removeEventListener('mouseup', this.handleDragEnd);
    }

    handleResize = () => this.calculateDimensions();
    handleDrag = (e: any) => this.onDrag(e);
    handleDragEnd = () => this.endDrag();

    calculateDimensions() {
        this.containerWidth = this.container.offsetWidth;
        const cardWidth = 400;
        const cardGap = 60;
        // ensure children exist
        if (!this.cardLine.children.length) return;
        this.cardLineWidth = (cardWidth + cardGap) * this.cardLine.children.length;
    }

    setupEventListeners() {
        this.cardLine.addEventListener("mousedown", (e) => this.startDrag(e));
        document.addEventListener("mousemove", this.handleDrag);
        document.addEventListener("mouseup", this.handleDragEnd);
        window.addEventListener("resize", this.handleResize);
    }

    populateCardLine() {
        this.cardLine.innerHTML = "";
        const cardsCount = 20; // Reduced slighty for performance in React
        for (let i = 0; i < cardsCount; i++) {
            const wrapper = this.createCardWrapper(i);
            this.cardLine.appendChild(wrapper);
        }
    }

    createCardWrapper(index: number) {
        const wrapper = document.createElement("div");
        wrapper.className = "card-wrapper";

        const normalCard = document.createElement("div");
        normalCard.className = "cs-card card-normal";

        const img = document.createElement("img");
        img.className = "card-image";
        img.src = CARD_IMAGES[index % CARD_IMAGES.length];
        img.alt = "Credit Card";
        normalCard.appendChild(img);

        const asciiCard = document.createElement("div");
        asciiCard.className = "cs-card card-ascii";
        const asciiContent = document.createElement("div");
        asciiContent.className = "ascii-content";

        // Initial content
        const { width, height } = this.calculateCodeDimensions(400, 250);
        asciiContent.textContent = this.generateCode(width, height);

        // Style update
        asciiContent.style.fontSize = "11px";
        asciiContent.style.lineHeight = "13px";

        asciiCard.appendChild(asciiContent);
        wrapper.appendChild(normalCard);
        wrapper.appendChild(asciiCard);

        return wrapper;
    }

    calculateCodeDimensions(w: number, h: number) {
        return { width: Math.floor(w / 6), height: Math.floor(h / 13) };
    }

    generateCode(width: number, height: number) {
        const chars = "XYZ0123456789<>/\\*&^%$#@!";
        let out = "";
        for (let i = 0; i < height; i++) {
            let line = "";
            for (let j = 0; j < width; j++) {
                line += chars[Math.floor(Math.random() * chars.length)];
            }
            out += line + "\n";
        }
        return out;
    }

    startDrag(e: MouseEvent) {
        e.preventDefault();
        this.isDragging = true;
        this.isAnimating = false;
        this.lastMouseX = e.clientX;
        this.mouseVelocity = 0;
        this.cardLine.classList.add("dragging");
    }

    onDrag(e: MouseEvent) {
        if (!this.isDragging) return;
        const deltaX = e.clientX - this.lastMouseX;
        this.position += deltaX;
        this.mouseVelocity = deltaX * 60;
        this.lastMouseX = e.clientX;
        this.cardLine.style.transform = `translateX(${this.position}px)`;
        this.updateCardClipping();
    }

    endDrag() {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.cardLine.classList.remove("dragging");

        if (Math.abs(this.mouseVelocity) > this.minVelocity) {
            this.velocity = Math.abs(this.mouseVelocity);
            this.direction = this.mouseVelocity > 0 ? 1 : -1;
        } else {
            this.velocity = 120;
        }
        this.isAnimating = true;
    }

    animate() {
        const currentTime = performance.now();
        const deltaTime = (currentTime - (this.lastTime || currentTime)) / 1000;
        this.lastTime = currentTime;

        if (this.isAnimating && !this.isDragging) {
            if (this.velocity > this.minVelocity) {
                this.velocity *= this.friction;
            } else {
                this.velocity = Math.max(this.minVelocity, this.velocity);
            }
            this.position += this.velocity * this.direction * deltaTime;
            this.updateCardPosition();
            this.setSpeedCallback(this.velocity);
        }

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }

    updateCardPosition() {
        if (this.position < -this.cardLineWidth) this.position = this.containerWidth;
        else if (this.position > this.containerWidth) this.position = -this.cardLineWidth;

        this.cardLine.style.transform = `translateX(${this.position}px)`;
        this.updateCardClipping();
    }

    updateCardClipping() {
        // simplified scanner logic
        const scannerX = window.innerWidth / 2;
        const scannerWidth = 10;
        const scannerLeft = scannerX - scannerWidth / 2;
        const scannerRight = scannerX + scannerWidth / 2;
        let anyScanning = false;

        // We need to query selectors from cardLine
        const wrappers = this.cardLine.querySelectorAll('.card-wrapper');
        wrappers.forEach((wrapper: any) => {
            const rect = wrapper.getBoundingClientRect();
            const cardLeft = rect.left;
            const cardRight = rect.right;
            const cardWidth = rect.width;

            const normalCard = wrapper.querySelector('.card-normal') as HTMLElement;
            const asciiCard = wrapper.querySelector('.card-ascii') as HTMLElement;

            if (cardLeft < scannerRight && cardRight > scannerLeft) {
                anyScanning = true;
                const intersectLeft = Math.max(scannerLeft - cardLeft, 0);
                const intersectRight = Math.min(scannerRight - cardLeft, cardWidth);

                const normalClipRight = (intersectLeft / cardWidth) * 100;
                const asciiClipLeft = (intersectRight / cardWidth) * 100;

                normalCard.style.setProperty("--clip-right", `${normalClipRight}%`);
                asciiCard.style.setProperty("--clip-left", `${asciiClipLeft}%`);
            } else {
                if (cardRight < scannerLeft) {
                    normalCard.style.setProperty("--clip-right", "100%");
                    asciiCard.style.setProperty("--clip-left", "100%");
                } else {
                    normalCard.style.setProperty("--clip-right", "0%");
                    asciiCard.style.setProperty("--clip-left", "0%");
                }
            }
        });

        if ((window as any).setScannerScanning) {
            (window as any).setScannerScanning(anyScanning);
        }
    }

    startPeriodicUpdates() {
        this.intervalId = setInterval(() => {
            const contents = this.cardLine.querySelectorAll('.ascii-content');
            contents.forEach(content => {
                if (Math.random() < 0.15) {
                    const { width, height } = this.calculateCodeDimensions(400, 250);
                    content.textContent = this.generateCode(width, height);
                }
            });
        }, 200);
    }

    toggleAnimation() { this.isAnimating = !this.isAnimating; }
    resetPosition() {
        this.position = this.containerWidth;
        this.velocity = 120;
        this.direction = -1;
        this.isAnimating = true;
    }
    changeDirection() { this.direction *= -1; }
}


// --- Particle System (Three.js) ---
class ParticleSystem {
    scene: THREE.Scene;
    camera: THREE.OrthographicCamera;
    renderer: THREE.WebGLRenderer;
    particles: THREE.Points;
    particleCount = 400;
    canvas: HTMLCanvasElement;
    velocities: Float32Array;
    alphas: Float32Array;
    reqId: number | null = null;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, 125, -125, 1, 1000);
        this.camera.position.z = 100;

        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
        this.renderer.setSize(window.innerWidth, 250);
        this.renderer.setClearColor(0x000000, 0);

        this.velocities = new Float32Array(this.particleCount);
        this.alphas = new Float32Array(this.particleCount);

        // Placeholder for THREE definition to avoid TS strict errors if not strictly typed
        this.particles = new THREE.Points();

        this.initParticles();
        this.animate();
        window.addEventListener("resize", this.onResize);
    }

    destroy() {
        if (this.reqId) cancelAnimationFrame(this.reqId);
        window.removeEventListener("resize", this.onResize);
        this.renderer.dispose();
    }

    onResize = () => {
        this.camera.left = -window.innerWidth / 2;
        this.camera.right = window.innerWidth / 2;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, 250);
    }

    initParticles() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);
        const sizes = new Float32Array(this.particleCount);

        // Setup texture
        const canvas = document.createElement("canvas");
        canvas.width = 32; canvas.height = 32;
        const ctx = canvas.getContext("2d")!;
        const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        grad.addColorStop(0, "#ffffff");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(16, 16, 16, 0, Math.PI * 2); ctx.fill();
        const texture = new THREE.CanvasTexture(canvas);

        for (let i = 0; i < this.particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * window.innerWidth * 2;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
            positions[i * 3 + 2] = 0;

            colors[i * 3] = 1; colors[i * 3 + 1] = 0.8; colors[i * 3 + 2] = 0.2; // Gold tint
            sizes[i] = Math.random() * 4;
            this.velocities[i] = Math.random() * 60 + 30;
            this.alphas[i] = Math.random();
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
        geometry.setAttribute("alpha", new THREE.BufferAttribute(this.alphas, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: { pointTexture: { value: texture } },
            vertexShader: `
                attribute float alpha;
                varying float vAlpha;
                varying vec3 vColor;
                attribute float size;
                void main() {
                    vAlpha = alpha;
                    vColor = color;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                uniform sampler2D pointTexture;
                varying float vAlpha;
                varying vec3 vColor;
                void main() {
                    gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    animate = () => {
        this.reqId = requestAnimationFrame(this.animate);

        const positions = this.particles.geometry.attributes.position.array as Float32Array;
        const alphas = this.particles.geometry.attributes.alpha.array as Float32Array;

        for (let i = 0; i < this.particleCount; i++) {
            positions[i * 3] += this.velocities[i] * 0.016;
            if (positions[i * 3] > window.innerWidth / 2 + 100) {
                positions[i * 3] = -window.innerWidth / 2 - 100;
            }
            // twinkle
            if (Math.random() < 0.01) alphas[i] = Math.random();
        }

        this.particles.geometry.attributes.position.needsUpdate = true;
        this.particles.geometry.attributes.alpha.needsUpdate = true;
        this.renderer.render(this.scene, this.camera);
    }
}

// --- Particle Scanner (2D Canvas) ---
class ParticleScanner {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    w = 0; h = 0;
    particles: any[] = [];
    maxParticles = 100; // start low
    scanningActive = false;
    reqId: number | null = null;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d")!;
        this.resize();
        window.addEventListener("resize", () => this.resize());
        this.animate();
    }

    resize() {
        this.w = window.innerWidth;
        this.h = 350;
        this.canvas.width = this.w;
        this.canvas.height = this.h;
    }

    destroy() {
        if (this.reqId) cancelAnimationFrame(this.reqId);
    }

    setScanningActive(active: boolean) {
        this.scanningActive = active;
    }

    createParticle() {
        return {
            x: this.w / 2 + (Math.random() - 0.5) * 10,
            y: Math.random() * this.h,
            id: Math.random(),
            life: 1,
            decay: Math.random() * 0.05 + 0.02
        };
    }

    animate = () => {
        this.reqId = requestAnimationFrame(this.animate);
        this.ctx.clearRect(0, 0, this.w, this.h);

        // Only spawn intense particles if scanning
        if (this.scanningActive) {
            for (let i = 0; i < 5; i++) this.particles.push(this.createParticle());
        }

        this.ctx.globalCompositeOperation = "lighter";

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life -= p.decay;
            p.y += (Math.random() - 0.5) * 2;

            if (p.life <= 0) {
                this.particles.splice(i, 1);
                continue;
            }

            this.ctx.fillStyle = `rgba(202, 138, 4, ${p.life})`;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, Math.random() * 2, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }
}
