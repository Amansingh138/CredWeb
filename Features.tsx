
import React from 'react';
import { Wallet, Landmark, Car, QrCode, Smartphone, CreditCard, ArrowUpRight } from 'lucide-react';

const FEATURE_DATA = [
  {
    title: "Unified Wealth",
    description: "Your net worth, bank balances, and assets in one fluid dashboard.",
    icon: <Landmark size={28} />,
    color: "from-indigo-500/10 to-transparent"
  },
  {
    title: "Secured Mint",
    description: "Earn consistent 9% returns on your capital through verified investments.",
    icon: <Wallet size={28} />,
    color: "from-blue-500/10 to-transparent"
  },
  {
    title: "Smart Garage",
    description: "The complete ecosystem for your car: valuation, insurance, and service.",
    icon: <Car size={28} />,
    color: "from-purple-500/10 to-transparent"
  },
  {
    title: "Quantum Pay",
    description: "Lightning-fast UPI payments with an added layer of rewards.",
    icon: <QrCode size={28} />,
    color: "from-indigo-400/10 to-transparent"
  },
  {
    title: "Phone Tap",
    description: "Contactless payments reimagined. Just tap your device and walk away.",
    icon: <Smartphone size={28} />,
    color: "from-blue-400/10 to-transparent"
  },
  {
    title: "Credit UPI",
    description: "The power of credit meets the convenience of UPI transactions.",
    icon: <CreditCard size={28} />,
    color: "from-indigo-600/10 to-transparent"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-32 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl space-y-6 mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Financial <br />
            <span className="text-white/40">Evolution.</span>
          </h2>
          <p className="text-white/30 text-base leading-relaxed">
            Experience the next phase of banking with our streamlined tools designed for modern life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_DATA.map((feature, idx) => (
            <div key={idx} className="group relative overflow-hidden glass p-10 rounded-[40px] border-white/5 hover:border-white/10 transition-all hover:-translate-y-2 duration-500 cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10 space-y-8">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white/40 group-hover:text-white transition-all duration-500 border-white/5">
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-white/30 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
