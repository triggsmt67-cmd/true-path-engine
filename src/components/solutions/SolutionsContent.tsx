'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/SpotlightCard';
import SectionSeparator from '@/components/SectionSeparator';
import { 
  MapPin, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  MessageSquare, 
  Lock,
  Globe,
  Settings,
  Star,
  FileText
} from 'lucide-react';
import Link from 'next/link';

const IconMap: Record<string, any> = {
  MapPin,
  Zap,
  Target,
  MessageSquare,
  Star,
  Settings,
  Lock,
  Globe
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
    <main className="pt-24 md:pt-32">
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
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#FF6B00]"></span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-primary uppercase">
                Services for Owner-Operated Service Businesses
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-10 tracking-tighter leading-[1.1]">
              What I Help Service <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] via-primary to-[#78350f]">Businesses Fix</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary mb-6 max-w-3xl leading-relaxed font-light">
              I help local service businesses fix the places revenue leaks out — weak Google visibility, missed calls, slow follow-up, thin reviews, and websites that do not turn traffic into calls.
            </p>
            
            <p className="text-lg text-secondary/60 mb-12 max-w-2xl leading-relaxed font-light">
              Practical help for businesses where the phone matters, time is limited, and bad systems quietly cost jobs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full lg:w-auto">
              <a
                href="https://calendly.com/triggsmt67"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex h-14 md:h-16 overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-[0_0_40px_-5px_rgba(180,83,9,0.35)] w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-95 duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] px-8 md:px-10 text-sm md:text-base font-medium text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-background whitespace-nowrap">
                  Review My Current Setup
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>

              <a
                href="/trust-calculator"
                className="inline-flex h-14 md:h-16 items-center justify-center rounded-full px-8 md:px-10 text-sm md:text-base font-medium text-white border border-white/10 hover:bg-white/5 transition-colors duration-300 whitespace-nowrap w-full sm:w-auto"
              >
                Run Instant Scan
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
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">Core Services</h2>
            <p className="text-lg text-secondary font-light max-w-2xl">
              Practical help for service businesses dealing with weak visibility, missed calls, slow follow-up, thin reviews, and underperforming websites.
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
                      className="p-8 md:p-10 bg-[#0a0a0a] border border-white/10 shadow-2xl shadow-black/60 rounded-3xl group cursor-pointer hover:border-white/20 hover:bg-white/[0.03] transition-all duration-300 h-full flex flex-col hover:shadow-[0_0_30px_rgba(255,107,0,0.05)]"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center ${service.color} group-hover:bg-white/[0.05] transition-colors`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight leading-snug group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-base text-secondary/70 font-light leading-relaxed mb-10">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto pt-6 border-t border-white/5">
                        <div className={`inline-flex items-center gap-3 font-semibold ${service.color} transition-all duration-300 group-hover:gap-4`}>
                          Learn More
                          <ArrowRight className="w-5 h-5" />
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

      <SectionSeparator number="02" title="NOT SURE WHAT YOU NEED?" />

      {/* Audit Block */}
      <section className="py-12 md:py-20 mb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <SpotlightCard
            spotlightColor="rgba(255, 107, 0, 0.08)"
            className="p-10 md:p-16 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-orange-500/20" />
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-widest mb-6">
                  <Target className="w-3 h-3" />
                  Diagnostic
                </div>
                
                <h3 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">
                  Start with a <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Demand Leak Audit</span>
                </h3>
                
                <p className="text-lg md:text-xl text-secondary font-light leading-relaxed mb-6 max-w-2xl">
                  If you are not sure where work is slipping through the cracks, this is the best place to start. I’ll look at your current setup, help identify where visibility, follow-up, or conversion is breaking down, and show you what is worth fixing first.
                </p>

                <p className="text-sm font-mono text-secondary/60 uppercase tracking-widest mb-10">
                  Practical review. Clear next steps. No hype.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="https://calendly.com/triggsmt67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex h-14 md:h-16 overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-[0_0_40px_-5px_rgba(180,83,9,0.35)] w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-95 duration-300"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] px-8 md:px-10 text-sm md:text-base font-medium text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-background whitespace-nowrap">
                      Review My Current Setup
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </div>
                <p className="text-xs text-secondary/60 mt-4 sm:ml-4 text-center sm:text-left">
                  Takes 15 minutes. No sales pitch. I’ll call your cell.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </section>

      <SectionSeparator number="03" title="RELATED INSIGHTS" />
      
      {/* Supporting Insights */}
      <section className="py-12 md:py-16 mb-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-semibold mb-4 tracking-tight">Related Insights</h2>
              <p className="text-lg text-secondary font-light max-w-xl">
                Clear thinking on the same problems these services are built to fix.
              </p>
            </div>
            
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all tracking-widest uppercase border border-primary/20 px-6 py-3 rounded-full hover:bg-primary/5 whitespace-nowrap"
            >
              See All Insights
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "The #1 Profit Leak in a Service Business",
                slug: "profit-leak",
                excerpt: "Missing calls and slow follow-ups are quietly crushing your bottom line before you ever get a chance to compete."
              },
              {
                title: "An Inactive Google Business Profile Is Killing Your Local Visibility",
                slug: "inactive-gmb",
                excerpt: "Why the easiest visibility win for a local service business is often the most neglected digital asset."
              },
              {
                title: "The “More Leads” Trap: Fix Your Booking Rate First",
                slug: "more-leads-trap",
                excerpt: "Why buying more attention won't fix a broken intake process, and how to repair the leaks first."
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
                  <div className="p-8 h-full bg-white/[0.02] border border-white/10 shadow-2xl shadow-black/40 rounded-[2rem] flex flex-col transition-all duration-300 group-hover:bg-white/[0.04] group-hover:border-white/20 group-hover:-translate-y-1">
                    <div className="mb-6 flex gap-3 items-center">
                      <FileText className="w-4 h-4 text-primary opacity-60" />
                      <span className="text-[10px] uppercase tracking-widest text-secondary/50 font-mono">Article</span>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-4 tracking-tight leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-secondary/70 font-light leading-relaxed mb-8 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-primary/70 uppercase tracking-widest group-hover:text-primary transition-colors">
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
      <section className="py-24 md:py-32 relative overflow-hidden border-t border-white/5 text-center">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-widest mb-8">
            <Target className="w-3 h-3" />
            Diagnostic Review
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tighter leading-tight">
            Not Sure What to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Fix First?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-secondary font-medium mb-6">
            Start with a practical review of your current setup.
          </p>

          <p className="text-lg text-secondary/70 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            If you know something is off but you are not sure where the real leak is, start here. I’ll look at your visibility, lead handling, follow-up, and conversion path so you can see what is worth fixing first.
          </p>

          <p className="text-sm font-mono text-secondary/50 uppercase tracking-widest mb-12">
            Clear next steps. No hype. No wasted motion.
          </p>

          <div className="flex flex-col items-center justify-center gap-6">
            <a
              href="https://calendly.com/triggsmt67"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-16 md:h-20 overflow-hidden rounded-full p-[1px] focus:outline-none group shadow-[0_0_50px_-10px_rgba(180,83,9,0.2)] w-full sm:w-auto transition-all hover:scale-[1.02] active:scale-95 duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] px-10 md:px-14 text-base md:text-lg font-semibold text-white backdrop-blur-3xl gap-4 transition-colors group-hover:bg-[#121212] whitespace-nowrap">
                Review My Current Setup
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
            </a>
            
            <p className="text-sm text-secondary/60">
              Takes 15 minutes. No sales pitch. I’ll call your cell.
            </p>
            
            <Link href="/trust-calculator" className="mt-4 text-sm font-semibold text-primary/80 hover:text-primary transition-colors underline-offset-4 hover:underline">
              Run Instant Scan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
