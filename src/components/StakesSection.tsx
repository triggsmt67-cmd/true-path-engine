"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, AlertCircle, Sparkles } from 'lucide-react';

const StakesSection: React.FC = () => {
  return (
    <section id="who-this-is-for" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Headline (5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-brand-navy mb-4 tracking-tight leading-[1.1] uppercase">
              Who This Is For
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-md mb-8 lg:mb-12">
              Built for businesses where the owner is busy, the phone matters, and small breakdowns in follow-up cost real jobs.
            </p>
            <div className="hidden lg:block relative h-64">
              <div className="absolute inset-0 bg-brand-accent/5 blur-[80px] rounded-full" />
              <UserCheck className="w-32 h-32 text-brand-accent/10 absolute top-10 left-10" />
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
                "Owner-operated local service businesses",
                "Businesses losing work to missed calls, slow response, weak Google visibility, or poor follow-up",
                "Owners who want clearer decisions before committing more marketing dollars",
                "Businesses that need better conversion and stronger trust from the demand they already have"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-6 group">
                  <div className="p-3 rounded-standard bg-surface border border-black/5 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-xl md:text-2xl text-text-secondary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Closer / Fit Statement */}
            <div className="p-8 md:p-12 rounded-standard bg-surface border border-black/5 relative overflow-hidden shadow-xl shadow-black/[0.02]">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Sparkles className="w-16 h-16 text-brand-accent" />
              </div>
              <div className="space-y-6 relative z-10">
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                  If you want flashy agency hype, this probably is not a fit.
                </p>
                <p className="text-xl md:text-2xl text-brand-navy font-bold uppercase leading-relaxed">
                  If you want practical, plainspoken help fixing real demand leaks, we'll work well together.
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
