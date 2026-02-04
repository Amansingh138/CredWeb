
import React from 'react';
import { ShieldCheck, Lock, EyeOff, CheckCircle2 } from 'lucide-react';

export const SecuritySection: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <div className="w-20 h-20 bg-brand-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-brand-gold/20 shadow-[0_0_30px_-10px_rgba(202,138,4,0.3)]">
            <ShieldCheck size={40} className="text-brand-gold" />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Your data isn't our business. Keeping it safe is.</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            All your personal data and transactions are encrypted and secured. There's no room for mistakes because we didn't leave any.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "End-to-End Encryption",
              desc: "Every transaction and communication is guarded with bank-grade AES-256 bit encryption.",
              icon: <Lock />
            },
            {
              title: "Privacy First",
              desc: "We don't sell your data to third parties. Your financial life remains strictly private.",
              icon: <EyeOff />
            },
            {
              title: "Zero Error Policy",
              desc: "Automated auditing systems ensure 100% accuracy in bill detection and payment tracking.",
              icon: <CheckCircle2 />
            }
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-[40px] border-white/5 space-y-6 hover:border-brand-gold/20 transition-all hover:-translate-y-2 duration-300">
              <div className="text-brand-gold/80">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
