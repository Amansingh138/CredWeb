
import React from 'react';
import { Menu } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-10 flex items-center justify-between pointer-events-none">
      <div className="flex items-center gap-6 pointer-events-auto">
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 rounded-full bg-white/20 blur-[1px]"></div>
          <div className="w-8 h-8 rounded-full bg-white/40 -ml-4"></div>
        </div>
        <a href="mailto:info@yourexam.com" className="text-[10px] font-medium text-white/40 tracking-wider hover:text-white transition-colors">
          / info@yourexam.com
        </a>
      </div>

      <div className="flex items-center gap-8 pointer-events-auto">
        <button className="px-6 py-2.5 glass rounded-full text-[10px] font-bold uppercase tracking-[0.2em] border-white/10 hover:bg-white/10 transition-all">
          Get In Touch
        </button>
        <button className="p-3 bg-indigo-600/60 glass border-none rounded-xl text-white hover:bg-indigo-500 transition-colors">
          <Menu size={18} strokeWidth={2.5} />
        </button>
      </div>
    </nav>
  );
};
