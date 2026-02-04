
import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-between pointer-events-none transition-all duration-300">
      <div className="flex items-center gap-6 pointer-events-auto">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center shadow-[0_0_20px_-5px_rgba(202,138,4,0.5)] group-hover:scale-105 transition-transform duration-300">
            <span className="font-extrabold text-brand-dark text-xl">C</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-gold transition-colors">CRED</span>
        </div>
      </div>

      <div className="flex items-center gap-6 pointer-events-auto">
        <button className="hidden md:block px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:text-brand-gold transition-colors cursor-pointer text-gray-400">
          Sign In
        </button>
        <button className="px-6 py-2.5 bg-brand-gold text-brand-dark rounded-full text-xs font-bold uppercase tracking-[0.15em] hover:bg-brand-highlight hover:scale-105 transition-all shadow-[0_0_20px_-5px_rgba(202,138,4,0.3)] cursor-pointer">
          Get Early Access
        </button>
        <button className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 hover:border-brand-gold/30 transition-all cursor-pointer">
          <Menu size={20} strokeWidth={2} />
        </button>
      </div>
    </nav>
  );
};
