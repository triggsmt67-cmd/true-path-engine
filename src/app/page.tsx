
'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSplit from '@/components/FeatureSplit';
import MissionSection from '@/components/MissionSection';
import Solutions from '@/components/Solutions';
import TrailGrid from '@/components/TrailGrid';
import AboutSection from '@/components/AboutSection';
import StakesSection from '@/components/StakesSection';
import SectionSeparator from '@/components/SectionSeparator';
import ComparisonSection from '@/components/ComparisonSection';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-ice font-sans selection:bg-primary selection:text-white relative">
      {/* Global Vertical Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full border-l border-white/[0.03] border-r flex justify-between">
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SectionSeparator number="01" title="GROWTH ENGINE" />
          <FeatureSplit />
          <QuoteSection />

          <SectionSeparator number="02" title="THE MISSION" />
          <MissionSection />

          <SectionSeparator number="03" title="INFRASTRUCTURE" />
          <Solutions />

          <SectionSeparator number="04" title="THE PROTOCOL" />
          <TrailGrid />

          <SectionSeparator number="05" title="THE CHOICE" />
          <StakesSection />

          <SectionSeparator number="06" title="THE ARCHITECT" />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}