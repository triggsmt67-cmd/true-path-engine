"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionSeparatorProps {
  number: string;
  title: string;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({ number, title }) => {
  return (
    <div className="relative w-full flex items-center justify-center py-12 md:py-16 overflow-hidden pointer-events-none z-20">

      {/* 1. The Path (Vertical Lines) */}
      {/* Top Line descending - subtle dark for light theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-black/10 to-transparent opacity-50"></div>

      {/* 2. The Horizon (Horizontal Line with Glow) */}
      <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 w-1/2 h-[1px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-brand-red/20 to-transparent blur-[1px]"></div>

      {/* 3. The Node (Center Badge) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="flex items-center gap-3 px-4 py-2 rounded-standard bg-surface border border-black/5 shadow-lg shadow-black/[0.03]">
          <span className="text-[10px] font-bold text-brand-red tracking-widest">
            {number}
          </span>
          <span className="w-px h-3 bg-black/10"></span>
          <span className="text-[10px] font-bold text-brand-navy tracking-[0.2em] uppercase whitespace-nowrap">
            {title}
          </span>
        </div>

        {/* Subtle effect behind badge */}
        <div className="absolute inset-0 bg-brand-red/5 blur-xl rounded-full -z-10 opacity-50"></div>
      </motion.div>

    </div>
  );
};

export default SectionSeparator;