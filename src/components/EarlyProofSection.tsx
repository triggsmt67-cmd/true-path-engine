"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from './SpotlightCard';
import Image from 'next/image';
import { ExternalLink, ChevronDown } from 'lucide-react';

const clients: { name: string; descriptor: string; logo: string | null; result?: string; testimonial?: string; url?: string }[] = [
  {
    name: "United Formulas",
    descriptor: "Industrial / chemical brand",
    logo: "/images/united-formulas-logo.png",
    result: "United Formulas is a Montana, USA based company entirely focused on formulating and developing unique cleaning products that exceed expectations in every way.",
    testimonial: "Trevor helped us rebuild our website and make it a lot easier for customers to find what they need. We have a lot of product information, SDS sheets, and common questions people ask, and he helped organize all of that in a way that actually makes sense.\n\nHe also helped us build a smart chatbot that can point customers to product and safety information quickly, without giving generic answers or getting away from our actual documentation. That has been a big improvement for us as we continue to grow.\n\nTrevor was easy to work with, kept things organized, and understood that we needed more than just a better-looking website. We needed something useful for our customers and our team. The finished site is cleaner, easier to use, and a much better fit for how our business works.",
    url: "https://www.unitedformulas.com/"
  },
  {
    name: "Benchmark Automotive Service",
    descriptor: "Local service business / auto repair",
    logo: "/images/benchmark-logo.png",
    result: "Benchmark Automotive Service is an auto repair shop in Missoula, MT focused on accurate diagnostics, honest recommendations, and repairs done right the first time.",
    testimonial: "Trevor didn’t just build us a new website. He helped Benchmark show up better locally, clean up our online presence, and make it easier for customers to find and trust us.",
    url: "https://www.benchmarkmissoula.com/"
  },
  {
    name: "Itworxheavyduty",
    descriptor: "National / ecommerce brand",
    logo: "/images/heavyduty-logo.png",
    result: "A simple pretreat step for real-life stains.",
    testimonial: "Trevor helped us rebuild our website and make it a lot easier for customers to find what they need. We have a lot of product information, SDS sheets, and common questions people ask, and he helped organize all of that in a way that actually makes sense.\n\nHe also helped us build a smart chatbot that can point customers to product and safety information quickly, without giving generic answers or getting away from our actual documentation. That has been a big improvement for us as we continue to grow.\n\nTrevor was easy to work with, kept things organized, and understood that we needed more than just a better-looking website. We needed something useful for our customers and our team. The finished site is cleaner, easier to use, and a much better fit for how our business works.",
    url: "https://www.itworxheavyduty.com/"
  }
];

const ClientCardNode = ({ client, index }: { client: typeof clients[0], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <SpotlightCard
        spotlightColor="rgba(79, 124, 122, 0.03)"
        className="flex flex-col h-full bg-surface border border-black/5 rounded-standard p-8 transition-all duration-700 group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_45px_90px_-20px_rgba(0,0,0,0.2)] hover:-translate-y-2 hover:border-brand-accent/20 relative overflow-hidden"
      >
        {/* Animated Top Border */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-black/5 z-10" />
        <motion.div 
          className="absolute top-0 left-0 w-[40%] h-[2px] bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent z-20"
          animate={{ x: ["-200%", "300%"] }}
          transition={{
            repeat: Infinity,
            duration: 3 + (index * 0.5),
            ease: "linear",
            repeatDelay: 1
          }}
        />

        {/* Client Info */}
        <div className="mb-5 relative z-30">
          {client.logo && (
            <div className="mb-4 relative h-10 w-full max-w-[160px]">
              <Image 
                src={client.logo} 
                alt={`${client.name} logo`}
                fill
                className="object-contain object-left"
              />
            </div>
          )}
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-2">
            {client.descriptor}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-1 tracking-tight uppercase group-hover:text-brand-accent transition-colors min-h-[56px] md:min-h-[64px]">
            {client.name}
          </h3>
          {client.url && (
            <a 
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-text-secondary hover:text-brand-accent transition-colors tracking-wide"
            >
              {client.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>

        {/* Results & Proof */}
        <div className="flex-1 flex flex-col pt-5 border-t border-black/5">
          {client.result && (
            <div className="px-5 py-4 border border-black/5 rounded-standard bg-background/50 mb-3">
              <p className="text-sm text-brand-navy/80 leading-relaxed font-bold">
                 {client.result}
              </p>
            </div>
          )}

          {client.testimonial && (
            <div className="mt-auto px-5 py-4 border border-brand-accent/10 rounded-standard bg-brand-accent/5 relative overflow-hidden transition-all duration-300">
              <div className="absolute -top-2 -left-2 text-brand-accent/10 text-6xl font-serif leading-none select-none">"</div>
              <div className="relative z-10">
                <div className="text-sm text-brand-navy/90 leading-relaxed italic relative">
                  <AnimatePresence initial={false}>
                    {client.testimonial.split('\n\n').map((paragraph, i) => {
                      if (!isExpanded && i > 0) return null;
                      
                      return (
                        <motion.p 
                          key={i}
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: i > 0 ? 12 : 0 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className={!isExpanded && i === 0 ? "line-clamp-3" : ""}
                        >
                          {paragraph}
                        </motion.p>
                      );
                    })}
                  </AnimatePresence>
                </div>
                
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-navy transition-colors flex items-center gap-1 group/btn"
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover/btn:translate-y-0.5'}`} />
                </button>
              </div>
            </div>
          )}
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

const EarlyProofSection: React.FC = () => {
  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-background relative overflow-hidden border-b border-black/5">
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
              Our <span className="text-brand-accent italic">Clients</span>
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-black/10 to-transparent flex-1"></div>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <ClientCardNode key={index} client={client} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default EarlyProofSection;
