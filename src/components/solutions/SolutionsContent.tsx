'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/SpotlightCard';
import SectionSeparator from '@/components/SectionSeparator';
import { 
  Search, 
  Tool, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Activity, 
  Shield,
  Zap,
  Settings,
  FileText
} from 'lucide-react';
import Link from 'next/link';

const IconMap: Record<string, any> = {
  Search,
  Tool,
  Target,
  Activity,
  Shield,
  Settings,
  Zap,
  FileText
};

interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
  spotlight: string;
  href?: string;
}

interface SolutionsContentProps {
  services: Service[];
}

export default function SolutionsContent({ services }: SolutionsContentProps) {
  return (
    <main className="pt-24 md:pt-32 bg-bg">
      {/* Hub Hero */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
             <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse shadow-[0_0_10px_#9E1B1F]"></span>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-red uppercase">
                Expert Care for Performance Vehicles
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 tracking-tighter leading-[1.1] text-brand-navy uppercase">
              Precision Performance <br className="hidden md:block" />
              <span className="text-brand-red italic">Services.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-6 max-w-3xl leading-relaxed font-bold">
              We provide factory-spec maintenance, complex diagnostics, and performance engineering for owners who demand absolute reliability and excellence from their vehicles.
            </p>
            
            <p className="text-lg text-text-secondary/60 mb-12 max-w-2xl leading-relaxed font-bold uppercase tracking-widest">
              Advanced technology. Mechanical integrity. Montana reliability.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto">
              <a
                href="https://calendly.com/triggsmt67"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-14 md:h-16 overflow-hidden rounded-standard p-[1px] focus:outline-none group shadow-lg shadow-brand-red/10 w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-95 duration-300"
              >
                <span className="absolute inset-0 bg-brand-red group-hover:bg-[#85161a] transition-colors duration-500" />
                <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-standard bg-transparent px-8 md:px-10 text-sm md:text-base font-bold text-white uppercase tracking-widest gap-3">
                  Schedule A Diagnostic
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              <a
                href="/trust-calculator"
                className="inline-flex h-14 md:h-16 items-center justify-center rounded-standard px-8 md:px-10 text-sm md:text-base font-bold text-brand-navy border-2 border-brand-navy/10 hover:border-brand-navy/20 hover:bg-brand-navy/5 transition-all duration-300 uppercase tracking-widest w-full sm:w-auto"
              >
                View Standards
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionSeparator number="01" title="CORE SERVICES" />

      {/* Services Grid */}
      <section className="py-12 md:py-16 mb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-brand-navy uppercase">Specialized Solutions</h2>
            <p className="text-lg text-text-secondary font-bold max-w-2xl uppercase tracking-widest">
              From factory maintenance to high-performance tuning, we offer a comprehensive suite of services designed for precision and durability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = IconMap[service.icon] || Target;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="h-full"
                >
                  <Link 
                    href={service.href || '#'} 
                    className={`block h-full group decoration-transparent ${!service.href || service.href === '#' ? 'pointer-events-none' : ''}`}
                  >
                    <SpotlightCard
                      spotlightColor={service.spotlight}
                      className="p-8 md:p-10 bg-surface border border-black/5 shadow-sm rounded-standard group cursor-pointer hover:border-brand-red/20 transition-all duration-300 h-full flex flex-col hover:shadow-xl"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`w-14 h-14 rounded-xl bg-bg flex items-center justify-center ${service.color} group-hover:bg-brand-red/5 transition-colors`}>
                          <IconComponent className="w-7 h-7" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-brand-navy mb-4 tracking-tight leading-snug group-hover:text-brand-red transition-colors uppercase">{service.title}</h3>
                      <p className="text-base text-text-secondary/80 font-bold leading-relaxed mb-10">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t border-black/5">
                        <div className={`inline-flex items-center gap-3 font-bold uppercase tracking-widest text-xs ${service.color} transition-all duration-300 group-hover:gap-4`}>
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionSeparator number="02" title="WHY THE BENCHMARK?" />

      {/* Audit Block */}
      <section className="py-12 md:py-20 mb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <SpotlightCard
            spotlightColor="rgba(158, 27, 31, 0.04)"
            className="p-10 md:p-16 bg-brand-navy border border-black/5 rounded-standard relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white text-[10px] uppercase font-bold tracking-[0.2em] mb-6">
                  <Target className="w-3 h-3" />
                  Diagnostic Standard
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight uppercase">
                  Start with a <br className="hidden md:block" />
                  <span className="text-brand-red italic">Benchmark Inspection.</span>
                </h3>
                
                <p className="text-lg md:text-xl text-white/80 font-bold leading-relaxed mb-8 max-w-2xl">
                  Before we turn a single wrench, we seek absolute clarity. Our digital vehicle inspection provides you with high-resolution photos, technician notes, and a clear, prioritized breakdown of your vehicle's health.
                </p>

                <p className="text-sm font-bold text-white/50 uppercase tracking-[0.3em] mb-12">
                  Total Transparency. No Guesswork. No Hype.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="https://calendly.com/triggsmt67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex h-14 md:h-16 overflow-hidden rounded-standard p-[1px] focus:outline-none group shadow-lg w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-95 duration-300"
                  >
                    <span className="absolute inset-0 bg-brand-red" />
                    <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-standard bg-transparent px-8 md:px-10 text-sm md:text-base font-bold text-white uppercase tracking-widest gap-3">
                      Schedule A Diagnostic
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <SectionSeparator number="03" title="AUTOMOTIVE INSIGHTS" />
      
      {/* Supporting Insights */}
      <section className="py-12 md:py-16 mb-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 tracking-tight text-brand-navy uppercase">Technical Insights</h2>
              <p className="text-lg text-text-secondary font-bold max-w-xl uppercase tracking-widest">
                Deep dives into performance engineering and maintenance standards.
              </p>
            </div>
            
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-red text-xs font-bold hover:gap-3 transition-all tracking-[0.2em] uppercase border-2 border-brand-red/20 px-8 py-3 rounded-standard hover:bg-brand-red/5 whitespace-nowrap"
            >
              See All Insights
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Why European Engines Require Specialized Oil Standards",
                slug: "oil-standards",
                excerpt: "The critical difference between off-the-shelf oil and factory-spec lubricants for high-performance German engineering."
              },
              {
                title: "The Danger of Ignoring Warning Lights on Modern Electronics",
                slug: "warning-lights",
                excerpt: "How complex vehicle networks communicate faults and why early diagnosis prevents catastrophic system failure."
              },
              {
                title: "High-Performance Suspension: Tuning for Montana Roads",
                slug: "suspension-tuning",
                excerpt: "Balancing precise handling with the durability required for rugged terrain and seasonal temperature swings."
              }
            ].map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={`/blog/${article.slug}`} className="block h-full group decoration-transparent">
                  <div className="p-8 h-full bg-surface border border-black/5 shadow-sm rounded-standard flex flex-col transition-all duration-300 group-hover:border-brand-red/20 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div className="mb-6 flex gap-3 items-center">
                      <FileText className="w-4 h-4 text-brand-red" />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-text-secondary/50 font-bold">Technical Article</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-4 tracking-tight leading-snug group-hover:text-brand-red transition-colors uppercase">
                      {article.title}
                    </h3>
                    <p className="text-sm text-text-secondary/70 font-bold leading-relaxed mb-8 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-brand-red uppercase tracking-widest group-hover:gap-3 transition-all">
                      Read Insight
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hub Footer CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden border-t border-black/5 text-center">
        <div className="absolute inset-0 bg-brand-red/5 blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-red/20 bg-brand-red/5 text-brand-red text-[10px] uppercase font-bold tracking-[0.2em] mb-8">
            <Target className="w-3 h-3" />
            Diagnostic Standard
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 tracking-tighter leading-tight uppercase">
            Trust But <br className="hidden sm:block" />
            <span className="text-brand-red italic">Verify.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-text-secondary font-bold mb-8 uppercase tracking-widest">
            Start with a factory-spec diagnostic.
          </p>

          <p className="text-lg text-text-secondary/70 font-bold leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you are preparing for a long haul or tracking a mysterious vibration, our comprehensive diagnostic review provides the clarity you need to move forward with confidence.
          </p>

          <div className="flex flex-col items-center justify-center gap-6">
            <a
              href="https://calendly.com/triggsmt67"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-16 md:h-20 overflow-hidden rounded-standard p-[1px] focus:outline-none group shadow-lg shadow-brand-red/10 w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-95 duration-300"
            >
              <span className="absolute inset-0 bg-brand-red group-hover:bg-[#85161a] transition-colors duration-500" />
              <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-standard bg-transparent px-10 md:px-14 text-base md:text-lg font-bold text-white uppercase tracking-widest gap-4">
                Schedule A Diagnostic
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </a>
            
            <p className="text-sm font-bold text-text-secondary/60 uppercase tracking-widest mt-4">
              Factory-spec Care. Montana Reliability.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
