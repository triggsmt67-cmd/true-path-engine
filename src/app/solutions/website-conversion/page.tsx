import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionSeparator from '@/components/SectionSeparator';
import { SpotlightCard } from '@/components/SpotlightCard';
import { ArrowRight, CheckCircle2, Target, Settings, HelpCircle, MousePointer2, ShieldAlert, AlertOctagon, MessageSquare, ShieldCheck, LineChart } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Website Conversion Repair | True Path Digital',
  description: 'Fix the parts of your website that create hesitation, confusion, or friction so more of your existing traffic turns into real inquiries.',
  alternates: {
    canonical: 'https://truepath406.com/solutions/website-conversion/'
  }
};

const problemCards = [
  {
    title: "Unclear messaging",
    body: "People land on the site, but they cannot quickly tell what you do, who you help, or why they should trust you.",
    icon: HelpCircle
  },
  {
    title: "Weak calls to action",
    body: "The site does not make the next step obvious enough, so visitors hesitate instead of calling or reaching out.",
    icon: MousePointer2
  },
  {
    title: "Thin trust signals",
    body: "Reviews, proof, photos, service detail, and credibility cues are too weak to support a confident decision.",
    icon: ShieldAlert
  },
  {
    title: "Friction that kills action",
    body: "Mobile experience, layout issues, confusing page flow, or scattered information make it harder than it should be to take the next step.",
    icon: AlertOctagon
  }
];

const optimizationChecklist = [
  "Homepage messaging review",
  "Service-page clarity review",
  "Call-to-action cleanup",
  "Trust signal review",
  "Mobile conversion friction review",
  "Page hierarchy and content flow improvements",
  "Contact and quote-request path cleanup",
  "Service-to-page alignment recommendations",
  "Priority action plan for what to fix first"
];

const whoThisIsFor = [
  "Owner-operated businesses relying on calls and quote requests",
  "Companies with a site that feels dated, thin, confusing, or underwhelming",
  "Businesses getting traffic but not enough inquiries from it",
  "Teams that need a clearer path from visit to action"
];

