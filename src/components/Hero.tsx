"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CONTACT_LINKS } from '../constants/links';
import DecisionStack from './DecisionStack';
import { RevealText } from './RevealText';
import { Magnetic } from './Magnetic';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-[110px] pb-12 lg:pt-[140px] lg:pb-20 bg-background">
      
      {/* Background Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        
        {/* Subtle Spline/3D element - Lightened */}
        <div className="absolute right-[-10%] top-[-10%] w-[60%] h-[80%] opacity-20 blur-3xl bg-brand-red/10 rounded-full"></div>
        <div className="absolute left-[-5%] bottom-[-5%] w-[40%] h-[60%] opacity-10 blur-3xl bg-brand-navy/20 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Typography & CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Label */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-red"></span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-navy uppercase">
                For Montana Service Businesses
              </span>
            </motion.div>

            {/* Heading with Reveal effect - Playfair Display */}
            <h1 className="mb-6 md:mb-8 font-serif font-bold tracking-tight leading-[1.1] md:leading-[1.05] text-text-primary">
              <RevealText
                text="Clearer marketing decisions for owner-operated service businesses"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem]"
                highlightWords={["marketing", "decisions"]}
                highlightClassName="text-brand-red"
                delay={0.1}
              />
            </h1>

            {/* Subhead - Inter */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary mb-8 md:mb-10 max-w-2xl leading-relaxed font-normal">
              You do not need more marketing activity. You need to know where jobs are being lost. I help local service businesses fix weak Google visibility, missed calls, slow follow-up, and wasted ad spend—so more of your existing demand turns into real calls, real jobs, and better decisions.
            </motion.p>

            {/* CTA Group */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full">
                <Magnetic amount={0.2}>
                  <a
                    href={CONTACT_LINKS.calendar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 md:h-16 items-center justify-center rounded-standard bg-brand-red px-8 md:px-10 text-sm md:text-base font-bold text-white gap-3 transition-all hover:bg-[#85161a] hover:scale-[1.02] active:scale-95 duration-300 shadow-lg shadow-brand-red/20 whitespace-nowrap"
                  >
                    Review My Current Setup
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Magnetic>

                <Magnetic amount={0.2}>
                  <a
                    href="/trust-calculator"
                    className="inline-flex h-14 md:h-16 items-center justify-center rounded-standard px-8 md:px-10 text-sm md:text-base font-bold text-brand-navy border-2 border-brand-navy/10 hover:bg-brand-navy/5 transition-all duration-300 whitespace-nowrap w-full sm:w-auto"
                  >
                    Run Instant Scan
                  </a>
                </Magnetic>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-3 mt-2">
                <div className="flex items-center gap-2 text-sm text-text-secondary font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0" />
                  <span className="md:whitespace-nowrap">Takes 60 seconds. No sales pitch. No upsells.</span>
                </div>
              </div>
            </motion.div>
          </motion.div>


          {/* RIGHT COLUMN: Intelligent Decision Stack */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative block w-full mt-12 lg:mt-0"
          >
            <DecisionStack disableSpotlight={true} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
