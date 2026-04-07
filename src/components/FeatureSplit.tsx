"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const FeatureSplit: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-background relative overflow-hidden border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Intro - Kept transparent for spacing if needed or removed */}
        <div className="mb-8 md:mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col opacity-80"
          >
            <div className="text-secondary/60 font-light text-lg md:text-xl leading-relaxed space-y-6 mb-10">
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

            <h3 className="text-xl md:text-2xl font-medium text-white/90 mb-6 leading-tight">
              What that usually looks like
            </h3>

            <ul className="space-y-4">
              {[
                "Chasing numbers after the fact",
                "Changing direction too often",
                "Conflicting signals from different tools",
                "Decisions made under pressure"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-base text-secondary/60 group cursor-default">
                  <div className="p-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-secondary/40 group-hover:bg-red-500/20 group-hover:border-red-500/30 group-hover:text-red-400 transition-all duration-300 shrink-0">
                    <X className="w-4 h-4" />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">{item}</span>
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
            <div className="absolute -left-10 top-0 w-full h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none opacity-30"></div>

            <div className="text-secondary font-light text-lg md:text-xl leading-relaxed space-y-6 mb-10 relative z-10">
              <p>
                Clarity does not come from doing more. It comes from seeing what is actually costing you jobs and fixing that first.
              </p>
              <p>
                When the right problem becomes clear, marketing gets easier to manage.
              </p>
            </div>

            <h3 className="text-xl md:text-2xl font-medium text-white mb-6 leading-tight relative z-10">
              What changes when things get clear
            </h3>

            <ul className="space-y-4 relative z-10">
              {[
                "One clear priority at a time",
                "Fewer unnecessary changes",
                "Signals you can actually explain",
                "Decisions made with context"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-base text-secondary font-medium group cursor-default">
                  <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="group-hover:text-white transition-colors duration-300">{item}</span>
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