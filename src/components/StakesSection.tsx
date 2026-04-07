"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, UserCheck, AlertCircle, Sparkles } from 'lucide-react';

const StakesSection: React.FC = () => {
  return (
    <section id="who-this-is-for" className="py-12 md:py-16 bg-background relative overflow-hidden">
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
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
              Who This Is For
            </h2>
            <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-md font-light mb-8 lg:mb-0">
              Built for businesses where the owner is busy, the phone matters, and small breakdowns in follow-up cost real jobs.
            </p>
            <div className="hidden lg:block relative h-64">
              <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full" />
              <UserCheck className="w-32 h-32 text-primary/10 absolute top-10 left-10" />
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
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-xl md:text-2xl text-secondary font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Closer / Fit Statement */}
            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles className="w-16 h-16 text-primary" />
              </div>
              <div className="space-y-6 relative z-10">
                <p className="text-lg md:text-xl text-secondary font-light leading-relaxed">
                  If you want flashy agency hype, this probably is not a fit.
                </p>
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
                  If you want practical, plainspoken help fixing real demand leaks, we’ll work well together.
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
