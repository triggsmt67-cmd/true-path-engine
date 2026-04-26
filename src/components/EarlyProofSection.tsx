"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const clients: { name: string; descriptor: string; supportLine: string; logo: string | null; result?: string; testimonial?: string; url?: string }[] = [
  {
    name: "United Formulas",
    descriptor: "Industrial / chemical brand",
    supportLine: "Messaging, digital strategy, and practical system support for a complex product business.",
    logo: "/images/united-formulas-logo.png",
    result: "United Formulas is a Montana, USA based company entirely focused on formulating and developing unique cleaning products that exceed expectations in every way.",
    url: "https://www.unitedformulas.com/"
  },
  {
    name: "Benchmark Automotive Service",
    descriptor: "Local service business / auto repair",
    supportLine: "Website, visibility, and conversion-focused support built around trust, clarity, and local service demand.",
    logo: "/images/benchmark-logo.png",
    result: "Benchmark Automotive Service is an auto repair shop in Missoula, MT focused on accurate diagnostics, honest recommendations, and repairs done right the first time.",
    url: "https://www.benchmarkmissoula.com/"
  },
  {
    name: "HeavyDuty, an Amazon brand",
    descriptor: "National / ecommerce brand",
    supportLine: "Strategic support focused on clarity, messaging, and practical execution.",
    logo: "/images/heavyduty-logo.png",
    result: "A simple pretreat step for real-life stains.",
    url: "https://www.itworxheavyduty.com/"
  }
];

const EarlyProofSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <h2 className="text-sm md:text-base font-bold text-brand-navy tracking-[0.2em] uppercase">
              Our <span className="text-brand-accent italic">Specializations</span>
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-black/10 to-transparent flex-1"></div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(79, 124, 122, 0.03)"
                className="flex flex-col h-full bg-surface border border-black/5 rounded-standard p-10 md:p-12 hover:border-brand-accent/20 transition-all group shadow-sm hover:shadow-xl hover:shadow-black/[0.02]"
              >
                {/* Client Info */}
                <div className="mb-8 flex-1 relative">
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
                    {client.descriptor}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight uppercase group-hover:text-brand-accent transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed font-medium">
                    {client.supportLine}
                  </p>
                </div>

                {/* Results & Proof */}
                <div className="space-y-3 pt-6 border-t border-black/5">
                  <div className="px-5 py-4 border border-black/5 rounded-standard bg-background/50">
                    <p className="text-sm text-brand-navy/80 leading-relaxed font-bold">
                       {client.result}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EarlyProofSection;
