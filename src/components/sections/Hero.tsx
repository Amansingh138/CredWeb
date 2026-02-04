
import React from 'react';
import { MousePointer2, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center px-10 md:px-24 overflow-hidden">
      {/* Background Orbs to match the image */}
      <div className="orb w-[500px] h-[500px] bg-indigo-700 top-[10%] left-[20%] animate-pulse-soft"></div>
      <div className="orb w-[400px] h-[400px] bg-blue-500 top-[40%] right-[10%] animate-pulse-soft" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-gold/10 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight">
            Financial <br />
            <span className="text-brand-gold">Evolution.</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed font-normal">
            Experience the next phase of banking with our streamlined tools designed for modern life.
          </p>
        </div>

        {/* Right Content - Cards */}
        <div className="relative h-[500px] flex items-center justify-center lg:justify-end">
          {/* Main Blue Card */}
          <div className="absolute transform rotate-[25deg] translate-x-12 translate-y-10 w-[320px] h-[200px] bg-indigo-600/60 glass border-white/5 rounded-[40px] shadow-2xl backdrop-blur-3xl animate-float"></div>

          {/* Top Glass Card */}
          <div className="absolute transform rotate-[-25deg] -translate-x-12 -translate-y-10 w-[340px] h-[220px] bg-white/10 glass border-white/20 rounded-[40px] shadow-2xl backdrop-blur-md p-8 flex flex-col justify-between animate-float" style={{ animationDelay: '-3s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-brand-gold/20 animate-pulse-soft cursor-default">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">Now live for everyone</span>
            </div>
            <div>
              <p className="text-[10px] text-white/40 tracking-[0.4em] mb-2">**** **** **** 2180</p>
              <h3 className="text-4xl font-light tracking-tight">$18,649.55</h3>
            </div>
          </div>

          {/* Floating Orb Detail */}
          <div className="absolute top-[20%] right-[40%] w-10 h-10 glass bg-white/10 rounded-full flex items-center justify-center border-white/20">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom Interface Elements */}
      <div className="absolute bottom-12 left-24 hidden md:flex flex-col items-center gap-4 text-white/40">
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Join 10M+ members who trust CRED to enhance their financial lifestyle.
          <span className="text-brand-gold font-medium"> Experience the upgrade.</span>
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button className="bg-brand-gold text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-highlight hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(202,138,4,0.3)] flex items-center gap-3 cursor-pointer group">
            Download App
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="glass px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3 cursor-pointer group hover:border-brand-gold/30">
            <span className="text-gray-200">View features</span>
          </button>
        </div>
      </div>

      {/* Support Bubble */}
      <div className="absolute bottom-12 right-12 flex items-center gap-4 group cursor-pointer">
        <div className="text-right">
          <p className="text-[10px] text-white/40 font-medium leading-none">Any Question?</p>
          <p className="text-[10px] text-white/60 font-bold group-hover:text-white transition-colors">Talk to our expert</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-indigo-600/40 glass border-white/10 flex items-center justify-center">
          <div className="w-5 h-5 bg-indigo-400 blur-[6px] rounded-full"></div>
        </div>
      </div>

      {/* Pagination indicators on right */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
      </div>
    </section>
  );
};
