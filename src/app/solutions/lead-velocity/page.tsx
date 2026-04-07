import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionSeparator from '@/components/SectionSeparator';
import { SpotlightCard } from '@/components/SpotlightCard';
import { Shield, ArrowRight, CheckCircle2, Target, Zap, Settings, PhoneMissed, Clock, Filter, FileText, CheckCircle, TrendingUp, Key, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Missed Call Recovery & Lead Response | True Path Digital',
  description: 'Set up a cleaner, faster lead-response process so calls, forms, and quote requests stop slipping through the cracks.',
  alternates: {
    canonical: 'https://truepath406.com/solutions/lead-velocity/'
  }
};

const problemCards = [
  {
    title: "Missed calls",
    body: "The phone rings, no one answers, and the lead moves on to the next business before anyone calls back.",
    icon: PhoneMissed
  },
  {
    title: "Slow response",
    body: "Even interested customers cool off fast when replies take too long or no one follows up clearly.",
    icon: Clock
  },
  {
    title: "Inconsistent intake",
    body: "Calls, forms, texts, and quote requests come in through different places, but there is no clean process for handling them.",
    icon: Filter
  },
  {
    title: "Quotes that go cold",
    body: "Estimates are sent, then forgotten. Without follow-up, warm opportunities quietly disappear.",
    icon: FileText
  }
];

const optimizationChecklist = [
  "Lead-response audit",
  "Missed call risk review",
  "Intake path cleanup",
  "Response-speed review",
  "Follow-up gap identification",
  "Quote and estimate follow-up recommendations",
  "Simple missed call recovery process",
  "Call / text / form handoff cleanup",
  "Priority action plan for what to fix first"
];

const whoThisIsFor = [
  "Owner-operated businesses where the owner is often in the field",
  "Small teams where calls, forms, and admin are handled inconsistently",
  "Businesses getting leads but not enough booked jobs from them",
  "Companies where estimates and callbacks tend to fall through the cracks"
];

export default function LeadResponsePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://truepath406.com/solutions/lead-velocity#service",
    "name": "Missed Call Recovery & Lead Response",
    "serviceType": "Lead Management & Operations",
    "provider": {
      "@id": "https://truepath406.com/#organization"
    },
    "areaServed": {
      "@type": "State",
      "name": "Montana"
    },
    "description": "Set up a cleaner, faster lead-response process so calls, forms, and quote requests stop slipping through the cracks."
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
                  Stop Losing Jobs to <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] via-primary to-[#78350f]">Missed Calls and Slow Response</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white font-medium mb-6">
                  Set up a cleaner, faster lead-response process so calls, forms, and quote requests stop slipping through the cracks.
                </p>

                <p className="text-lg md:text-xl text-secondary/80 mb-12 max-w-2xl leading-relaxed font-light">
                  This is practical help for service businesses where the owner is busy, the phone matters, and weak follow-up quietly costs real jobs.
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
                  Most lost jobs do not look like “marketing problems.”
                </h2>
                <p className="text-xl text-secondary font-light leading-relaxed">
                  A lot of service businesses think they need more leads when the real problem is that the leads they already get are not being handled fast enough or consistently enough. Missed calls, slow follow-up, and weak intake systems quietly kill booked work.
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
                      This service is for businesses that are already generating demand but know too much of it is leaking out after the first contact.
                    </p>
                    <p className="text-secondary font-light leading-relaxed mb-6 relative z-10">
                      The goal is <span className="text-white font-medium">not</span> to add more noise.
                    </p>
                    <p className="text-secondary font-light leading-relaxed relative z-10">
                      The goal is to tighten the response path so more real opportunities turn into booked work.
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
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Practical response improvements.</h2>
                  <p className="text-xl text-primary font-medium">Not abstract sales process talk.</p>
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
                    Built for service businesses where speed and follow-up affect booked work.
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
                     A cleaner response path that helps more leads <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-primary">turn into real jobs.</span>
                   </h2>

                   <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <Shield className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">Fewer leads lost</p>
                           <p className="text-secondary font-light leading-relaxed">Plugging the leaks so demand stops falling off after the very first contact.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <Key className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">Clearer intake process</p>
                           <p className="text-secondary font-light leading-relaxed">A more unified way of handling calls, forms, texts, and inbound quote requests.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <Zap className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">Faster response</p>
                           <p className="text-secondary font-light leading-relaxed">Setting up simple processes that buy you time while capturing the lead instantly.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <TrendingUp className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">Consistent follow-up</p>
                           <p className="text-secondary font-light leading-relaxed">Less dependence on memory and more consistency in closing warm opportunities.</p>
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-primary">how leads are handled now.</span>
              </h2>
              
              <p className="text-lg text-secondary/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                If calls are being missed, replies are slow, or quotes are going cold, that usually becomes visible quickly. The first step is not buying more marketing. It is looking at where the response path is breaking down and deciding what to fix first.
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
                      <h3 className="text-xl font-semibold text-white mb-4">Is this the same as CRM setup or automation?</h3>
                      <p className="text-lg text-secondary font-light leading-relaxed">
                        Sometimes it overlaps, but this service starts earlier and more practically. It is about identifying where leads are being lost now and tightening the response process before adding extra tools.
                      </p>
                   </SpotlightCard>
                   
                   <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.05)" className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black/40 rounded-[2rem]">
                      <h3 className="text-xl font-semibold text-white mb-4">Do I need more leads first?</h3>
                      <p className="text-lg text-secondary font-light leading-relaxed">
                        Not always. A lot of businesses already have enough demand to expose the real issue. The problem is often response speed, follow-up discipline, or intake consistency.
                      </p>
                   </SpotlightCard>

                   <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.05)" className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black/40 rounded-[2rem]">
                      <h3 className="text-xl font-semibold text-white mb-4">Who is this best for?</h3>
                      <p className="text-lg text-secondary font-light leading-relaxed">
                        It is best for local service businesses where calls, forms, and estimates are coming in, but too much of that demand is being lost because no one is handling it cleanly enough.
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
