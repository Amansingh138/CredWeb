import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  // Fix: Added React import to resolve the React namespace for ReactNode usage
  icon: React.ReactNode;
  category: 'UPGRADES' | 'PAYMENTS';
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}