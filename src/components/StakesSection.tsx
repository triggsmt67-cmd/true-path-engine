"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, AlertCircle, Sparkles } from 'lucide-react';

const StakesSection: React.FC = () => {
  return (
    <section id="who-this-is-for" className="py-24 md:py-32 bg-bg relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Headline (5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 tracking-tight leading-[1.1] uppercase">
              Ideal <span className="text-brand-red italic">Partners.</span>
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-md mb-8 lg:mb-0">
              Built for businesses where quality matters, the phone is the lifeline, and small breakdowns in trust cost major jobs.
            </p>
            <div className="hidden lg:block relative h-64">
              <div className="absolute inset-0 bg-brand-red/5 blur-[80px] rounded-full" />
              <UserCheck className="w-32 h-32 text-brand-red/10 absolute top-10 left-10" />
            </div>
          </motion.div>

          {/* Points & Fit (7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-12"
          >
            {/* List */}
            <ul className="space-y-8">
              {[
                "Owner-operated automotive & local service shops",
                "Businesses losing work to slow response, weak visibility, or poor follow-up",
                "Owners who want diagnostic clarity before committing marketing dollars",
                "Shops that need higher conversion and absolute trust from current demand"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-6 group">
                  <div className="p-3 rounded-standard bg-surface border border-black/5 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-xl md:text-2xl text-text-secondary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Closer / Fit Statement */}
            <div className="p-8 md:p-12 rounded-standard bg-surface border border-black/5 relative overflow-hidden shadow-xl shadow-black/[0.02]">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Sparkles className="w-16 h-16 text-brand-red" />
              </div>
              <div className="space-y-6 relative z-10">
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                  If you want flashy agency hype, we are likely not a fit.
                </p>
                <p className="text-xl md:text-2xl text-brand-navy font-bold uppercase leading-relaxed">
                  If you want <span className="text-brand-red">precision diagnostics</span> and practical help fixing revenue leaks, we'll work well together.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StakesSection;
