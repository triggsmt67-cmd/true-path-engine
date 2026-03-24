
import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionSeparator from '@/components/SectionSeparator';
import { SpotlightCard } from '@/components/SpotlightCard';
import { Zap, PhoneCall, MessageSquare, TrendingUp, ArrowRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lead Velocity Framework | High-Performance Trade Growth',
  description: 'The Lead Velocity Framework: Stop losing jobs to slow responses. A proprietary conversion engine for Montana trade businesses—Plumbing, HVAC, and Septic.',
  alternates: {
    canonical: 'https://truepath406.com/solutions/lead-velocity'
  }
};

const pillars = [
  {
    role: "Demand Capture",
    title: "The Intent Siphon",
    description: "We don't chase 'likes.' We position your business at the top of Google Local Services (LSA) exactly when an emergency happens.",
    tags: ["LSA Management", "High-Intent Search", "Emergency Call Capture"],
    icon: PhoneCall
  },
  {
    role: "Response Speed",
    title: "Missed Call S-O-S",
    description: "Every missed call is a job for your competitor. Our system sends an instant SMS response to capture the lead before they call the next guy.",
    tags: ["Instant SMS Back-link", "Leaked Lead Recovery", "24/7 Response Logic"],
    icon: MessageSquare
  },
  {
    role: "Revenue Engine",
    title: "Appointment Velocity",
    description: "Automated scheduling and follow-ups. We turn incoming noise into confirmed appointments in your calendar, with zero effort from your techs.",
    tags: ["Automated Nurture", "Calendar Integration", "Lead-to-Job Tracking"],
    icon: TrendingUp
  }
];

