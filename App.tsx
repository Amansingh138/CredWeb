
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Features } from './components/Features';
import { Dashboard } from './components/Dashboard';
import { SecuritySection } from './components/SecuritySection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
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
