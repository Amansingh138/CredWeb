
import React from 'react';
import { Star } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-[#131313] py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-2 text-center md:text-left">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Trusted by 15M+ members</p>
          <h2 className="text-3xl font-bold tracking-tight">The proof writes itself</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#CA8A04" className="text-brand-gold" />)}
            </div>
            <p className="text-2xl font-bold">4.8 <span className="text-gray-500">/5</span></p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">App Store</p>
          </div>

          <div className="w-[1px] h-16 bg-white/10 hidden md:block"></div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#CA8A04" className="text-brand-gold" />)}
            </div>
            <p className="text-2xl font-bold">4.8 <span className="text-gray-500">/5</span></p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Play Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};
