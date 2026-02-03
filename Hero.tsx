
import React from 'react';
import { MousePointer2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center px-10 md:px-24 overflow-hidden">
      {/* Background Orbs to match the image */}
      <div className="orb w-[500px] h-[500px] bg-indigo-700 top-[10%] left-[20%] animate-pulse-soft"></div>
      <div className="orb w-[400px] h-[400px] bg-blue-500 top-[40%] right-[10%] animate-pulse-soft" style={{ animationDelay: '-2s' }}></div>
      <div className="orb w-[300px] h-[300px] bg-amber-500/20 bottom-[10%] left-[30%] blur-[120px]"></div>
      <div className="orb w-[600px] h-[600px] bg-purple-900/40 -top-20 -left-20 animate-pulse-soft"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight">
            The Future of <br />
            Online Banking
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed font-normal">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Financial freedom starts with a single click.
          </p>
        </div>

        {/* Right Content - Cards */}
        <div className="relative h-[500px] flex items-center justify-center lg:justify-end">
          {/* Main Blue Card */}
          <div className="absolute transform rotate-[25deg] translate-x-12 translate-y-10 w-[320px] h-[200px] bg-indigo-600/60 glass border-white/5 rounded-[40px] shadow-2xl backdrop-blur-3xl animate-float"></div>
          
          {/* Top Glass Card */}
          <div className="absolute transform rotate-[-25deg] -translate-x-12 -translate-y-10 w-[340px] h-[220px] bg-white/10 glass border-white/20 rounded-[40px] shadow-2xl backdrop-blur-md p-8 flex flex-col justify-between animate-float" style={{ animationDelay: '-3s' }}>
            <div className="flex justify-between items-start">
               <div className="w-8 h-8 rounded-full bg-white/20"></div>
               <span className="text-[10px] text-white/60 font-medium uppercase tracking-widest">Master card</span>
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
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce"></div>
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
