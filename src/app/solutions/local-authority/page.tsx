'use client';

import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionSeparator from '@/components/SectionSeparator';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/SpotlightCard';
import { MapPin, Shield, Search, ArrowRight, CheckCircle2, Globe, FileText, ClipboardList, Star } from 'lucide-react';
import Link from 'next/link';

const areas = [
  {
    role: "Trust Signals",
    title: "Google Business Profile",
    description: "Your profile is often a deciding factor for trust. We evaluate reviews, service clarity, photos, and response behavior to ensure it feels credible and current.",
    tags: ["Review Quality", "Information Accuracy", "Response Discipline"],
    icon: Star
  },
  {
    role: "Search Alignment",
    title: "Relevance & Focus",
    description: "Visibility must support the work you actually want to do. We review whether you are showing up for the right jobs, rather than just chasing generic traffic.",
    tags: ["Service Matching", "Audience Alignment", "Intent Verification"],
    icon: Search
  },
  {
    role: "Conversion Path",
    title: "Footprint Health",
    description: "Rankings without conversion are not the goal. We check if your local footprint makes it easy for a potential customer to trust you and reach out.",
    tags: ["Friction Identification", "Contact Clarity", "Decision Ease"],
    icon: ClipboardList
  }
];

export default function LocalTrustPage() {
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
        
        <main className="pt-20 md:pt-28">
          {/* Solution Hero */}
          <section className="relative py-16 md:py-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#FF6B00]"></span>
                  <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-primary uppercase">
                    Review Area
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold mb-10 tracking-tighter leading-[1.1]">
                  Local Trust & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] via-primary to-[#78350f]">Visibility</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl leading-relaxed font-light">
                  Local visibility is only valuable if it reinforces trust. We review your public footprint to ensure it is driving the type of work your business actually wants.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link
                    href="https://calendly.com/triggsmt67"
                    className="relative inline-flex h-16 w-full sm:w-auto overflow-hidden rounded-full p-[1px] group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] px-10 text-base font-medium text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-background whitespace-nowrap">
                      Schedule a Review
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  
                  <div className="flex items-center gap-2 text-sm text-secondary/60 italic">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Get clarity on where your visibility stands today.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <SectionSeparator number="01" title="THE INTELLIGENCE" />
          
          {/* Market Insight Section */}
          <section className="py-16 bg-white/[0.01]">
            <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">
                  Visibility without trust <br />
                  produces waste.
                </h2>
                <div className="space-y-6 text-lg text-secondary/80 font-light leading-relaxed">
                  <p>
                    Many agencies focus purely on aggregate traffic or arbitrary keyword rankings. They measure success by whether you show up on a list, rather than whether you are actually the most logical choice for a buyer safely deciding who to call.
                  </p>
                  <p>
                    <strong>We approach this differently.</strong>
                  </p>
                  <p>
                    We prioritize <span className="text-white font-normal">Local Trust</span>. 
                    When a homeowner or business looks for a solution in your area, your digital footprint shouldn't just be visible—it needs to be credible, clear, and professional. Traffic is irrelevant if the prospect loses confidence before reaching out.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/[0.02] border border-white/5 p-12 rounded-3xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Globe className="w-40 h-40 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest text-primary">The Evaluation</h3>
                <ul className="space-y-8 relative z-10">
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">01</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">Proof of Competence</h4>
                      <p className="text-sm text-secondary/60">Does your presence offer recent, high-quality reviews and clear responses that demonstrate professionalism?</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">02</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">Service Alignment</h4>
                      <p className="text-sm text-secondary/60">Is your business categorized and presented in a way that attracts your ideal, higher-margin jobs?</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">03</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">Current Relevance</h4>
                      <p className="text-sm text-secondary/60">Do your photos, updates, and overall footprint show an active, reliable operation within the community?</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </section>

          <SectionSeparator number="02" title="REVIEW AREAS" />

          {/* Pillars Grid */}
          <section className="py-16 mb-16">
            <div className="max-w-[1400px] mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 max-w-xl"
              >
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">How We Evaluate</h2>
                <p className="text-lg text-secondary font-light">The core areas we review to determine if your visibility is accurately representing your business.</p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {areas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="h-full"
                    >
                      <SpotlightCard
                      key={index}
                      spotlightColor="rgba(255, 107, 0, 0.1)"
                      className="relative flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,107,0,0.02)] group"
                    >
                      <div className="flex items-center justify-between mb-8">
                        <div className="text-secondary group-hover:text-primary transition-colors duration-300">
                          <Icon className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] font-medium text-secondary uppercase tracking-widest bg-white/[0.03] px-2 py-1 rounded">
                          {area.role}
                        </span>
                      </div>

                      <div className="flex-1 mb-8">
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 tracking-tight">
                          {area.title}
                        </h3>
                        <p className="text-secondary text-sm leading-relaxed font-light">
                          {area.description}
                        </p>
                      </div>

                      <div className="space-y-2 pt-6 border-t border-white/5">
                        {area.tags.map((tag, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-secondary/60 group-hover:text-secondary transition-colors">
                            <div className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-primary/50 transition-colors"></div>
                            {tag}
                          </div>
                        ))}
                      </div>
                    </SpotlightCard>
                  </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Comparison/Choice Section */}
          <section className="py-16 mb-16">
            <div className="max-w-[1400px] mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-center bg-[#0d0d0d] rounded-3xl border border-white/5 overflow-hidden"
              >
                <div className="p-12 lg:p-20">
                  <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">Practical clarity.</h2>
                  <p className="text-lg text-secondary/80 font-light mb-12">
                    You can pay for vague SEO reports that promise the world, or you can build a stable, trusted presence that makes sense for your specific local market.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                      <div className="bg-red-500/10 p-2 rounded-lg mt-1 flex-shrink-0">
                        <Shield className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Generic SEO Packages</h4>
                        <p className="text-sm text-secondary/50">Focused on arbitrary keyword rankings, traffic volume, and technical jargon designed to confuse rather than clarify.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-6 bg-primary/5 border border-primary/20 rounded-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <CheckCircle2 className="w-20 h-20 text-primary" />
                      </div>
                      <div className="bg-primary/10 p-2 rounded-lg mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-primary font-bold mb-1">True Path Advisory</h4>
                        <p className="text-sm text-primary/70 font-medium">A careful review of your footprint, ensuring it projects competence, builds trust, and attracts the exact jobs you want.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-full min-h-[400px] bg-gradient-to-br from-primary/20 to-[#0a0a0a] flex items-center justify-center p-12">
                   <div className="text-center">
                     <FileText className="w-24 h-24 text-primary mx-auto mb-8 opacity-40" />
                     <h3 className="text-4xl font-semibold text-white mb-6">Informed decisions.</h3>
                     <p className="text-secondary max-w-sm mx-auto">Get the clarity you need to align your visibility with your business goals.</p>
                   </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-24 bg-primary relative overflow-hidden text-center group">
             <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="max-w-4xl mx-auto px-6 relative z-10"
             >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-10 tracking-tighter">
                   Ready for a clear <br />
                   evaluation?
                </h2>
                <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                   Schedule a visibility review. We’ll look at your public footprint together and determine if it's honestly supporting your business.
                </p>
                
                <Link
                  href="https://calendly.com/triggsmt67"
                  className="inline-flex h-20 items-center justify-center rounded-full bg-white px-12 text-xl font-semibold text-primary shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.05] active:scale-95 group-hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.4)]"
                >
                   Schedule Review
                   <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
             </motion.div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
