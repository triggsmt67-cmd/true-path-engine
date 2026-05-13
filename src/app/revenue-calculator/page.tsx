import React from 'react';
import RevenueLeakCalculator from '@/components/RevenueLeakCalculator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RevenueCalculatorPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans relative">
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-32 pb-24 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
                Test The Calculator
              </h1>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                This is a staging page to view the new Revenue Leak MVP component.
              </p>
            </div>
            
            {/* The component */}
            <RevenueLeakCalculator />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
