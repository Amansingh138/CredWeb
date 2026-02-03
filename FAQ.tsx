
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "What is CRED?",
    answer: "CRED is a members-only club that rewards trustworthy individuals with financial and lifestyle progress. Members are rewarded with exclusive perks and privileges for making sound financial decisions."
  },
  {
    question: "How do I become a member?",
    answer: "To become a CRED member, you need a credit score of 750 or above. You can apply for membership by signing up on CRED with your name and a valid mobile number."
  },
  {
    question: "Is CRED safe?",
    answer: "Yes, CRED uses bank-grade security and end-to-end encryption. Your data is strictly used for providing the service and is never sold to third parties."
  },
  {
    question: "Which banks are supported?",
    answer: "CRED supports credit card bill payments for Amex, Standard Chartered, Citi, HSBC, HDFC, ICICI, SBI, AXIS, RBL, PNB, and other top Indian banks."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-[#0a0d12]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <div key={i} className="glass rounded-3xl overflow-hidden border-white/5">
              <button 
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-bold">{faq.question}</span>
                {openIndex === i ? <ChevronUp className="text-gray-500" /> : <ChevronDown className="text-gray-500" />}
              </button>
              {openIndex === i && (
                <div className="px-8 pb-8 text-gray-400 leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
