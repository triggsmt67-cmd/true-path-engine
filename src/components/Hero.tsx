"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, TrendingDown, Zap } from 'lucide-react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 lg:py-0 border-b border-white/5 bg-[#050505]">

      {/* Spline 3D Background - Hidden on mobile for performance */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Fallback pattern for mobile */}
        <div className="lg:hidden absolute inset-0 bg-[radial-gradient(circle_at_center,_#ff6b0015_0%,_transparent_70%)] opacity-50" />

        <div className="hidden lg:block absolute inset-0 w-full h-full scale-125 origin-center">
          <iframe
            src="https://my.spline.design/glasswave-6HLEnvJfCRsq1aKT2xqlgme7"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full opacity-70"
            style={{
              filter: 'hue-rotate(160deg) saturate(1.4) contrast(1.1)',
            }}
            title="3D Wave Background"
            aria-hidden="true"
          />
        </div>

        {/* Overlays to blend background into dark theme */}
        <div className="absolute inset-0 bg-[#050505]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/50"></div>
        {/* Subtle orange tint overlay */}
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Typography & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-primary uppercase">
                System Intelligence
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6.5rem] font-semibold text-white tracking-tighter leading-[0.95] md:leading-[0.9] mb-6 md:mb-8">
              Stop Guessing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF6B00] to-white pb-2 md:pb-4 inline-block drop-shadow-[0_0_25px_rgba(255,107,0,0.3)]">
                Start Arriving.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-2xl text-gray-400 mb-8 md:mb-10 max-w-2xl leading-relaxed font-normal">
              The landscape shifted overnight. Yesterday’s map no longer leads to revenue. We replace &quot;hope marketing&quot; with the <span className="text-white font-medium">TRAIL</span> AI frameworks that turn your data into a predictable growth engine.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none group shadow-[0_0_50px_-10px_rgba(255,107,0,0.5)] w-full sm:w-auto">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#FF6B00_50%,#000000_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#050505] px-8 text-lg font-medium text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-[#111]">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <Link
                href="/blog"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 font-medium tracking-tight"
              >
                <span>Read the Blog</span>
                <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(255,107,0,0.5)]"></div>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Results Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative block w-full mt-8 lg:mt-0"
          >
            {/* Main Glass Card Container - Reduced Height for better proportion */}
            <div className="w-full h-[340px] md:h-[400px] rounded-[24px] md:rounded-[32px] bg-white/[0.05] backdrop-blur-xl border border-primary/20 shadow-[0_0_60px_-15px_rgba(255,107,0,0.15)] overflow-hidden flex flex-col relative group">

              {/* Header - Compact */}
              <div className="h-10 md:h-12 border-b border-white/5 flex items-center justify-between px-6 md:px-8 bg-white/[0.01]">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </div>
                  <span className="text-[9px] md:text-[10px] font-medium text-gray-400 tracking-[0.15em] uppercase">
                    Live System Performance
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                  <div className="w-1 h-1 rounded-full bg-white/20"></div>
                </div>
              </div>

              {/* Main Graph Area */}
              <div className="flex-1 relative w-full overflow-hidden">
                {/* Grid Lines - constrained & fewer lines */}
                <div className="absolute inset-0 w-full h-full flex flex-col justify-between py-6 px-6 opacity-10 pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-white border-dashed border-t border-white/50"></div>
                  ))}
                </div>

                {/* The Graph - Contained with padding to avoid feeling "too big" */}
                <div className="absolute inset-0 pt-8 pb-4 px-4 md:px-8">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 500 200">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                      </linearGradient>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Area Fill */}
                    <motion.path
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      d="M0,180 C80,170 120,160 180,120 C240,80 320,90 400,30 L500,10 L500,200 L0,200 Z"
                      fill="url(#chartGradient)"
                    />

                    {/* Stroke Line - Thinner stroke */}
                    <motion.path
                      d="M0,180 C80,170 120,160 180,120 C240,80 320,90 400,30 L500,10"
                      fill="none"
                      stroke="#FF6B00"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      style={{ filter: "url(#glow)" }}
                    />

                    {/* Data Points */}
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2, duration: 0.3 }}
                      cx="180" cy="120" r="3" fill="#121212" stroke="#FF6B00" strokeWidth="2"
                    />
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.4, duration: 0.3 }}
                      cx="400" cy="30" r="3" fill="#121212" stroke="#FF6B00" strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Floating Tooltip Mockup */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="absolute top-[20%] right-[15%] bg-[#121212]/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg shadow-xl"
                >
                  <span className="text-[10px] md:text-xs font-bold text-white block">Revenue</span>
                  <span className="text-[10px] md:text-xs text-primary font-mono">+42%</span>
                </motion.div>
              </div>

              {/* Metrics Footer - Compact */}
              <div className="h-20 md:h-24 bg-[#0A0A0A]/40 border-t border-white/5 grid grid-cols-3 divide-x divide-white/5 backdrop-blur-md">

                {/* Block 1 */}
                <div className="flex flex-col justify-center px-2 md:px-6 group/metric text-center md:text-left">
                  <span className="text-[9px] md:text-[10px] text-gray-500 font-medium uppercase tracking-wider mb-1 group-hover/metric:text-white transition-colors">
                    Lead Velocity
                  </span>
                  <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 justify-center md:justify-start">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-base md:text-2xl font-bold text-white"
                    >
                      +240%
                    </motion.span>
                    <TrendingUp className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-500" />
                  </div>
                </div>

                {/* Block 2 */}
                <div className="flex flex-col justify-center px-2 md:px-6 group/metric text-center md:text-left">
                  <span className="text-[9px] md:text-[10px] text-gray-500 font-medium uppercase tracking-wider mb-1 group-hover/metric:text-white transition-colors">
                    CAC Reduction
                  </span>
                  <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 justify-center md:justify-start">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="text-base md:text-2xl font-bold text-white"
                    >
                      -65%
                    </motion.span>
                    <TrendingDown className="w-3 h-3 md:w-3.5 md:h-3.5 text-primary" />
                  </div>
                </div>

                {/* Block 3 */}
                <div className="flex flex-col justify-center px-2 md:px-6 group/metric text-center md:text-left">
                  <span className="text-[9px] md:text-[10px] text-gray-500 font-medium uppercase tracking-wider mb-1 group-hover/metric:text-white transition-colors">
                    Auto Actions
                  </span>
                  <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 justify-center md:justify-start">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="text-base md:text-2xl font-bold text-white"
                    >
                      15k
                      <span className="text-[10px] md:text-sm text-gray-500 font-normal ml-0.5">/mo</span>
                    </motion.span>
                    <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;