export default function LeadVelocityPage() {
  const leadVelocitySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://truepath406.com/solutions/lead-velocity#service",
    "name": "Lead Velocity Framework",
    "serviceType": "Lead Capture & Automation",
    "provider": {
      "@id": "https://truepath406.com/#organization"
    },
    "areaServed": {
      "@type": "State",
      "name": "Montana"
    },
    "description": "Stop losing jobs to slow responses. A proprietary conversion engine for Montana trade businesses including Plumbing, HVAC, and Septic."
  };

  return (
    <div className="min-h-screen bg-background text-ice font-sans selection:bg-primary selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadVelocitySchema) }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full border-l border-white/[0.03] border-r flex justify-between">
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-24 md:pt-32">
          {/* Lead Velocity Hero */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#FF6B00]"></span>
                  <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-primary uppercase">
                    Logic Pillar 02
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold mb-10 tracking-tighter leading-[1.1]">
                   Stop losing jobs <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] via-primary to-[#78350f]">to the slow response.</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl leading-relaxed font-light">
                  Most leads are lost in the first 5 minutes. The Lead Velocity Framework turns your phone into a high-speed revenue engine. Built for the Trades.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link
                    href="https://calendly.com/triggsmt67"
                    className="relative inline-flex h-16 w-full sm:w-auto overflow-hidden rounded-full p-[1px] group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/80 to-primary/40 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0a0a0a] px-10 text-base font-medium text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-background whitespace-nowrap">
                      Audit Your Lead Speed
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  
                  <div className="flex items-center gap-2 text-sm text-secondary/60 italic">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Average tradesman response time: 24h. Yours? 30 seconds.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SectionSeparator number="01" title="THE LEAK" />
          
          {/* The Pain Section */}
          <section className="py-20 bg-white/[0.01]">
            <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">
                  Your "SEO" doesn't matter <br />
                  if no one answers the phone.
                </h2>
                <div className="space-y-6 text-lg text-secondary/80 font-light leading-relaxed">
                  <p>
                    You can spend thousands to be #1 in the Maps, but if a homeowner with a failed septic tank calls you and it goes to voicemail, they are clicking the next listing.
                  </p>
                  <p>
                    <strong>The job is gone.</strong>
                  </p>
                  <p>
                    The Lead Velocity Framework is about <span className="text-white font-normal">Revenue Insurance.</span> We fix the leaky bucket of missed calls and slow follow-ups so that every marketing dollar you spend actually puts a truck in a driveway.
                  </p>
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-12 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <ShieldCheck className="w-40 h-40 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-6 uppercase tracking-widest text-primary">The Logic</h3>
                <ul className="space-y-8 relative z-10">
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">01</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">High-Intent Siphon</h4>
                      <p className="text-sm text-secondary/60">Using LSA and Google Search to only capture people who need a solution right now.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">02</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">Missed Call Recovery</h4>
                      <p className="text-sm text-secondary/60">If you miss a call, an automated text conversation starts instantly to book the quote.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary font-mono text-sm pt-1">03</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">Speed-to-Lead Ratio</h4>
                      <p className="text-sm text-secondary/60">Studies show response under 5 mins increases close rates by 391%.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <SectionSeparator number="02" title="THE INFRASTRUCTURE" />

          {/* Pillars Grid */}
          <section className="py-20 mb-32">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="mb-16 max-w-xl">
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">The Velocity Engine</h2>
                <p className="text-lg text-secondary font-light">Built for plumbers, HVAC techs, and service pro owners who are too busy working to play receptionist.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                  <SpotlightCard
                    key={index}
                    spotlightColor="rgba(255, 107, 0, 0.1)"
                    className="relative flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2/3 w-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="text-secondary group-hover:text-primary transition-colors duration-300">
                        <pillar.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-medium text-secondary uppercase tracking-widest bg-white/[0.03] px-2 py-1 rounded">
                        {pillar.role}
                      </span>
                    </div>

                    <div className="flex-1 mb-8">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-secondary text-sm leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-6 border-t border-white/5">
                      {pillar.tags.map((tag, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-secondary/60 group-hover:text-secondary transition-colors">
                          <div className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-primary/50 transition-colors"></div>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>
          </section>

          {/* Value Comparison */}
          <section className="py-20 mb-20">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#0d0d0d] rounded-3xl border border-white/5 overflow-hidden">
                <div className="p-12 lg:p-20">
                  <h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight">Stop wasting quotes.</h2>
                  <p className="text-lg text-secondary/80 font-light mb-12">
                    Traditional marketing gets you phone calls. We get you appointments.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                      <div className="bg-red-500/10 p-2 rounded-lg mt-1">
                        <Clock className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Standard Marketing Flow</h4>
                        <p className="text-sm text-secondary/50">Missed calls go to voicemail. Leads wait 48 hours for a callback. By then, they've already booked your neighbor.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-6 bg-primary/5 border border-primary/20 rounded-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <Zap className="w-20 h-20 text-primary" />
                      </div>
                      <div className="bg-primary/10 p-2 rounded-lg mt-1">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-primary font-bold mb-1">Lead Velocity Engine</h4>
                        <p className="text-sm text-primary/70 font-medium">Instant AI-driven response. Missed calls recovered in 15 seconds. High-intent buyers captured and booked 24/7.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-full min-h-[400px] bg-gradient-to-br from-primary/20 to-[#0a0a0a] flex items-center justify-center p-12">
                   <div className="text-center">
                     <PhoneCall className="w-24 h-24 text-primary mx-auto mb-8 opacity-40" />
                     <h3 className="text-4xl font-semibold text-white mb-6">Built for Trades.</h3>
                     <p className="text-secondary max-w-sm mx-auto">No fluff. Just jobs on the board.</p>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trade CTA */}
          <section className="py-20 md:py-32 bg-primary relative overflow-hidden text-center group">
             <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
             <div className="max-w-4xl mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-10 tracking-tighter">
                   Let's see how many <br />
                   jobs you're losing.
                </h2>
                <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                   Run a free Missed Call Audit. We'll simulate a high-intent search and show you exactly where your intake process is breaking.
                </p>
                
                <Link
                  href="https://calendly.com/triggsmt67"
                  className="inline-flex h-20 items-center justify-center rounded-full bg-white px-12 text-xl font-semibold text-primary shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.05] active:scale-95 group-hover:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.4)]"
                >
                   Book Your Lead Audit
                   <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
             </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
