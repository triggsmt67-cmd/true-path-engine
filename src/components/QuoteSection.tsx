"use client";

import React from 'react';
import { motion } from 'framer-motion';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-navy leading-[1.1] mb-8 uppercase"
        >
          The hardest part is <span className="text-brand-red italic">not</span> doing more.<br className="hidden md:block" />
          It is knowing what to fix first.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm md:text-base text-text-secondary font-bold uppercase tracking-[0.2em]"
        >
          Clarity does not come from more activity.<br className="hidden md:block" />
          It comes from removing noise and solving the real problem.
        </motion.p>
      </div>
    </section>
  );
};

export default QuoteSection;