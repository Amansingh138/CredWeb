
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { Features } from './components/sections/Features';
import { Dashboard } from './components/sections/Dashboard';
import { SecuritySection } from './components/sections/SecuritySection';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';
import { CardStream } from './components/sections/CardStream';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-brand-dark animate-fade-in">
      <Navbar />
      <main>
        <Hero />
        <CardStream />
        <TrustBar />
        <Features />
        <Dashboard />
        <SecuritySection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
