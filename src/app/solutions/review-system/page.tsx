import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionSeparator from '@/components/SectionSeparator';
import { SpotlightCard } from '@/components/SpotlightCard';
import { Shield, ArrowRight, CheckCircle2, Target, Zap, Settings, StarOff, CalendarDays, AlertCircle, Users, RefreshCw, BarChart3, Fingerprint, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Review Generation Systems | True Path Digital',
  description: 'Build a simple, repeatable review system that helps more happy customers actually leave feedback.',
  alternates: {
    canonical: 'https://truepath406.com/solutions/review-system/'
  }
};

const problemCards = [
  {
    title: "Not enough reviews",
    body: "You may do good work, but there is not enough visible proof online to make people feel confident choosing you.",
    icon: StarOff
  },
  {
    title: "Inconsistent asking",
    body: "Reviews get requested sometimes, but there is no repeatable process that makes it happen consistently.",
    icon: CalendarDays
  },
  {
    title: "Too much friction",
    body: "Customers are willing to leave a review, but the process is not easy enough or clear enough in the moment.",
    icon: AlertCircle
  },
  {
    title: "Weak trust at decision time",
    body: "When people compare options, thin reviews or weak recent activity can make a better business look less credible.",
    icon: Users
  }
];

const optimizationChecklist = [
  "Review process audit",
  "Request timing review",
  "Review ask messaging cleanup",
  "Customer handoff improvements",
  "Friction reduction in the review process",
  "Google review workflow recommendations",
  "Staff or owner request guidance",
  "Response guidance for incoming reviews",
  "Priority action plan for what to fix first"
];

const whoThisIsFor = [
  "Owner-operated businesses that rely on local trust",
  "Companies with strong word-of-mouth but weak online proof",
  "Businesses that know they should be getting more reviews than they are",
  "Teams that need a simpler, more consistent way to ask"
];

