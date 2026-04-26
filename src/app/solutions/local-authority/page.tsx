import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionSeparator from '@/components/SectionSeparator';
import { SpotlightCard } from '@/components/SpotlightCard';
import { Shield, Search, ArrowRight, CheckCircle2, Target, Zap, Settings, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Google Business Profile Optimization | Benchmark Automotive',
  description: 'Improve your Google Business Profile so local customers can find you more easily, trust what they see, and take action faster.',
  alternates: {
    canonical: 'https://truepath406.com/solutions/local-authority/'
  }
};

const problemCards = [
  {
    title: "Weak local visibility",
    body: "Your business is not showing up clearly enough when nearby customers search for the services you actually offer.",
    icon: Search
  },
  {
    title: "Thin trust signals",
    body: "Your profile may exist, but weak reviews, outdated details, or poor presentation make it easier to skip.",
    icon: Shield
  },
  {
    title: "Confusing services",
    body: "Customers cannot quickly tell what you do, where you work, or whether you are the right fit.",
    icon: Target
  },
  {
    title: "Traffic that does not convert",
    body: "People find you, but the profile and linked website do not make the next step clear enough.",
    icon: Zap
  }
];

const optimizationChecklist = [
  "Google Business Profile audit",
  "Primary and secondary category review",
  "Service list cleanup and clarification",
  "Business description rewrite",
  "Hours, details, and profile accuracy cleanup",
  "Review and response guidance",
  "Photo and media recommendations",
  "Website link and conversion alignment",
  "Priority action plan for what to fix first"
];

const whoThisIsFor = [
  "HVAC, plumbing, electrical, roofing, septic, cleaning, landscaping, auto repair, and similar service businesses",
  "Owner-operated or family-run businesses where the phone matters",
  "Companies with an active Google profile that still feels underwhelming",
  "Businesses that want clearer visibility before spending more on ads"
];

