'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionSeparator from '@/components/SectionSeparator';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/SpotlightCard';
import { ArrowRight, CheckCircle2, AlertCircle, PieChart, Calendar, Network, Map, XCircle } from 'lucide-react';
import Link from 'next/link';

const reviewAreas = [
  {
    role: "Work Mix",
    title: "What kind of work is actually filling the schedule?",
    description: "A lot of service businesses say they want more installs, better projects, or higher-value work — but their public footprint still pulls mostly reactive service calls.\n\nThis is where I look at whether the business is attracting:\n• emergency work\n• planned work\n• install work\n• service-heavy work\n• low-value vs higher-value jobs\n\nThe point is not just to generate work.\nIt is to understand whether current demand supports the business the owner is actually trying to build.",
    tags: ["Emergency vs Planned Work", "Install vs Service Mix", "Higher-Value Positioning"],
    icon: PieChart
  },
  {
    role: "Seasonal Stability",
    title: "How exposed is the business to seasonal swings?",
    description: "In Montana, seasonality is real.\n\nWeather, staffing, travel distance, local demand cycles, and timing all affect how work shows up across the year.\n\nThis is where I look at:\n• slow periods\n• overloaded periods\n• whether demand drops are predictable\n• whether there is any real plan to reduce that pressure\n\nSome seasonality is normal.\nWhat matters is whether the business understands it well enough to make better decisions before the pressure hits.",
    tags: ["Seasonal Exposure", "Capacity Pressure", "Planning Gaps"],
    icon: Calendar
  },
  {
    role: "Demand Source Quality",
    title: "Where is the work coming from — and how fragile is it?",
    description: "Not all demand sources are equally strong.\n\nSome businesses rely too heavily on referrals.\nOthers depend on one lead source they do not fully trust.\nOthers are paying for volume without understanding whether that volume is producing the right jobs.\n\nThis is where I look at:\n• referral dependency\n• paid lead quality\n• repeat business strength\n• source fragility\n• whether channel mix supports stability or confusion\n\nThe right source is not always the loudest one.\nIt is the one that supports better work and clearer decisions over time.",
    tags: ["Referral Dependency", "Lead Source Quality", "Channel Fragility"],
    icon: Network
  }
];

