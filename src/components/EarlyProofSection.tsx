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
    <section className="py-12 md:py-16 bg-background relative overflow-hidden border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <h2 className="text-sm md:text-base font-mono text-white tracking-[0.2em] uppercase font-bold">
              Selected Client Work
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent flex-1"></div>
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
                spotlightColor="rgba(255, 107, 0, 0.05)"
                className="flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl p-5 md:p-6 hover:border-white/10 hover:bg-white/[0.03] transition-all group"
              >
                {/* Logo Area */}
                <div className="h-16 w-auto mb-5 flex items-center relative">
                  {client.url && (
                    <a href={client.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                      <span className="sr-only">Visit {client.name}</span>
                    </a>
                  )}
                  {client.logo ? (
                     <div className="relative h-12 w-32">
                        <Image 
                          src={client.logo} 
                          alt={`${client.name} logo`} 
                          fill
                          className="object-contain object-left"
                        />
                     </div>
                  ) : (
                    <div className="h-16 w-32 border border-dashed border-white/20 rounded bg-white/[0.01] flex items-center justify-center">
                      <span className="text-[9px] uppercase tracking-widest text-secondary/40 text-center px-1 leading-snug">[Logo]</span>
                    </div>
                  )}
                </div>

                {/* Client Info */}
                <div className="mb-5 flex-1 relative">
                  {client.url && (
                    <a href={client.url} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                      <span className="sr-only">Visit {client.name}</span>
                    </a>
                  )}
                  <h3 className="text-xl font-medium text-white mb-2 tracking-tight flex items-center gap-2 group-hover:text-primary transition-colors">
                    {client.name}
                    {client.url && <ExternalLink className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />}
                  </h3>
                  <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] text-primary/70 mb-2">
                    {client.descriptor}
                  </div>
                  <p className="text-sm text-secondary leading-relaxed font-light">
                    {client.supportLine}
                  </p>
                </div>

                {/* Results & Proof */}
                <div className="space-y-3 pt-5 border-t border-white/5">
                  {client.result ? (
                    <div className="px-4 py-3 border border-white/10 rounded-xl bg-white/[0.02]">
                      <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                         {client.result}
                      </p>
                    </div>
                  ) : (
                    <div className="px-4 py-3 border border-dashed border-white/10 rounded-xl bg-white/[0.01]">
                      <span className="text-xs text-secondary/40 font-mono italic">
                        [Verified Result Placeholder]
                      </span>
                    </div>
                  )}

                  {client.testimonial && (
                    <div className="px-4 py-3 border border-primary/20 rounded-xl bg-primary/5">
                      <p className="text-xs md:text-sm text-white leading-relaxed italic">
                         "{client.testimonial}"
                      </p>
                    </div>
                  )}
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
