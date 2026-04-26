"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const FeatureSplit: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <div className="mb-8 md:mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col opacity-90"
          >
            <div className="text-text-secondary text-lg md:text-xl leading-relaxed space-y-6 mb-10">
              <p>
                When the owner is busy and every lead feels urgent, it gets harder to see what is actually breaking down.
              </p>
              <p>
                So calls get missed. Follow-up gets delayed. Ads get tweaked. The website gets second-guessed. Another change gets made before the last one had time to tell you anything useful.
              </p>
              <p>
                Most of the time, the problem is not effort. It is that too many decisions are being made under pressure, without enough context.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-6 leading-tight uppercase tracking-tight">
              What that usually looks like
            </h3>

            <ul className="space-y-4">
              {[
                "Chasing numbers after the fact",
                "Changing direction too often",
                "Conflicting signals from different tools",
                "Decisions made under pressure"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-base text-text-secondary group cursor-default">
                  <div className="p-1.5 rounded-standard bg-surface border border-black/5 text-brand-accent/40 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
                    <X className="w-4 h-4" />
                  </div>
                  <span className="group-hover:text-brand-navy transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: The Resolution */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col relative mt-8 lg:mt-0"
          >
            {/* Subtle backlight for right column */}
            <div className="absolute -left-10 top-0 w-full h-full bg-brand-accent/5 blur-[100px] rounded-full pointer-events-none opacity-30"></div>

            <div className="text-brand-navy text-lg md:text-xl leading-relaxed space-y-6 mb-10 relative z-10">
              <p>
                Clarity does not come from doing more. It comes from seeing what is actually costing you jobs and fixing that first.
              </p>
              <p>
                When the right problem becomes clear, marketing gets easier to manage.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-6 leading-tight relative z-10 uppercase tracking-tight">
              What changes when things get clear
            </h3>

            <ul className="space-y-4 relative z-10">
              {[
                "One clear priority at a time",
                "Fewer unnecessary changes",
                "Signals you can actually explain",
                "Decisions made with context"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-base text-brand-navy font-bold group cursor-default">
                  <div className="p-1.5 rounded-standard bg-brand-accent border border-brand-accent/20 text-white group-hover:bg-brand-navy transition-all duration-300 shrink-0 shadow-lg shadow-brand-accent/10">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="group-hover:text-brand-accent transition-colors duration-300 uppercase tracking-wide text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSplit;