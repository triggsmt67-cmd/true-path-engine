'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Mail, ArrowRight, DollarSign, PhoneMissed, Target, TrendingDown, ShieldCheck, Lock, Download, CheckCircle2 } from 'lucide-react';

// Premium grain overlay to eliminate generic AI aesthetic
const grainStyle = {
  position: 'absolute' as const,
  inset: 0,
  pointerEvents: 'none' as const,
  opacity: 0.04,
  backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')",
  filter: 'contrast(120%) brightness(120%)'
};

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 80 });

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", { 
          style: 'currency', 
          currency: 'USD', 
          maximumFractionDigits: 0 
        }).format(latest);
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

const INDUSTRY_BENCHMARKS = {
  "Appliance Repair": { jobValue: 350, missedCalls: 6, closeRate: 45, ltvMultiplier: 2.5 },
  "Auto Repair": { jobValue: 800, missedCalls: 8, closeRate: 60, ltvMultiplier: 4 },
  "Cabinetry & Woodworking": { jobValue: 8000, missedCalls: 2, closeRate: 20, ltvMultiplier: 1.5 },
  "Carpet Cleaning": { jobValue: 250, missedCalls: 10, closeRate: 50, ltvMultiplier: 6 },
  "Concrete & Paving": { jobValue: 4500, missedCalls: 3, closeRate: 25, ltvMultiplier: 1.5 },
  "Electrician": { jobValue: 550, missedCalls: 6, closeRate: 35, ltvMultiplier: 3 },
  "Flooring": { jobValue: 3500, missedCalls: 4, closeRate: 30, ltvMultiplier: 2 },
  "Garage Door": { jobValue: 800, missedCalls: 4, closeRate: 30, ltvMultiplier: 2 },
  "General Contractor": { jobValue: 15000, missedCalls: 2, closeRate: 15, ltvMultiplier: 1.5 },
  "General Service": { jobValue: 1500, missedCalls: 5, closeRate: 30, ltvMultiplier: 2 },
  "Handyman": { jobValue: 350, missedCalls: 12, closeRate: 60, ltvMultiplier: 5 },
  "House Cleaning": { jobValue: 150, missedCalls: 15, closeRate: 60, ltvMultiplier: 12 },
  "HVAC": { jobValue: 6500, missedCalls: 3, closeRate: 25, ltvMultiplier: 2.5 },
  "Landscaping": { jobValue: 250, missedCalls: 10, closeRate: 50, ltvMultiplier: 8 },
  "Locksmith": { jobValue: 200, missedCalls: 8, closeRate: 80, ltvMultiplier: 2 },
  "Painting": { jobValue: 2500, missedCalls: 5, closeRate: 35, ltvMultiplier: 2 },
  "Pest Control": { jobValue: 400, missedCalls: 8, closeRate: 40, ltvMultiplier: 5 },
  "Plumbing": { jobValue: 450, missedCalls: 8, closeRate: 40, ltvMultiplier: 4 },
  "Pool Services": { jobValue: 150, missedCalls: 5, closeRate: 30, ltvMultiplier: 10 },
  "Roofing": { jobValue: 12000, missedCalls: 2, closeRate: 15, ltvMultiplier: 1.5 },
  "Tree Service": { jobValue: 1200, missedCalls: 4, closeRate: 35, ltvMultiplier: 2 }
};

type IndustryKey = keyof typeof INDUSTRY_BENCHMARKS;

export default function RevenueLeakCalculator() {
  const [industry, setIndustry] = useState<IndustryKey>("Appliance Repair");
  const [jobValue, setJobValue] = useState(350);
  const [missedCalls, setMissedCalls] = useState(6);
  const [closeRate, setCloseRate] = useState(45);
  const [email, setEmail] = useState('');

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newIndustry = e.target.value as IndustryKey;
    setIndustry(newIndustry);
    const bench = INDUSTRY_BENCHMARKS[newIndustry];
    setJobValue(bench.jobValue);
    setMissedCalls(bench.missedCalls);
    setCloseRate(bench.closeRate);
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Core Math
  const weeklyLeak = jobValue * missedCalls * (closeRate / 100);
  const annualLeak = weeklyLeak * 52;

  // [MIGRATION NOTE]: When moving to True Path Digital, replace this setTimeout with your real 
  // email API call (e.g., Resend, Mailchimp, or WordPress webhook) to capture the lead's email.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  // [CRITICAL MIGRATION NOTE]: DO NOT remove this local Blob generation when migrating.
  // The business owner specifically requested that the instant, browser-based download is KEPT intact.
  // We want leads to receive instant gratification without waiting for an email to arrive.
  // The email captured above can be used for follow-ups, but the actual report must still be generated locally here.
  const handleDownloadMockReport = () => {
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Revenue Leak Diagnostic Report</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 800px; margin: 40px auto; padding: 0 20px; background-color: #f9fafb; }
    .header { border-bottom: 2px solid #e5e7eb; padding-bottom: 20px; margin-bottom: 30px; text-align: center; }
    .header h1 { color: #0a0a0c; font-size: 28px; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 1px; }
    .section { background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    .section-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f3f4f6; padding-bottom: 12px; margin-bottom: 16px; }
    .section-title { font-size: 18px; font-weight: 700; margin: 0; color: #374151; }
    .metric { margin-bottom: 8px; font-size: 15px; }
    .metric strong { color: #4b5563; }
    .conclusion { background-color: #0a0a0c; color: white; padding: 30px; border-radius: 8px; text-align: center; margin-top: 40px; }
    .conclusion h2 { margin: 0 0 15px 0; color: #4ade80; }
    .footer { text-align: center; margin-top: 40px; font-size: 13px; color: #9ca3af; }
    .footer a { color: #4ade80; text-decoration: none; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Revenue Leak Diagnostic Report</h1>
    <div style="font-size: 14px; color: #6b7280; margin-bottom: 5px;"><strong>Date:</strong> ${new Date().toLocaleDateString()}</div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">1. The Raw Data</h2>
    </div>
    <div class="metric"><strong>Average Job Value:</strong> $${jobValue.toLocaleString()}</div>
    <div class="metric"><strong>Missed Calls Per Week:</strong> ${missedCalls}</div>
    <div class="metric"><strong>Normal Close Rate:</strong> ${closeRate}%</div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">2. Your Leak Breakdown</h2>
    </div>
    <div class="metric"><strong>Lost Jobs Per Week:</strong> ${(missedCalls * (closeRate / 100)).toFixed(1)}</div>
    <div class="metric"><strong>Weekly Revenue Leak:</strong> $${weeklyLeak.toLocaleString()}</div>
    <div class="metric"><strong>Annual Revenue Leak:</strong> <span style="color: #ef4444; font-weight: 600;">$${annualLeak.toLocaleString()}</span></div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">3. The Lifetime Value Multiplier</h2>
    </div>
    <div class="metric"><strong>Industry LTV Multiplier:</strong> ${INDUSTRY_BENCHMARKS[industry].ltvMultiplier}x</div>
    <div class="metric"><strong>True Compound Leak:</strong> <span style="color: #ef4444; font-weight: 600;">$${(annualLeak * INDUSTRY_BENCHMARKS[industry].ltvMultiplier).toLocaleString()}</span></div>
    <div style="font-size: 13px; color: #6b7280; margin-top: 8px;">*You aren't just losing the first job. You are losing recurring revenue and referrals over the lifetime of those lost customers.</div>
  <div class="section">
    <div class="section-header">
      <h2 class="section-title">4. Methodology & Data Sourcing</h2>
    </div>
    <div style="font-size: 14px; margin-bottom: 12px; color: #4b5563;">We do not use inflated marketing metrics. This diagnostic uses a strict, linear formula based entirely on the baseline metrics of the <strong>${industry}</strong> sector.</div>
    <div class="metric" style="font-family: monospace; font-size: 13px; background: #f3f4f6; padding: 8px; border-radius: 4px; margin-bottom: 8px; color: #111827;">(Missed Calls) &times; (Close Rate) = Lost Jobs</div>
    <div class="metric" style="font-family: monospace; font-size: 13px; background: #f3f4f6; padding: 8px; border-radius: 4px; color: #111827;">(Lost Jobs) &times; (Avg Job Value) = Top-Line Revenue Leak</div>
  </div>

  <div class="section">
    <div class="section-header">
      <h2 class="section-title">5. How Competitors Are Stealing Your Leads</h2>
    </div>
    <p style="font-size: 14px; color: #4b5563; margin: 0;">
      When a homeowner has an emergency, they search Google and call the first business they see. If you don't answer, <strong>85% of callers will immediately hang up and dial the next competitor on the list.</strong> They will not leave a voicemail. They will not wait. By missing the call, you are literally paying for marketing that feeds your direct competitors.
    </p>
  </div>

  <div class="conclusion" style="background-color: #0a0a0c; color: white; padding: 30px; border-radius: 8px; border-left: 4px solid #4ade80; text-align: left;">
    <h2 style="margin: 0 0 15px 0; color: #4ade80; font-size: 20px;">The 5-Minute Fix & Exact Script</h2>
    <p style="font-size: 15px; margin: 0 0 15px 0;">
      You can stop this bleeding today by implementing an automated <strong>Missed-Call Text-Back System</strong>. When you miss a call, the system instantly fires this exact text message to the caller within 3 seconds:
    </p>
    <div style="background-color: #1f2937; padding: 16px; border-radius: 6px; font-style: italic; font-size: 16px; margin-bottom: 15px;">
      "Hey, this is [Your Name] from [Your Business]. We're tied up on a job right now, but how can we help you today?"
    </div>
    <p style="font-size: 14px; margin: 0; color: #9ca3af;">
      This simple, automated text interrupts their search, makes them feel acknowledged, and stops them from calling your competitor.
    </p>
  </div>

  <div class="footer">
    Report generated by <strong>True Path Digital</strong><br>
    <a href="https://truepath406.com">truepath406.com</a>
  </div>
</body>
</html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'revenue_leak_report.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 font-sans">
      <div className="relative bg-[#050505] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
        {/* Visual FX */}
        <div style={grainStyle} className="z-0 mix-blend-overlay" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        
        <div className="relative z-10 grid lg:grid-cols-12 gap-0">
          
          {/* LEFT: CALCULATOR INPUTS */}
          <motion.div 
            className="lg:col-span-7 p-8 md:p-14 lg:pr-20"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemFade} className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                <TrendingDown className="w-4 h-4" />
                Live Revenue Diagnostic
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-4">
                Calculate Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Hidden Leak.</span>
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl max-w-lg leading-relaxed font-light">
                Adjust the sliders below to see exactly how much top-line revenue you might be bleeding from unanswered inbound calls.
              </p>
            </motion.div>

            <div className="space-y-10">
              {/* Industry Dropdown */}
              <motion.div variants={itemFade} className="space-y-4">
                <label className="text-white font-semibold flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-400" />
                  Select Your Industry
                </label>
                <div className="relative">
                  <select 
                    value={industry}
                    onChange={handleIndustryChange}
                    className="w-full bg-neutral-900 border border-neutral-700 focus:border-emerald-500 rounded-xl px-5 py-4 text-white appearance-none outline-none transition-all cursor-pointer font-medium"
                  >
                    {Object.keys(INDUSTRY_BENCHMARKS).map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                    ▼
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                  <Lock className="w-3 h-3 text-neutral-400" />
                  <span>Baselines calibrated using 2026 aggregate data for local service verticals.</span>
                </div>
              </motion.div>

              {/* Slider 1: Average Job Value */}
              <motion.div variants={itemFade} className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-white font-semibold flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-400" />
                    Average Job Value
                  </label>
                  <span className="text-2xl font-mono text-emerald-400 font-bold">
                    ${jobValue.toLocaleString()}
                  </span>
                </div>
                <div className="relative h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                    style={{ width: `${((jobValue - 100) / (10000 - 100)) * 100}%` }}
                  />
                  <input 
                    type="range" 
                    min="100" max="10000" step="100"
                    value={jobValue}
                    onChange={(e) => setJobValue(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <div className="flex justify-between text-xs text-neutral-500 font-medium">
                  <span>$100</span>
                  <span>$10k+</span>
                </div>
                <p className="text-xs text-neutral-500/80 leading-relaxed">
                  The gross revenue you collect on an average completed job.
                </p>
              </motion.div>

              {/* Slider 2: Missed Calls */}
              <motion.div variants={itemFade} className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-white font-semibold flex items-center gap-2">
                    <PhoneMissed className="w-5 h-5 text-emerald-400" />
                    Missed Calls (Per Week)
                  </label>
                  <span className="text-2xl font-mono text-emerald-400 font-bold">
                    {missedCalls}
                  </span>
                </div>
                <div className="relative h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                    style={{ width: `${((missedCalls - 1) / (50 - 1)) * 100}%` }}
                  />
                  <input 
                    type="range" 
                    min="1" max="50" step="1"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <div className="flex justify-between text-xs text-neutral-500 font-medium">
                  <span>1 Call</span>
                  <span>50+ Calls</span>
                </div>
                <p className="text-xs text-neutral-500/80 leading-relaxed">
                  The number of inbound customer calls your business is unable to answer per week.
                </p>
              </motion.div>

              {/* Slider 3: Close Rate */}
              <motion.div variants={itemFade} className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-white font-semibold flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-400" />
                    Normal Close Rate
                  </label>
                  <span className="text-2xl font-mono text-emerald-400 font-bold">
                    {closeRate}%
                  </span>
                </div>
                <div className="relative h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                    style={{ width: `${((closeRate - 5) / (100 - 5)) * 100}%` }}
                  />
                  <input 
                    type="range" 
                    min="5" max="100" step="5"
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
                <div className="flex justify-between text-xs text-neutral-500 font-medium">
                  <span>5%</span>
                  <span>100%</span>
                </div>
                <p className="text-xs text-neutral-500/80 leading-relaxed">
                  The percentage of callers you speak with who actually hire you for a job.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: RESULTS & GATE */}
          <div className="lg:col-span-5 bg-neutral-900/50 backdrop-blur-3xl border-l border-white/5 relative flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
            
            <div className="p-8 md:p-14 flex-grow flex flex-col justify-center relative z-10">
              
              <div className="text-center mb-10">
                <h3 className="text-neutral-400 uppercase tracking-[0.2em] text-sm font-bold mb-4">
                  Estimated Annual Leak
                </h3>
                <div className="text-6xl md:text-7xl font-black text-white tracking-tighter tabular-nums drop-shadow-2xl">
                  <AnimatedNumber value={annualLeak} />
                </div>
                <p className="text-emerald-400 mt-4 font-medium text-lg flex items-center justify-center gap-2">
                  <TrendingDown className="w-5 h-5" /> That is top-line revenue walking away.
                </p>
              </div>

              {/* Email Gate */}
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="gate-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="bg-black/40 p-6 rounded-2xl border border-white/10"
                  >
                    <div className="mb-6 text-center">
                      <h4 className="text-white font-bold text-xl mb-2">Get Your Full Leak Report</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                        See exactly how much you're leaving on the table, plus the 5-minute fix to stop the bleeding.
                      </p>
                      <ul className="text-sm text-neutral-300 space-y-2 text-left max-w-[280px] mx-auto">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"/> See your True Compound Leak (LTV)</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"/> Get the exact "Missed-Call" text script</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0"/> Learn how to stop feeding your competitors</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="relative">
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your best email"
                          className="w-full bg-neutral-900 border border-neutral-700 focus:border-emerald-500 rounded-xl px-5 py-4 pl-12 text-white placeholder-neutral-500 outline-none transition-all"
                        />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                      </div>

                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full relative group overflow-hidden rounded-xl bg-white text-black font-bold text-lg py-4 px-6 transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                            Get My Report & The Fix <ArrowRight className="w-5 h-5" />
                          </span>
                        )}
                      </button>
                    </div>
                    
                    <p className="text-neutral-600 text-xs text-center mt-4 flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" /> 100% Secure. Sent instantly.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-2xl text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h4 className="text-white font-bold text-2xl mb-2">Report Sent!</h4>
                    <p className="text-emerald-100/70 mb-6">
                      Check your inbox for the detailed breakdown and the 5-minute fix to patch your revenue leak.
                    </p>
                    <button 
                      onClick={handleDownloadMockReport}
                      className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-colors w-full"
                    >
                      <Download className="w-5 h-5" /> View Mock Report
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
