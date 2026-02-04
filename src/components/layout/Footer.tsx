import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-brand-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="bg-brand-dark p-8 rounded-3xl border border-white/5">
            <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center mb-6">
              <span className="font-extrabold text-brand-dark text-xl">C</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Empowering the creditworthy to create a better financial future.
            </p>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Complete security. No asterisks. CRED encrypts all data and transactions to ensure a completely secure experience for our members.
            </p>
            <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/security-final-2.png" className="h-10 opacity-50 hover:opacity-100 transition-opacity" alt="Security badges" />
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Upgrades</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">CRED Money</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">CRED Mint</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">CRED Garage</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Payments</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Scan & Pay</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Tap to Pay</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">Pay anyone</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors duration-300">RuPay cards on UPI</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              {['About', 'Careers', 'Financials', 'Security', 'Terms'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors duration-300 text-sm cursor-pointer block py-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs font-medium text-gray-600">
            Copyright © 2020-26 Dreamplug Technologies Pvt Ltd.
          </p>
          <div className="flex gap-8 text-xs font-medium text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Security disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
