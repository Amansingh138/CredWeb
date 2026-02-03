
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-extrabold text-2xl">C</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tighter">CRED</span>
            </div>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
              Complete security. No asterisks. CRED encrypts all data and transactions to ensure a completely secure experience for our members.
            </p>
            <img src="https://web-images.credcdn.in/v2/_next/assets/images/landing/security-final-2.png" className="h-10 opacity-50 hover:opacity-100 transition-opacity" alt="Security badges" />
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Upgrades</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">CRED Money</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRED Mint</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CRED Garage</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Payments</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Scan & Pay</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tap to Pay</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pay anyone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RuPay cards on UPI</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About CRED</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Policy</a></li>
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
