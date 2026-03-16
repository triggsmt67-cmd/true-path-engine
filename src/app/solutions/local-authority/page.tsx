
import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionSeparator from '@/components/SectionSeparator';
import { SpotlightCard } from '@/components/SpotlightCard';
import { MapPin, Zap, Shield, Search, ArrowRight, CheckCircle2, Globe, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local Authority Framework | True Path Digital',
  description: 'The Proximity Engine: A high-performance framework for dominating Montana’s local search map through strategic authority, not generic SEO.',
  alternates: {
    canonical: 'https://truepath406.com/solutions/local-authority'
  }
};

const pillars = [
  {
    role: "Core Infrastructure",
    title: "Proximity Mastery",
    description: "Your GMB is a signal engine, not a yellow pages listing. We optimize for the intersection of literal distance and perceived authority.",
    tags: ["Coordinate Integrity", "Category Logic", "Primary Search Area Optimization"],
    icon: MapPin
  },
  {
    role: "Market Authority",
    title: "Semantic Trust",
    description: "Connecting your business to the Montana entities that matter. We build citations that search engines actually use to verify your existence.",
    tags: ["Entity Association", "Hyper-local Citations", "Review Velocity Systems"],
    icon: Shield
  },
  {
    role: "Behavioral Logic",
    title: "Engagement Signals",
    description: "Search engines trust what users do. We drive behavioral signals that prove your business is the most relevant choice in your proximity.",
    tags: ["Click-Through Optimization", "Local Sentiment Analysis", "Path-to-Call Tracking"],
    icon: Zap
  }
];

export default function LocalAuthorityPage() {
  return (
    <div className="min-h-screen bg-background text-ice font-sans selection:bg-primary selection:text-white relative">
      {/* Global Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
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
          {/* Solution Hero */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#FF6B00]"></span>
                  <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-primary uppercase">
                    Logic Pillar 01
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold mb-10 tracking-tighter leading-[1.1]">
                  The Local Authority <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] via-primary to-[#78350f]">Framework</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl leading-relaxed font-light">
                  Dominate the maps without the generic SEO noise. A proprietary proximity engine designed specifically for the Montana growth market.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link
                    href="https://calendly.com/triggsmt67"
                    className="relative inline-flex h-16 w-full sm:w-auto overflow-hidden rounded-full p-[1px] group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] px-10 text-base font-medium text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-background whitespace-nowrap">
                      Run a Proximity Audit
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  
                  <div className="flex items-center gap-2 text-sm text-secondary/60 italic">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>See where your business is literally invisible.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SectionSeparator number="01" title="THE INTELLIGENCE" />
          
          {/* Market Insight Section */}
          <section className="py-20 bg-white/[0.01]">
            <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">
                  Visibility without conversion <br />
                  is just vanity.
                </h2>
                <div className="space-y-6 text-lg text-secondary/80 font-light leading-relaxed">
                  <p>
                    Most Montana agencies will sell you on "rankings." They'll show you a report with green arrows pointing up for keywords no one is actually searching.
                  </p>
                  <p>
                    <strong>We don't do that.</strong>
                  </p>
                  <p>
                    True Path Digital builds <span className="text-white font-normal">Local Authority.</span> We focus on the semantic link between your business and the specific needs of a Montana buyer. When they are 1.2 miles away and looking for a solution, you shouldn't just be on the list—you should be the only logical choice.
                  </p>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-12 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Globe className="w-40 h-40 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest text-primary">The Logic</h3>
                <ul className="space-y-8 relative z-10">
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">01</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">Proximity Weighting</h4>
                      <p className="text-sm text-secondary/60">Google's local algorithm is 40% proximity. We optimize your digital footprint to expand that radius.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">02</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">Semantic Relevance</h4>
                      <p className="text-sm text-secondary/60">We connect your business to regional entities so the algorithm views you as the Montana authority.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">03</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">Trust Convergence</h4>
                      <p className="text-sm text-secondary/60">Reviews, photos, and behavior signals converted into a single high-trust score.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <SectionSeparator number="02" title="THE INFRASTRUCTURE" />

          {/* Pillars Grid */}
          <section className="py-20 mb-32">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="mb-16 max-w-xl">
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">The Proximity Engine</h2>
                <p className="text-lg text-secondary font-light">Three technical pillars working in unison to build your local moat.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                  <SpotlightCard
                    key={index}
                    spotlightColor="rgba(255, 107, 0, 0.1)"
                    className="relative flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2/3 w-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-secondary group-hover:text-primary transition-colors duration-300">
                        <pillar.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-medium text-secondary uppercase tracking-widest bg-white/[0.03] px-2 py-1 rounded">
                        {pillar.role}
                      </span>
                    </div>

                    <div className="flex-1 mb-8">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-secondary text-sm leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-6 border-t border-white/5">
                      {pillar.tags.map((tag, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-secondary/60 group-hover:text-secondary transition-colors">
                          <div className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-primary/50 transition-colors"></div>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>

          {/* Comparison/Choice Section */}
          <section className="py-20 mb-20">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#0d0d0d] rounded-3xl border border-white/5 overflow-hidden">
                <div className="p-12 lg:p-20">
                  <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">The choice is simple.</h2>
                  <p className="text-lg text-secondary/80 font-light mb-12">
                    You can keep chasing keyword rankings that don't convert, or you can build a system that owns the proximity.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                      <div className="bg-red-500/10 p-2 rounded-lg mt-1">
                        <Shield className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Generic SEO Optimization</h4>
                        <p className="text-sm text-secondary/50">Random keywords, empty traffic, no local authority, and invisible to high-value buyers in your neighborhood.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-6 bg-primary/5 border border-primary/20 rounded-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <Zap className="w-20 h-20 text-primary" />
                      </div>
                      <div className="bg-primary/10 p-2 rounded-lg mt-1">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-primary font-bold mb-1">True Path Authority Framework</h4>
                        <p className="text-sm text-primary/70 font-medium">Proximity ownership, semantic trust, engagement signals, and a conversion engine that turns searches into revenue.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-full min-h-[400px] bg-gradient-to-br from-primary/20 to-[#0a0a0a] flex items-center justify-center p-12">
                   <div className="text-center">
                     <Users className="w-24 h-24 text-primary mx-auto mb-8 opacity-40" />
                     <h3 className="text-4xl font-semibold text-white mb-6">Built for results.</h3>
                     <p className="text-secondary max-w-sm mx-auto">Stop guessing. Own your market.</p>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 md:py-32 bg-primary relative overflow-hidden text-center group">
             <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
             <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-10 tracking-tighter">
                   Ready to own your <br />
                   proximity?
                </h2>
                <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                   Run a free Proximity Audit today. We'll show you exactly where your business is invisible on the map and how to fix it.
                </p>
                
                <Link
                  href="https://calendly.com/triggsmt67"
                  className="inline-flex h-20 items-center justify-center rounded-full bg-white px-12 text-xl font-semibold text-primary shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.05] active:scale-95 group-hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.4)]"
                >
                   Book Your Audit
                   <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
             </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