export default function WebsiteConversionPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://truepath406.com/solutions/website-conversion/#webpage",
        "url": "https://truepath406.com/solutions/website-conversion/",
        "name": "Website Conversion Repair | True Path Digital",
        "description": "Fix the parts of your website that create hesitation, confusion, or friction so more of your existing traffic turns into real inquiries.",
        "isPartOf": { "@id": "https://truepath406.com/#website" },
        "breadcrumb": { "@id": "https://truepath406.com/solutions/website-conversion/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://truepath406.com/solutions/website-conversion/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://truepath406.com/" },
          { "@type": "ListItem", "position": 2, "name": "Solutions", "item": "https://truepath406.com/solutions/" },
          { "@type": "ListItem", "position": 3, "name": "Website Conversion" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://truepath406.com/solutions/website-conversion/#service",
        "name": "Website Conversion Repair",
        "serviceType": "Conversion Rate Optimization",
        "provider": { "@id": "https://truepath406.com/#organization" },
        "telephone": "+1-406-880-6992",
        "areaServed": { "@type": "State", "name": "Montana" },
        "description": "Fix the parts of your website that create hesitation, confusion, or friction so more of your existing traffic turns into real inquiries."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans selection:bg-brand-accent selection:text-brand-navy relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      
      {/* Global Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center opacity-40">
        <div className="w-full max-w-[1400px] h-full border-l border-black/[0.03] border-r flex justify-between">
          <div className="h-full w-px bg-black/[0.03]"></div>
          <div className="h-full w-px bg-black/[0.03]"></div>
          <div className="h-full w-px bg-black/[0.03]"></div>
          <div className="h-full w-px bg-black/[0.03]"></div>
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
                  <span className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(79,124,122,0.5)]"></span>
                  <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-brand-accent uppercase">
                    Core Service
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold mb-10 tracking-tighter leading-[1.05]">
                  Turn More Website Visitors <br className="hidden lg:block" />
                  <span className="text-brand-accent">Into Calls</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-brand-navy font-medium mb-6">
                  Fix the parts of your website that create hesitation, confusion, or friction so more of your existing traffic turns into real inquiries.
                </p>

                <p className="text-lg md:text-xl text-text-secondary/80 mb-12 max-w-2xl leading-relaxed font-light">
                  This is practical help for service businesses whose website may look acceptable, but is not doing enough to support trust, action, and booked work.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link
                    href="https://calendly.com/triggsmt67"
                    className="relative inline-flex h-16 w-full sm:w-auto overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-[0_0_40px_-5px_rgba(79,124,122,0.2)] transition-all hover:scale-[1.02] active:scale-95 duration-300"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-brand-accent/40 via-brand-accent/80 to-brand-accent/40 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-brand-accent px-10 text-base font-semibold text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-brand-accent/90 whitespace-nowrap">
                      Review My Current Setup
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                  
                  <Link
                    href="/trust-calculator"
                    className="inline-flex h-16 w-full sm:w-auto items-center justify-center rounded-full px-10 text-base font-medium text-brand-navy border border-black/10 hover:bg-black/5 transition-colors duration-300 whitespace-nowrap"
                  >
                    Run Instant Scan
                  </Link>
                </div>
                
                <p className="text-sm text-text-secondary/60 mt-6 sm:ml-4 text-center sm:text-left">
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
                <h2 className="text-3xl md:text-5xl font-semibold text-brand-navy mb-8 tracking-tight leading-tight">
                  A website can look fine and still underperform.
                </h2>
                <p className="text-xl text-text-secondary font-light leading-relaxed">
                  A lot of small service businesses assume their website is “good enough” because it loads, has a few pages, and shows their phone number. But if the message is unclear, trust is weak, or the next step is not obvious, real visitors leave without calling.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                  {problemCards.map((card, index) => (
                    <SpotlightCard
                      key={index}
                      spotlightColor="rgba(79, 124, 122, 0.05)"
                      className="p-8 bg-surface border border-black/10 shadow-xl shadow-black/[0.02] rounded-3xl h-full flex flex-col"
                    >
                      <div className="w-12 h-12 rounded-xl bg-black/[0.03] flex items-center justify-center text-brand-accent mb-6">
                        <card.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-brand-navy mb-3">{card.title}</h3>
                      <p className="text-text-secondary/70 font-light leading-relaxed">{card.body}</p>
                    </SpotlightCard>
                  ))}
                </div>

                <div className="lg:col-span-1 h-full">
                  <SpotlightCard
                    spotlightColor="rgba(79, 124, 122, 0.08)"
                    className="p-10 bg-surface border border-brand-accent/20 rounded-3xl h-full flex flex-col justify-center relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                      <Settings className="w-40 h-40 text-brand-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold text-brand-navy mb-6 relative z-10">The Goal</h3>
                    <p className="text-text-secondary font-light leading-relaxed mb-6 relative z-10">
                      This service is for businesses already getting some traffic but not enough action from it.
                    </p>
                    <p className="text-text-secondary font-light leading-relaxed mb-6 relative z-10">
                      The goal is <span className="text-brand-navy font-medium">not</span> to redesign everything for the sake of it.
                    </p>
                    <p className="text-text-secondary font-light leading-relaxed relative z-10">
                      The goal is to fix the parts of the site that get in the way of trust and conversion.
                    </p>
                  </SpotlightCard>
                </div>
              </div>
            </div>
          </section>

          <SectionSeparator number="02" title="WHAT I ACTUALLY HELP IMPROVE" />

          {/* 3. WHAT I ACTUALLY HELP IMPROVE SECTION */}
          <section className="py-20 lg:py-32 bg-background border-y border-black/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-brand-accent/2 blur-[120px] pointer-events-none" />
             <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="mb-16">
                  <h2 className="text-3xl md:text-5xl font-semibold text-brand-navy mb-6 tracking-tight">Practical website fixes.</h2>
                  <p className="text-xl text-brand-accent font-medium">Not vague redesign talk.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {optimizationChecklist.map((item, index) => (
                     <div key={index} className="flex items-start gap-4 p-6 bg-surface border border-black/5 rounded-2xl hover:bg-black/5 transition-colors">
                        <div className="mt-1">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                        </div>
                        <span className="text-brand-navy font-medium">{item}</span>
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
                  <h2 className="text-3xl md:text-5xl font-semibold text-brand-navy mb-8 tracking-tight leading-tight">
                    Built for service businesses that need their website to do more than just exist.
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   {whoThisIsFor.map((point, index) => (
                     <SpotlightCard 
                       key={index}
                       spotlightColor="rgba(79, 124, 122, 0.05)"
                       className="p-8 bg-surface border border-black/10 rounded-3xl flex items-start gap-5 shadow-xl shadow-black/[0.02]"
                     >
                        <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                        <p className="text-lg text-text-secondary font-light leading-relaxed">{point}</p>
                     </SpotlightCard>
                   ))}
                </div>
             </div>
          </section>

          <SectionSeparator number="04" title="WHAT A BETTER RESULT LOOKS LIKE" />

          {/* 5. WHAT A BETTER RESULT LOOKS LIKE SECTION */}
          <section className="py-20 mb-12">
             <div className="max-w-[1400px] mx-auto px-6">
                <div className="bg-surface border border-black/10 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl shadow-black/[0.04]">
                   <div className="absolute top-0 right-0 p-12 opacity-10 blur-sm pointer-events-none">
                     <Target className="w-64 h-64 text-brand-navy" />
                   </div>
                   
                   <h2 className="text-3xl md:text-5xl font-semibold text-brand-navy mb-16 tracking-tight relative z-10 max-w-3xl">
                     A site that makes the next step <span className="text-brand-accent">easier to take.</span>
                   </h2>

                   <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                           <MessageSquare className="w-5 h-5 text-brand-accent" />
                         </div>
                         <div>
                           <p className="text-lg text-brand-navy font-medium mb-2">Clearer messaging</p>
                           <p className="text-text-secondary font-light leading-relaxed">Language that helps visitors understand the offer faster.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                           <ShieldCheck className="w-5 h-5 text-brand-accent" />
                         </div>
                         <div>
                           <p className="text-lg text-brand-navy font-medium mb-2">Stronger trust signals</p>
                           <p className="text-text-secondary font-light leading-relaxed">Proof and credibility visible at the exact moment people are deciding.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                           <ArrowRight className="w-5 h-5 text-brand-accent" />
                         </div>
                         <div>
                           <p className="text-lg text-brand-navy font-medium mb-2">Better calls to action</p>
                           <p className="text-text-secondary font-light leading-relaxed">Cleaner page flow with obvious next steps that guide users to reach out.</p>
                         </div>
                      </div>
                      
                      <div className="flex gap-5">
                         <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0">
                           <LineChart className="w-5 h-5 text-brand-accent" />
                         </div>
                         <div>
                           <p className="text-lg text-brand-navy font-medium mb-2">Fewer points of confusion</p>
                           <p className="text-text-secondary font-light leading-relaxed">A more useful website that actively supports calls, quote requests, and booked work.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          <SectionSeparator number="05" title="HOW IT STARTS" />

          {/* 6. HOW IT STARTS / CTA SECTION */}
          <section className="py-24 md:py-32 relative overflow-hidden border-t border-black/5 text-center">
            <div className="absolute inset-0 bg-brand-accent/5 blur-[120px] pointer-events-none" />
            <div className="max-w-3xl mx-auto px-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-[10px] uppercase font-bold tracking-widest mb-8">
                <Target className="w-3 h-3" />
                First Step
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-brand-navy mb-8 tracking-tighter leading-tight">
                Start with a review of <br className="hidden sm:block" />
                <span className="text-brand-accent">what your website is doing now.</span>
              </h2>
              
              <p className="text-lg text-text-secondary/80 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
                If your site is getting traffic but not enough calls or inquiries, that usually points to a clarity or friction problem. The first step is to look at what a real visitor is seeing, where trust is weak, and what is getting in the way of action.
              </p>

              <div className="flex flex-col items-center justify-center gap-6">
                <a
                  href="https://calendly.com/triggsmt67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-16 md:h-20 overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-[0_0_50px_-10px_rgba(79,124,122,0.2)] w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-95 duration-300"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-accent/50 via-brand-accent to-brand-accent/50 opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-brand-accent px-10 md:px-14 text-base md:text-lg font-semibold text-white backdrop-blur-3xl gap-4 transition-colors group-hover:bg-brand-accent/90 whitespace-nowrap">
                    Review My Current Setup
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </a>
                
                <p className="text-sm text-text-secondary/60">
                  Takes 15 minutes. No sales pitch. I’ll call your cell.
                </p>
              </div>
            </div>
          </section>

          <SectionSeparator number="06" title="FAQ" />

          {/* 7. FAQ SECTION */}
          <section className="py-20 mb-20 bg-background border-y border-black/5">
             <div className="max-w-[1000px] mx-auto px-6">
                <div className="mb-16 text-center">
                  <h2 className="text-3xl md:text-5xl font-semibold text-brand-navy mb-6 tracking-tight">Questions People Usually Have</h2>
                </div>
                
                <div className="space-y-6">
                   <SpotlightCard spotlightColor="rgba(79, 124, 122, 0.05)" className="p-8 md:p-10 bg-surface border border-black/10 shadow-2xl shadow-black/[0.02] rounded-[2rem]">
                      <h3 className="text-xl font-semibold text-brand-navy mb-4">Is this a full website redesign?</h3>
                      <p className="text-lg text-text-secondary font-light leading-relaxed">
                        Not necessarily. Sometimes the biggest gains come from fixing messaging, calls to action, trust signals, and page flow without rebuilding the whole site.
                      </p>
                   </SpotlightCard>
                   
                   <SpotlightCard spotlightColor="rgba(79, 124, 122, 0.05)" className="p-8 md:p-10 bg-surface border border-black/10 shadow-2xl shadow-black/[0.02] rounded-[2rem]">
                      <h3 className="text-xl font-semibold text-brand-navy mb-4">How do I know if my website is the problem?</h3>
                      <p className="text-lg text-text-secondary font-light leading-relaxed">
                        If traffic is coming in but calls and quote requests feel weaker than they should, the website may be creating confusion or friction at the wrong moment.
                      </p>
                   </SpotlightCard>

                   <SpotlightCard spotlightColor="rgba(79, 124, 122, 0.05)" className="p-8 md:p-10 bg-surface border border-black/10 shadow-2xl shadow-black/[0.02] rounded-[2rem]">
                      <h3 className="text-xl font-semibold text-brand-navy mb-4">Who is this best for?</h3>
                      <p className="text-lg text-text-secondary font-light leading-relaxed">
                        It is best for local service businesses with an existing website that feels underwhelming, unclear, or not effective enough at turning traffic into real inquiries.
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
