'use client';

import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionSeparator from '@/components/SectionSeparator';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/SpotlightCard';
import { PhoneCall, AlertCircle, ClipboardCheck, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';

const pillars = [
  {
    role: "Intake Evaluation",
    title: "Call Handling & Response",
    description: "I evaluate how inquiries are managed when the phone rings. If an opportunity comes in, the process to capture it should be frictionless and reliable.",
    tags: ["Answering Behavior", "First-Touch Friction", "Information Gathering"],
    icon: PhoneCall
  },
  {
    role: "Leakage Diagnosis",
    title: "Missed Call Recovery",
    description: "Every missed call is a potential lost job. I look at what happens when no one is available and whether that lead is recovered gracefully or just ignored.",
    tags: ["Voicemail Routing", "Secondary Response Protocol", "Opportunity Salvage"],
    icon: AlertCircle
  },
  {
    role: "Process Discipline",
    title: "Follow-Up Structure",
    description: "Demand is often wasted in the follow-up. I review how quotes are tracked, chased, and communicated until a final decision is made.",
    tags: ["Quote Tracking", "Communication Cadence", "Close-Rate Support"],
    icon: ClipboardCheck
  }
];

export default function DemandCapturePage() {
  return (
    <div className="min-h-screen bg-background text-ice font-sans selection:bg-primary selection:text-white relative">
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
          {/* Hero */}
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
                   Demand Capture <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] via-primary to-[#78350f]">& Follow-Up</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl leading-relaxed font-light">
                  Awareness is wasted if the process after the call is weak. I evaluate your intake and response discipline so you stop leaking the demand you already have.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link
                    href="https://calendly.com/triggsmt67"
                    className="relative inline-flex h-16 w-full sm:w-auto overflow-hidden rounded-full p-[1px] group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] px-10 text-base font-medium text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-background whitespace-nowrap">
                      Review Your Demand Capture
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  
                  <div className="flex items-center gap-2 text-sm text-secondary/60 italic">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Understand the leak before you spend more.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <SectionSeparator number="01" title="THE LEAK" />
          
          {/* The Pain Section */}
          <section className="py-16 bg-white/[0.01]">
            <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">
                  Marketing cannot fix <br />
                  an operational problem.
                </h2>
                <div className="space-y-6 text-lg text-secondary/80 font-light leading-relaxed">
                  <p>
                    It is common to assume that low booked work means you need more leads, more ads, or a new marketing agency. Often, that is not the case.
                  </p>
                  <p>
                    <strong>The issue happens after the phone rings.</strong>
                  </p>
                  <p>
                    If calls go to voicemail, if quotes aren't followed up on, or if intake feels disorganized, <span className="text-white font-normal">paying for more traffic simply creates more waste.</span> I review response discipline to ensure your current foundation is solid before recommending more spend.
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
                  <AlertCircle className="w-40 h-40 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest text-primary">The Diagnosis</h3>
                <ul className="space-y-8 relative z-10">
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">01</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">Identify the Gaps</h4>
                      <p className="text-sm text-secondary/60">I look at exactly where people are falling off—whether it's missed calls or slow estimates.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">02</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">Evaluate Response Speed</h4>
                      <p className="text-sm text-secondary/60">I review how fast inquiries are handled. Delays here quietly weaken the value of every marketing dollar.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">03</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">Review Intake Friction</h4>
                      <p className="text-sm text-secondary/60">I make sure the experience of handing you money is sensible and professional, not confusing.</p>
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
                <p className="text-lg text-secondary font-light">The core areas I look at to determine if you are successfully catching the demand you generate.</p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
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
                      spotlightColor="rgba(255, 107, 0, 0.1)"
                      className="relative flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,107,0,0.02)] group"
                    >
                      <div className="flex items-center justify-between mb-8">
                        <div className="text-secondary group-hover:text-primary transition-colors duration-300">
                          <Icon className="w-6 h-6" strokeWidth={1.5} />
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
                  </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          <SectionSeparator number="03" title="THE CHOICE" />

          {/* Value Comparison */}
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
                  <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">Demand requires discipline.</h2>
                  <p className="text-lg text-secondary/80 font-light mb-12">
                    You can guess why leads aren't turning into jobs, or you can get an honest review of the process that happens after the call.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                      <div className="bg-red-500/10 p-2 rounded-lg mt-1 flex-shrink-0">
                        <Clock className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Ignoring the Leak</h4>
                        <p className="text-sm text-secondary/50">Paying for more ads while missed calls go to voicemail and quotes sit unfollowed for weeks.</p>
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
                        <p className="text-sm text-primary/70 font-medium">A careful review of your intake structure. We identify where good opportunities are being lost and ensure the foundation is sound before scaling.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-full min-h-[400px] bg-gradient-to-br from-primary/20 to-[#0a0a0a] flex items-center justify-center p-12">
                   <div className="text-center">
                     <ClipboardCheck className="w-24 h-24 text-primary mx-auto mb-8 opacity-40" />
                     <h3 className="text-4xl font-semibold text-white mb-6">Practical clarity.</h3>
                     <p className="text-secondary max-w-sm mx-auto">This is about operational discipline, not just flashy automation.</p>
                   </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Trade CTA */}
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
                   Ready to evaluate <br />
                   your capture process?
                </h2>
                <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                   Start with a conversation. We will look at your response discipline and identify where honest improvements can be made.
                </p>
                
                <Link
                  href="https://calendly.com/triggsmt67"
                  className="inline-flex h-20 items-center justify-center rounded-full bg-white px-12 text-xl font-semibold text-primary shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.05] active:scale-95 group-hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.4)]"
                >
                   Start with a Conversation
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
