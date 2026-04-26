"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const clients = [
  {
    name: "European Precision",
    descriptor: "BMW • Mercedes • Audi • Porsche",
    supportLine: "Advanced diagnostic capabilities for complex European engineering. We use factory-level equipment to ensure your performance vehicle stays at peak specification.",
    logo: null,
    result: "Full system diagnostics, specialized engine work, and preventative maintenance for the world's finest imports.",
  },
  {
    name: "Domestic Performance",
    descriptor: "Ford • GM • Dodge • Corvette",
    supportLine: "High-output tuning and heavy-duty repairs for American muscle and workhorses. We understand the unique demands of domestic powerplants.",
    logo: null,
    result: "Precision transmission work, performance upgrades, and reliable fleet maintenance for local Missoula businesses.",
  },
  {
    name: "Luxury & Exotic",
    descriptor: "Land Rover • Jaguar • Tesla",
    supportLine: "White-glove service for high-end luxury vehicles. From hybrid system calibration to air suspension repair, we handle the technology others won't.",
    logo: null,
    result: "Complete technical overhauls and electronic troubleshooting for the most sophisticated vehicles on the road.",
  }
];

const EarlyProofSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-bg relative overflow-hidden border-b border-black/5">
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
              Our <span className="text-brand-red italic">Specializations</span>
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
                spotlightColor="rgba(158, 27, 31, 0.03)"
                className="flex flex-col h-full bg-surface border border-black/5 rounded-standard p-6 md:p-8 hover:border-brand-red/20 transition-all group shadow-sm hover:shadow-xl hover:shadow-black/[0.02]"
              >
                {/* Client Info */}
                <div className="mb-8 flex-1 relative">
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-brand-red mb-3">
                    {client.descriptor}
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight uppercase group-hover:text-brand-red transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed font-medium">
                    {client.supportLine}
                  </p>
                </div>

                {/* Results & Proof */}
                <div className="space-y-3 pt-6 border-t border-black/5">
                  <div className="px-5 py-4 border border-black/5 rounded-standard bg-bg/50">
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
