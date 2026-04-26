"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_LINKS } from '../constants/links';
import { Magnetic } from './Magnetic';


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg relative overflow-hidden border-t border-black/5">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">

          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-brand-red rounded-standard blur opacity-20 transform translate-x-2 translate-y-2"></div>
            <div className="relative rounded-standard overflow-hidden border border-black/5 aspect-[4/5] group shadow-2xl">
              <img
                src="/benchmark_automotive_shop_1777163391770.png"
                alt="Benchmark Automotive Service Facility"
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right Column: Credibility & Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-2 mb-6 text-brand-red font-bold text-xs md:text-sm uppercase tracking-[0.2em]">
              <ShieldCheck className="w-4 h-4" />
              <span>Technical Excellence</span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-8 md:mb-10 leading-[1.1] tracking-tight uppercase">
              Precision Over <br /><span className="text-brand-red italic">Guesswork.</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed mb-12 font-medium">
              <p>
                We serve <span className="text-brand-navy font-bold">performance and luxury vehicle owners</span> in Montana who demand a higher standard of care for their automotive investments.
              </p>
              <p>
                That means moving beyond "parts replacement" and into true diagnostic intelligence. Whether it's complex electronics, high-performance tuning, or factory-spec maintenance, our work is defined by accuracy and transparency.
              </p>
              <p>
                We are not interested in volume or speed at the cost of quality. Our role is to ensure your vehicle performs exactly as its engineers intended, providing you with absolute reliability on the road.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                <div className="p-6 rounded-standard bg-surface border border-black/5 flex flex-col justify-center gap-3 shadow-sm">
                  <div className="flex items-center gap-3 text-brand-red mb-1">
                    <Settings className="w-5 h-5" />
                    <span className="text-brand-navy font-bold uppercase tracking-tight">Factory Tooling</span>
                  </div>
                  <div className="text-sm text-text-secondary leading-relaxed font-bold">
                    Advanced diagnostic equipment calibrated specifically for European and Domestic performance vehicles.
                  </div>
                </div>
                <div className="p-6 rounded-standard bg-surface border border-black/5 flex flex-col justify-center gap-3 shadow-sm">
                  <div className="flex items-center gap-3 text-brand-red mb-1">
                    <FileText className="w-5 h-5" />
                    <span className="text-brand-navy font-bold uppercase tracking-tight">Total Transparency</span>
                  </div>
                  <div className="text-sm text-text-secondary leading-relaxed font-bold">
                    Detailed digital inspections and clear, honest recommendations on every service.
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA Button */}
            <div className="text-center sm:text-left mt-8">
              <Magnetic amount={0.2}>
                <a
                  href={CONTACT_LINKS.calendar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex h-14 overflow-hidden rounded-standard p-[1px] focus:outline-none group shadow-lg shadow-brand-red/10 w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-95 duration-300"
                >
                  <span className="absolute inset-0 bg-brand-red group-hover:bg-[#85161a] transition-colors duration-500" />
                  <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-standard px-10 text-base font-bold text-white uppercase tracking-widest gap-3">
                    Schedule A Diagnostic
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>

              </Magnetic>
              <p className="text-xs text-text-secondary/60 mt-4 font-bold uppercase tracking-widest">
                Factory-spec care. Montana reliability.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
