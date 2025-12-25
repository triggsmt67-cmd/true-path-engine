"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, AlertTriangle, Zap } from 'lucide-react';

const StakesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-28 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6 tracking-tight"
          >
            Two Ways to Move Forward.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-xl text-gray-400 leading-relaxed font-normal"
          >
            The gap between 'busy' and 'profitable' is widening. Which path are you on?
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          
          {/* Panel 1: The Drift (Status Quo) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl bg-white/5 border border-white/5 p-6 md:p-12 opacity-70 hover:opacity-100 transition-all duration-500 hover:bg-white/[0.08]"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-2.5 md:p-3 rounded-full bg-white/5 text-gray-400 group-hover:text-red-400 transition-colors">
                    <AlertTriangle className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-gray-300 group-hover:text-white transition-colors tracking-tight">Designing in the Dark</h3>
            </div>

            {/* List */}
            <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                {[
                    "Burning budget on broad, untargeted ads.",
                    "Manually nurturing leads (or forgetting them).",
                    "\"Hoping\" the website converts traffic.",
                    "Growth is capped by your personal bandwidth."
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-500 group-hover:text-gray-300 transition-colors">
                        <XCircle className="w-5 h-5 text-red-900 group-hover:text-red-500 shrink-0 mt-0.5 transition-colors" />
                        <span className="leading-snug text-sm md:text-base font-normal">{item}</span>
                    </li>
                ))}
            </ul>

            {/* The Feeling */}
            <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-xs font-medium uppercase tracking-widest text-gray-600">The Outcome</span>
                <span className="text-lg font-medium text-gray-500 italic group-hover:text-red-300 transition-colors">"Frustrated & Stalled."</span>
            </div>
          </motion.div>

          {/* Panel 2: The Shift (True Path) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl bg-gradient-to-br from-white/[0.05] to-primary/[0.05] border border-primary/50 p-6 md:p-12 shadow-[0_0_40px_-10px_rgba(255,107,0,0.15)]"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-2.5 md:p-3 rounded-full bg-primary/20 text-primary border border-primary/30">
                    <Zap className="w-5 h-5 md:w-6 md:h-6 fill-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">Systematic Domination</h3>
            </div>

            {/* List */}
            <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                {[
                    "Ads targeting the 1% ready to buy.",
                    "AI agents handling follow-up 24/7.",
                    "A website that acts as a 24-hour sales rep.",
                    "Revenue scales; your workload drops."
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug text-sm md:text-base font-normal">{item}</span>
                    </li>
                ))}
            </ul>

            {/* The Feeling */}
            <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="text-xs font-medium uppercase tracking-widest text-primary/70">The Outcome</span>
                <span className="text-lg font-medium text-white italic">"Clarity & Velocity."</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StakesSection;