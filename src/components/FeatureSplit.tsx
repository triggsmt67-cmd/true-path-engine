"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const FeatureSplit: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-bg relative overflow-hidden border-b border-black/5">
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
                When the shop is busy and every lead feels urgent, it gets harder to see what is actually breaking down in your revenue cycle.
              </p>
              <p>
                Calls get missed. Follow-up gets delayed. Website copy gets second-guessed. Another change gets made before the last one had time to prove its worth.
              </p>
              <p>
                Most of the time, the problem is not effort. It is that too many decisions are being made under pressure, without clear diagnostic context.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-6 leading-tight uppercase tracking-tight">
              The <span className="text-brand-red">Friction</span> Points
            </h3>

            <ul className="space-y-4">
              {[
                "Chasing performance metrics after the fact",
                "Changing marketing direction too often",
                "Conflicting signals from fragmented tools",
                "Decisions made under operational pressure"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-base text-text-secondary group cursor-default">
                  <div className="p-1.5 rounded-standard bg-surface border border-black/5 text-brand-red/40 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shrink-0 shadow-sm">
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
            <div className="absolute -left-10 top-0 w-full h-full bg-brand-red/5 blur-[100px] rounded-full pointer-events-none opacity-30"></div>

            <div className="text-brand-navy text-lg md:text-xl leading-relaxed space-y-6 mb-10 relative z-10">
              <p>
                Clarity does not come from doing more. It comes from identifying what is actually costing you jobs and fixing that first.
              </p>
              <p>
                When the right bottleneck becomes clear, your marketing strategy becomes easier to manage and far more profitable.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-6 leading-tight relative z-10 uppercase tracking-tight">
              The <span className="text-brand-red italic">Benchmark</span> Advantage
            </h3>

            <ul className="space-y-4 relative z-10">
              {[
                "One clear diagnostic priority at a time",
                "Fewer unnecessary strategy changes",
                "Signals you can actually explain to a board",
                "Decisions made with absolute context"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-base text-brand-navy font-bold group cursor-default">
                  <div className="p-1.5 rounded-standard bg-brand-red border border-brand-red/20 text-white group-hover:bg-brand-navy transition-all duration-300 shrink-0 shadow-lg shadow-brand-red/10">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="group-hover:text-brand-red transition-colors duration-300 uppercase tracking-wide text-sm">{item}</span>
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