export default function DemandStabilityPage() {
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
                    Decision Area 03
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold mb-10 tracking-tighter leading-[1.1]">
                  Demand Stability <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] via-primary to-[#78350f]">Review</span>
                </h1>
                
                <div className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl leading-relaxed font-light space-y-6">
                  <p>A lot of service businesses stay busy, but stay busy in the wrong way.</p>
                  <p>If your work mix is too reactive, too seasonal, or too dependent on referrals, growth will keep feeling unstable no matter how much effort you put into marketing.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link
                    href="https://calendly.com/triggsmt67"
                    className="relative inline-flex h-16 w-full sm:w-auto overflow-hidden rounded-full p-[1px] group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] px-10 text-base font-medium text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-background whitespace-nowrap">
                      Start with a conversation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  
                  <div className="flex items-center gap-2 text-sm text-secondary/60 italic">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Review your demand mix before you spend more trying to solve the wrong problem.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <SectionSeparator number="01" title="THE INSTABILITY PROBLEM" />
          
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
                  Busy is not the same <br />
                  as stable.
                </h2>
                <div className="space-y-6 text-lg text-secondary/80 font-light leading-relaxed">
                  <p>Demand problems are not always visibility problems.</p>
                  <p>
                    Sometimes the business is getting plenty of inquiries — just not the right kind.<br />
                    Sometimes emergency work is crowding out better jobs.<br />
                    Sometimes the phone is ringing, but the schedule still feels reactive and hard to control.
                  </p>
                  <p><strong>That is usually not a “more leads” problem.</strong></p>
                  <p>It is a demand mix problem.</p>
                  <p>
                    If the business cannot clearly see where work is coming from, what kind of jobs are filling the calendar, and which channels are supporting the right work, decisions get made under pressure.
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
                <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest text-primary">The Result</h3>
                
                <p className="text-white font-medium mb-6">Making decisions under pressure creates:</p>
                <ul className="space-y-4 relative z-10 mb-8">
                  <li className="flex gap-4 items-center">
                    <XCircle className="w-5 h-5 text-red-500/70" />
                    <span className="text-secondary/80">more wasted spend</span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <XCircle className="w-5 h-5 text-red-500/70" />
                    <span className="text-secondary/80">more reactive scheduling</span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <XCircle className="w-5 h-5 text-red-500/70" />
                    <span className="text-secondary/80">more dependence on urgency</span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <XCircle className="w-5 h-5 text-red-500/70" />
                    <span className="text-secondary/80">less control over growth</span>
                  </li>
                </ul>
                
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <p className="text-secondary/80">
                    The goal is not just to stay busy.<br />
                    <strong className="text-white font-medium">The goal is to build a business that feels steadier, more predictable, and easier to make decisions around.</strong>
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          <SectionSeparator number="02" title="WHAT I EVALUATE" />

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
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">The review areas</h2>
                <p className="text-lg text-secondary font-light">
                  This is where I look at whether the business is attracting the kind of demand it actually wants more of — and whether that demand is stable enough to support better decisions.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {reviewAreas.map((area, index) => {
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
                          <p className="text-secondary text-sm leading-relaxed font-light whitespace-pre-line">
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

          <SectionSeparator number="03" title="THE DIFFERENCE" />

          {/* Comparison/Choice Section */}
          <section className="py-16 mb-16">
            <div className="max-w-[1400px] mx-auto px-6">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-1 items-stretch bg-[#0d0d0d] rounded-3xl border border-white/5 overflow-hidden"
              >
                {/* Left side */}
                <div className="p-12 lg:p-20 bg-white/[0.01]">
                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8 tracking-tight">Reactive Demand</h3>
                  <ul className="space-y-6">
                    {[
                      "Busy, but hard to predict",
                      "Too much emergency work",
                      "Referral-dependent",
                      "Marketing decisions made under pressure",
                      "Hard to plan staffing, scheduling, or spending",
                      "Growth feels noisy"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-secondary/70">
                        <XCircle className="w-5 h-5 text-red-500/50 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Right side */}
                <div className="p-12 lg:p-20 bg-primary/5 border-l border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <CheckCircle2 className="w-40 h-40 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-primary mb-8 tracking-tight relative z-10">Stable Demand</h3>
                  <ul className="space-y-6 relative z-10">
                    {[
                      "Clearer work mix",
                      "Better visibility into what is working",
                      "More planned and higher-value jobs",
                      "Steadier decision-making",
                      "Less reactive spending",
                      "Growth feels easier to trust"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-white">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span className="font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          <SectionSeparator number="04" title="THE MONTANA CONTEXT" />

          {/* Montana Context */}
          <section className="py-16 bg-white/[0.01]">
            <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white/[0.02] border border-white/5 p-12 rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <Map className="w-64 h-64 text-primary absolute -right-10 -bottom-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-6 tracking-widest text-primary">Regional Variables</h3>
                  <ul className="space-y-4 relative z-10 mb-8">
                    {[
                      "weather",
                      "seasonality",
                      "staffing realities",
                      "service area distance",
                      "local trust",
                      "regional expectations"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4 items-center">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        <span className="text-secondary/80 lowercase">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">
                  This work has to <br />
                  make sense here.
                </h2>
                <div className="space-y-6 text-lg text-secondary/80 font-light leading-relaxed">
                  <p>Montana businesses do not operate in generic conditions.</p>
                  <p>Demand shifts with the variables listed on the left.</p>
                  <p>
                    What works in a larger metro or under a national agency model does not always translate well here.
                  </p>
                  <p>
                    That is why this review is not just about “getting more leads.”
                  </p>
                  <p className="text-white font-medium">
                    It is about understanding whether your current demand is actually helping you build something more stable.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          <SectionSeparator number="05" title="CLOSING THOUGHT" />

          {/* Final CTA */}
          <section className="py-24 bg-primary relative overflow-hidden text-center group mt-16">
             <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="max-w-4xl mx-auto px-6 relative z-10"
             >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-10 tracking-tighter">
                   Stability before scale.
                </h2>
                <div className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed space-y-6">
                   <p>The goal is not to create more activity.</p>
                   <p>It is to create clearer visibility into the kind of work your business is attracting — and whether that demand is actually helping the business move in the right direction.</p>
                   <p className="font-normal text-white">Before you spend more trying to grow, it helps to know whether the demand you already have is stable enough to support it.</p>
                </div>
                
                <Link
                  href="https://calendly.com/triggsmt67"
                  className="inline-flex h-20 items-center justify-center rounded-full bg-white px-12 text-xl font-semibold text-primary shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.05] active:scale-95 group-hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.4)]"
                >
                   Start with a conversation
                   <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
                
                <p className="mt-8 text-white/70 tracking-wide font-medium">
                  15 minutes. No sales pitch. I'll call your cell.
                </p>
             </motion.div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