export default function ReviewSystemPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://truepath406.com/solutions/review-system#service",
    "name": "Review Generation Systems",
    "serviceType": "Reputation Management & Local SEO",
    "provider": {
      "@id": "https://truepath406.com/#organization"
    },
    "areaServed": {
      "@type": "State",
      "name": "Montana"
    },
    "description": "Build a simple, repeatable review system that helps more happy customers actually leave feedback."
  };

  return (
    <div className="min-h-screen bg-background text-ice font-sans selection:bg-primary selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Global Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center opacity-40">
        <div className="w-full max-w-[1400px] h-full border-l border-white/[0.03] border-r flex justify-between">
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-24 md:pt-32">
          {/* 1. HERO SECTION */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#FF6B00]"></span>
                  <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    Core Service
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold mb-10 tracking-tighter leading-[1.05]">
                  Get More Reviews Without <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] via-primary to-[#78350f]">Chasing Customers</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white font-medium mb-6">
                  Build a simple, repeatable review system that helps more happy customers actually leave feedback.
                </p>

                <p className="text-lg md:text-xl text-secondary/80 mb-12 max-w-2xl leading-relaxed font-light">
                  This is practical help for service businesses that do good work but do not have a consistent process for turning that work into visible trust.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link
                    href="https://calendly.com/triggsmt67"
                    className="relative inline-flex h-16 w-full sm:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-[0_0_40px_-5px_rgba(180,83,9,0.35)] transition-all hover:scale-[1.02] active:scale-95 duration-300"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] px-10 text-base font-semibold text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-background whitespace-nowrap">
                      Review My Current Setup
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                  
                  <Link
                    href="/trust-calculator"
                    className="inline-flex h-16 w-full sm:w-auto items-center justify-center rounded-full px-10 text-base font-medium text-white border border-white/10 hover:bg-white/5 transition-colors duration-300 whitespace-nowrap"
                  >
                    Run Instant Scan
                  </Link>
                </div>
                
                <p className="text-sm text-secondary/60 mt-6 sm:ml-4 text-center sm:text-left">
                  Takes 15 minutes. No sales pitch. I’ll call your cell.
                </p>
              </div>
            </div>
          </section>

          <SectionSeparator number="01" title="WHAT THIS FIXES" />
          
          {/* 2. WHAT THIS FIXES SECTION */}
          <section className="py-20">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="mb-16 max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight leading-tight">
                  Good businesses still lose work when proof is thin.
                </h2>
                <p className="text-xl text-secondary font-light leading-relaxed">
                  A lot of service businesses do solid work, but their reviews do not reflect it. The issue usually is not quality. It is inconsistency. No one asks at the right time, the process is too awkward, or the request gets forgotten when the day gets busy.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                  {problemCards.map((card, index) => (
                    <SpotlightCard
                      key={index}
                      spotlightColor="rgba(255, 107, 0, 0.05)"
                      className="p-8 bg-white/[0.02] border border-white/10 shadow-xl shadow-black/40 rounded-3xl h-full flex flex-col"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center text-primary mb-6">
                        <card.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                      <p className="text-secondary/70 font-light leading-relaxed">{card.body}</p>
                    </SpotlightCard>
                  ))}
                </div>

                <div className="lg:col-span-1 h-full">
                  <SpotlightCard
                    spotlightColor="rgba(255, 107, 0, 0.08)"
                    className="p-10 bg-[#0d0d0d] border border-primary/20 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Settings className="w-40 h-40 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-6 relative z-10">The Goal</h3>
                    <p className="text-secondary font-light leading-relaxed mb-6 relative z-10">
                      This service is for businesses that already do work people appreciate but need a better system for turning that into visible trust.
                    </p>
                    <p className="text-secondary font-light leading-relaxed mb-6 relative z-10">
                      The goal is <span className="text-white font-medium">not</span> to game reviews.
                    </p>
                    <p className="text-secondary font-light leading-relaxed relative z-10">
                      The goal is to make it easier for real customers to leave honest feedback.
                    </p>
                  </SpotlightCard>
                </div>
              </div>
            </div>
          </section>

          <SectionSeparator number="02" title="WHAT I ACTUALLY HELP IMPROVE" />

          {/* 3. WHAT I ACTUALLY HELP IMPROVE SECTION */}
          <section className="py-20 lg:py-32 bg-[#080808] border-y border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/2 blur-[120px] pointer-events-none" />
             <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="mb-16">
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">A cleaner review process.</h2>
                  <p className="text-xl text-primary font-medium">Not vague reputation talk.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {optimizationChecklist.map((item, index) => (
                     <div key={index} className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
                        <div className="mt-1">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-white font-medium">{item}</span>
                     </div>
                   ))}
                </div>
             </div>
          </section>

          <SectionSeparator number="03" title="WHO THIS IS FOR" />

          {/* 4. WHO THIS IS FOR SECTION */}
          <section className="py-20">
             <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-16 max-w-3xl">
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight leading-tight">
                    Built for service businesses where trust affects who gets the next call.
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   {whoThisIsFor.map((point, index) => (
                     <SpotlightCard 
                       key={index}
                       spotlightColor="rgba(255, 255, 255, 0.05)"
                       className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl flex items-start gap-5 shadow-xl shadow-black/40"
                     >
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-lg text-secondary font-light leading-relaxed">{point}</p>
                     </SpotlightCard>
                   ))}
                </div>
             </div>
          </section>

          <SectionSeparator number="04" title="WHAT A BETTER RESULT LOOKS LIKE" />

          {/* 5. WHAT A BETTER RESULT LOOKS LIKE SECTION */}
          <section className="py-20 mb-12">
             <div className="max-w-[1400px] mx-auto px-6">
                <div className="bg-gradient-to-br from-[#0a0a0a] to-transparent border border-white/10 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-black/60">
                   <div className="absolute top-0 right-0 p-12 opacity-10 blur-sm pointer-events-none">
                     <Target className="w-64 h-64 text-white" />
                   </div>
                   
                   <h2 className="text-3xl md:text-5xl font-semibold text-white mb-16 tracking-tight relative z-10 max-w-3xl">
                     More visible proof. Less guesswork in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-primary">how you earn it.</span>
                   </h2>

                   <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <RefreshCw className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">A more consistent flow</p>
                           <p className="text-secondary font-light leading-relaxed">A steady, predictable stream of real customer reviews replacing random bursts of feedback.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <ShieldCheck className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">Stronger visible trust</p>
                           <p className="text-secondary font-light leading-relaxed">Proof that stands out when local prospects are comparing you directly against competitors.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <Fingerprint className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">Easier request process</p>
                           <p className="text-secondary font-light leading-relaxed">Less dependence on memory and more consistency in asking exactly when the customer is happiest.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <BarChart3 className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">Better online alignment</p>
                           <p className="text-secondary font-light leading-relaxed">Ensuring the quality of the work you do is actually reflected in the way the business appears online.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          <SectionSeparator number="05" title="HOW IT STARTS" />

          {/* 6. HOW IT STARTS / CTA SECTION */}
          <section className="py-24 md:py-32 relative overflow-hidden border-t border-white/5 text-center">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="max-w-3xl mx-auto px-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-widest mb-8">
                <Target className="w-3 h-3" />
                First Step
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 tracking-tighter leading-tight">
                Start with a review of <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-primary">your current review process.</span>
              </h2>
              
              <p className="text-lg text-secondary/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                If reviews are coming in too slowly, too randomly, or not at all, that usually points to a process problem. The first step is to look at how requests are being made now, where friction exists, and what to fix first.
              </p>

              <div className="flex flex-col items-center justify-center gap-6">
                <a
                  href="https://calendly.com/triggsmt67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-16 md:h-20 overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-[0_0_50px_-10px_rgba(180,83,9,0.2)] w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-95 duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] px-10 md:px-14 text-base md:text-lg font-semibold text-white backdrop-blur-3xl gap-4 transition-colors group-hover:bg-[#121212] whitespace-nowrap">
                    Review My Current Setup
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </a>
                
                <p className="text-sm text-secondary/60">
                  Takes 15 minutes. No sales pitch. I’ll call your cell.
                </p>
              </div>
            </div>
          </section>

          <SectionSeparator number="06" title="FAQ" />

          {/* 7. FAQ SECTION */}
          <section className="py-20 mb-20 bg-[#080808] border-y border-white/5">
             <div className="max-w-[1000px] mx-auto px-6">
                <div className="mb-16 text-center">
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Questions People Usually Have</h2>
                </div>
                
                <div className="space-y-6">
                   <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.05)" className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black/40 rounded-[2rem]">
                      <h3 className="text-xl font-semibold text-white mb-4">Is this about buying reviews or using gimmicks?</h3>
                      <p className="text-lg text-secondary font-light leading-relaxed">
                        No. This is about building a clean, honest process that makes it easier for real customers to leave feedback after a good experience.
                      </p>
                   </SpotlightCard>
                   
                   <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.05)" className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black/40 rounded-[2rem]">
                      <h3 className="text-xl font-semibold text-white mb-4">Do reviews really matter that much?</h3>
                      <p className="text-lg text-secondary font-light leading-relaxed">
                        Yes. Reviews affect trust, visibility, and how confident people feel when they compare local options. Good work with weak proof often gets overlooked.
                      </p>
                   </SpotlightCard>

                   <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.05)" className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black/40 rounded-[2rem]">
                      <h3 className="text-xl font-semibold text-white mb-4">Who is this best for?</h3>
                      <p className="text-lg text-secondary font-light leading-relaxed">
                        It is best for local service businesses that do good work but do not have a consistent, practical system for earning enough real reviews to reflect that.
                      </p>
                   </SpotlightCard>
                </div>
             </div>
          </section>

        </main>
        
        <Footer />
      </div>
    </div>
  );
}
