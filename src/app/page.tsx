
import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EarlyProofSection from '@/components/EarlyProofSection';
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

export const metadata: Metadata = {
  title: 'True Path Digital | Clear Decisions for Business Owners',
  description: 'High-performance marketing intelligence and AI strategy for local service businesses.',
  alternates: {
    canonical: 'https://truepath406.com/'
  }
};

export default function Page() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://truepath406.com/#webpage",
        "url": "https://truepath406.com/",
        "name": "True Path Digital | Clear Decisions for Business Owners",
        "description": "High-performance marketing intelligence and AI strategy for local service businesses.",
        "isPartOf": { "@id": "https://truepath406.com/#website" },
        "about": { "@id": "https://truepath406.com/#organization" }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://truepath406.com/#service",
        "name": "True Path Digital",
        "url": "https://truepath406.com/",
        "image": "https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg",
        "description": "Professional marketing intelligence and AI strategy for local service businesses.",
        "telephone": "+1-406-880-6992",
        "priceRange": "$$",
        "areaServed": "Montana",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "MT",
          "addressCountry": "US"
        }
      }
    ]
  };
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans selection:bg-brand-red selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      
      {/* Global Vertical Grid Background - Subtle dark lines for light mode */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full border-l border-black/[0.03] border-r border-black/[0.03] flex justify-between">
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <StakesSection />
          <SectionSeparator number="01" title="WHY GOOD BUSINESSES STILL LOSE JOBS" />
          <FeatureSplit />
          <QuoteSection />
          <EarlyProofSection />

          <SectionSeparator number="02" title="THE REAL PROBLEM" />
          <MissionSection />

          <SectionSeparator number="03" title="CORE SERVICES" />
          <Solutions />

          <SectionSeparator number="04" title="RUN INSTANT SCAN" />
          <TrailGrid />

          <SectionSeparator number="05" title="ABOUT TREVOR" />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}