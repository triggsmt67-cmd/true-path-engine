import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';

const clients = [
  {
    name: "United Formulas",
    descriptor: "Industrial / chemical brand",
    supportLine: "Messaging, digital strategy, and practical system support for a complex product business."
  },
  {
    name: "Benchmark Automotive Service",
    descriptor: "Local service business / auto repair",
    supportLine: "Website, visibility, and conversion-focused support built around trust, clarity, and local service demand."
  },
  {
    name: "HeavyDuty, an Amazon brand",
    descriptor: "National / ecommerce brand",
    supportLine: "Strategic support focused on clarity, messaging, and practical execution."
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
                className="flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 hover:bg-white/[0.03] transition-all"
              >
                {/* Logo Placeholder */}
                <div className="h-16 w-32 border border-dashed border-white/20 rounded bg-white/[0.01] flex items-center justify-center mb-8">
                  <span className="text-[9px] uppercase tracking-widest text-secondary/40 text-center px-1 leading-snug">[Client Logo Placeholder]</span>
                </div>

                {/* Client Info */}
                <div className="mb-8 flex-1">
                  <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                    {client.name}
                  </h3>
                  <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] text-primary/70 mb-4">
                    {client.descriptor}
                  </div>
                  <p className="text-sm text-secondary leading-relaxed font-light">
                    {client.supportLine}
                  </p>
                </div>

                {/* Placeholders */}
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="px-4 py-3 border border-dashed border-white/10 rounded-xl bg-white/[0.01]">
                    <span className="text-xs text-secondary/40 font-mono italic">
                      [Verified Result Placeholder]
                    </span>
                  </div>
                  <div className="px-4 py-3 border border-dashed border-white/10 rounded-xl bg-white/[0.01]">
                    <span className="text-xs text-secondary/40 font-mono italic">
                      [Approved Testimonial Placeholder]
                    </span>
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