export default function GoogleBusinessProfilePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://truepath406.com/solutions/local-authority/#webpage",
        "url": "https://truepath406.com/solutions/local-authority/",
        "name": "Google Business Profile Optimization | Benchmark Automotive",
        "description": "Improve your Google Business Profile so local customers can find you more easily, trust what they see, and take action faster.",
        "isPartOf": { "@id": "https://truepath406.com/#website" },
        "breadcrumb": { "@id": "https://truepath406.com/solutions/local-authority/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://truepath406.com/solutions/local-authority/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://truepath406.com/" },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://truepath406.com/solutions/" },
          { "@type": "ListItem", "position": 3, "name": "Local Authority" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://truepath406.com/solutions/local-authority/#service",
        "name": "Google Business Profile Optimization",
        "serviceType": "Local Visibility & Conversion",
        "provider": { "@id": "https://truepath406.com/#organization" },
        "telephone": "+1-406-880-6992",
        "areaServed": { "@type": "State", "name": "Montana" },
        "description": "Improve your Google Business Profile so local customers can find you more easily, trust what they see, and take action faster."
      }
    ]
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
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#FF6B00]"></span>
                  <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    Core Service
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold mb-10 tracking-tighter leading-[1.05]">
                  Show Up Better in <br className="hidden sm:block" />
                  <span className="text-brand-red font-semibold">Local Search</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-white font-medium mb-6">
                  Improve your Google Business Profile so local customers can find you more easily, trust what they see, and take action faster.
                </p>

                <p className="text-lg md:text-xl text-secondary/80 mb-12 max-w-2xl leading-relaxed font-light">
                  This is practical help for service businesses with weak visibility, unclear service messaging, stale profile details, or trust signals that are not doing enough work.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link
                    href="https://calendly.com/triggsmt67"
                    className="relative inline-flex h-16 w-full sm:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-[0_0_40px_-5px_rgba(180,83,9,0.35)] transition-all hover:scale-[1.02] active:scale-95 duration-300"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-bg px-10 text-base font-semibold text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-background whitespace-nowrap">
                      Review My Current Setup
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                  
                  <Link
                    href="/trust-calculator"
                    className="inline-flex h-16 w-full sm:w-auto items-center justify-center rounded-full px-10 text-base font-medium text-brand-navy border-2 border-black/5 hover:bg-black/5 hover:border-brand-red/20 uppercase tracking-widest font-bold transition-colors duration-300 whitespace-nowrap"
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
                  Your profile should help people choose you faster.
                </h2>
                <p className="text-xl text-secondary font-light leading-relaxed">
                  A weak Google Business Profile quietly costs jobs. Sometimes the business is good, but the profile looks incomplete, unclear, or stale. That gap creates doubt right when a customer is deciding who to call.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                  {problemCards.map((card, index) => (
                    <SpotlightCard
                      key={index}
                      spotlightColor="rgba(255, 107, 0, 0.05)"
                      className="p-8 bg-white/[0.02] border border-black/5 shadow-xl shadow-black/40 rounded-3xl h-full flex flex-col"
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
                      This service is for businesses that already have a profile but know it is not doing enough.
                    </p>
                    <p className="text-secondary font-light leading-relaxed mb-6 relative z-10">
                      The goal is <span className="text-white font-medium">not</span> to make the page look “optimized.” 
                    </p>
                    <p className="text-secondary font-light leading-relaxed relative z-10">
                      The goal is to make it clearer, stronger, and more trustworthy where real customers are already searching.
                    </p>
                  </SpotlightCard>
                </div>
              </div>
            </div>
          </section>

          <SectionSeparator number="02" title="WHAT I ACTUALLY OPTIMIZE" />

          {/* 3. WHAT I ACTUALLY OPTIMIZE SECTION */}
          <section className="py-20 lg:py-32 bg-bg border-y border-black/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/2 blur-[120px] pointer-events-none" />
             <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="mb-16">
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Concrete profile improvements.</h2>
                  <p className="text-xl text-primary font-medium">Not vague SEO language.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {optimizationChecklist.map((item, index) => (
                     <div key={index} className="flex items-start gap-4 p-6 bg-white/[0.02] border border-black/5 rounded-2xl hover:bg-white/[0.04] transition-colors">
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
                <div className="mb-16 max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight leading-tight">
                    Built for service businesses where visibility and trust affect the next call.
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   {whoThisIsFor.map((point, index) => (
                     <SpotlightCard 
                       key={index}
                       spotlightColor="rgba(255, 255, 255, 0.05)"
                       className="p-8 bg-bg border border-black/5 rounded-3xl flex items-start gap-5 shadow-xl shadow-black/40"
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
                <div className="bg-gradient-to-br from-[#0a0a0a] to-transparent border border-black/5 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-black/60">
                   <div className="absolute top-0 right-0 p-12 opacity-10 blur-sm pointer-events-none">
                     <Target className="w-64 h-64 text-white" />
                   </div>
                   
                   <h2 className="text-3xl md:text-5xl font-semibold text-white mb-16 tracking-tight relative z-10 max-w-3xl">
                     A stronger local presence that makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-primary">choosing you easier.</span>
                   </h2>

                   <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <Shield className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">A more credible profile</p>
                           <p className="text-secondary font-light leading-relaxed">A profile that looks more complete, credible, and current.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <Search className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">Clearer service language</p>
                           <p className="text-secondary font-light leading-relaxed">Messaging that matches what customers are actually searching for.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <Star className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">Stronger trust signals</p>
                           <p className="text-secondary font-light leading-relaxed">Enhanced trust through better review presentation, visuals, and profile detail.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                           <Zap className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                           <p className="text-lg text-white font-medium mb-2">A cleaner conversion path</p>
                           <p className="text-secondary font-light leading-relaxed">A straightforward path from search to call, click, or booking.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          <SectionSeparator number="05" title="HOW IT STARTS" />

          {/* 6. HOW IT STARTS / CTA SECTION */}
          <section className="py-24 md:py-32 relative overflow-hidden border-t border-black/5 text-center">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="max-w-3xl mx-auto px-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-widest mb-8">
                <Target className="w-3 h-3" />
                First Step
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 tracking-tighter leading-tight">
                Start with a review of <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-primary">your current profile.</span>
              </h2>
              
              <p className="text-lg text-secondary/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                If the profile is thin, unclear, out of date, or not aligned with the services you actually want more of, that is usually visible pretty fast. The first step is not guessing. It is reviewing what is there now and identifying what to fix first.
              </p>

              <div className="flex flex-col items-center justify-center gap-6">
                <a
                  href="https://calendly.com/triggsmt67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-16 md:h-20 overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-[0_0_50px_-10px_rgba(180,83,9,0.2)] w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-95 duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-bg px-10 md:px-14 text-base md:text-lg font-semibold text-white backdrop-blur-3xl gap-4 transition-colors group-hover:bg-[#121212] whitespace-nowrap">
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
          <section className="py-20 mb-20 bg-bg border-y border-black/5">
             <div className="max-w-[1000px] mx-auto px-6">
                <div className="mb-16 text-center">
                  <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">Questions People Usually Have</h2>
                </div>
                
                <div className="space-y-6">
                   <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.05)" className="p-8 md:p-10 bg-bg border border-black/5 shadow-2xl shadow-black/40 rounded-[2rem]">
                      <h3 className="text-xl font-semibold text-white mb-4">Is this the same thing as local SEO?</h3>
                      <p className="text-lg text-secondary font-light leading-relaxed">
                        Part of it overlaps, but this service is more practical and more focused. It is about improving the actual Google Business Profile customers see when they search, not selling vague SEO work.
                      </p>
                   </SpotlightCard>
                   
                   <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.05)" className="p-8 md:p-10 bg-bg border border-black/5 shadow-2xl shadow-black/40 rounded-[2rem]">
                      <h3 className="text-xl font-semibold text-white mb-4">Can you guarantee rankings?</h3>
                      <p className="text-lg text-secondary font-light leading-relaxed">
                        No. But I can improve the quality, clarity, and trust of the profile, which gives you a stronger local presence and a better shot at converting the visibility you earn.
                      </p>
                   </SpotlightCard>

                   <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.05)" className="p-8 md:p-10 bg-bg border border-black/5 shadow-2xl shadow-black/40 rounded-[2rem]">
                      <h3 className="text-xl font-semibold text-white mb-4">Who is this best for?</h3>
                      <p className="text-lg text-secondary font-light leading-relaxed">
                        It is best for local service businesses that already have a profile but know it is incomplete, stale, underperforming, or not aligned with the work they actually want more of.
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
