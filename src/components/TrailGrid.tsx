"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Zap, Layers, TrendingUp } from 'lucide-react';

const steps = [
  {
    letter: 'T',
    title: 'Target',
    copy: "Stop yelling at the void. We use data to identify the exact 1% of the market ready to buy right now.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1543854589-482a52467d01?auto=format&fit=crop&w=800&q=80" // Archery target
  },
  {
    letter: 'R',
    title: 'Resonate',
    copy: "Design that commands attention. We craft cinematic visuals and social content that stops the scroll.",
    icon: Eye,
    image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=800&q=80" // Sound wave/Ripple
  },
  {
    letter: 'A',
    title: 'Automate',
    copy: "The silent partner. We build 'set and forget' workflows that handle lead capture and nurture 24/7.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=800&q=80" // Chip/Cyberpunk
  },
  {
    letter: 'I',
    title: 'Integrate',
    copy: "No more silos. We connect your ads, CRM, and outreach tools into one fluid 'True Path' data stream.",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=800&q=80" // Network connection
  },
  {
    letter: 'L',
    title: 'Leverage',
    copy: "Scale without burnout. We deploy AI models that multiply your team's output by 10x.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80" // Gears
  }
];

const TrailGrid: React.FC = () => {
  return (
    <section id="the-method" className="py-16 md:py-20 relative bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
             <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block font-medium">Methodology</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[0.95] mb-6">
              The <span className="text-primary">TRAIL</span> Framework
            </h2>
             <p className="text-gray-400 text-base md:text-lg font-normal">
              Our proprietary five-step engine to move you from guesswork to guaranteed growth.
            </p>
        </div>

        {/* 5-Card Flex Grid (Centers the last row automatically) */}
        <div className="flex flex-wrap justify-center gap-6">
            {steps.map((step, index) => (
                <motion.div 
                    key={step.letter}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] group relative bg-[#0a0a0a] rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(255,107,0,0.3)] transition-all duration-500 flex flex-col min-h-[340px] md:min-h-[360px]"
                >
                    {/* Background Image Layer */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={step.image} 
                            alt={step.title}
                            loading="lazy"
                            className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform group-hover:scale-105"
                        />
                        {/* Gradient Overlay - Adjusted to be lighter at top/mid to reveal image, dark at bottom for text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>

                    {/* Background Letter Watermark */}
                    <div className="absolute -right-4 -bottom-12 text-[8rem] md:text-[12rem] font-bold text-white/[0.05] group-hover:text-primary/[0.1] transition-colors duration-500 font-sans leading-none select-none pointer-events-none z-0">
                        {step.letter}
                    </div>

                    <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                        {/* Header: Icon + Title */}
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="p-2.5 md:p-3 rounded-2xl bg-white/5 border border-white/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] backdrop-blur-md">
                                <step.icon className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-primary transition-colors duration-300 drop-shadow-md tracking-tight">
                                {step.title}
                            </h3>
                        </div>

                         {/* Body */}
                         <div className="flex-1">
                             <p className="text-gray-300 leading-relaxed text-sm md:text-base group-hover:text-white transition-colors drop-shadow-sm font-normal">
                                {step.copy}
                             </p>
                         </div>
                         
                         {/* Subtle Highlight Line */}
                         <div className="mt-6 md:mt-8 h-px w-12 bg-white/20 group-hover:w-full group-hover:bg-primary/50 transition-all duration-700"></div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TrailGrid;