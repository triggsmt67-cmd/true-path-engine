import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, ChevronDown, CheckCircle2, Target, Search } from 'lucide-react';
import { CONTACT_LINKS } from '@/constants/links';
import { SpotlightCard } from '@/components/SpotlightCard';

const diagnosticCards = [
  {
    title: "People cannot find you on Google?",
    body: "Your Google profile may be thin, stale, or unclear compared to nearby competitors.",
    leak: "Weak Google visibility",
    nextStep: "Review your Google profile",
    href: "/solutions/local-authority/"
  },
  {
    title: "The phone rings, but jobs still slip away?",
    body: "Calls may be missed, returned too slowly, or handled differently depending on the day.",
    leak: "Missed calls & slow response",
    nextStep: "Check missed-call risk",
    href: "/solutions/lead-velocity/"
  },
  {
    title: "Happy customers are not leaving reviews?",
    body: "The issue is usually the process, not the customer. Good jobs do not automatically become public proof.",
    leak: "Weak review system",
    nextStep: "Audit your review flow",
    href: "/solutions/review-system/"
  },
  {
    title: "Website visits are not turning into calls?",
    body: "The page may look fine, but still fail to make the next step obvious on mobile.",
    leak: "Website conversion leak",
    nextStep: "Review website clarity",
    href: "/solutions/website-conversion/"
  },
  {
    title: "Estimates keep going cold?",
    body: "The job may be getting lost after the quote is already sent because follow-up depends on memory.",
    leak: "Follow-up gap",
    nextStep: "Review estimate follow-up",
    href: "/solutions/estimate-follow-up/"
  },
  {
    title: "Ads are getting leads, but not booked jobs?",
    body: "The spend may not be the real problem. The path after the lead may be breaking down.",
    leak: "Wasted ad spend",
    nextStep: "Run a demand leak audit",
    href: "/solutions/demand-audit/"
  },
  {
    title: "Local Services Ads feel expensive or chaotic?",
    body: "Weak setup or poor lead handling might be making Google Guaranteed less profitable than it should be.",
    leak: "LSA waste",
    nextStep: "Review LSA setup",
    href: "/solutions/local-services-ads/"
  }
];

const triageRows = [
  {
    symptom: "You show up for your name but not important services",
    lookHere: "Google profile categories, services, reviews, photos, and website alignment",
    fix: "Google Business Profile Optimization",
    href: "/solutions/local-authority/"
  },
  {
    symptom: "Calls go to voicemail or get returned too late",
    lookHere: "Call coverage, callback speed, intake process, after-hours handling",
    fix: "Missed Call Recovery",
    href: "/solutions/lead-velocity/"
  },
  {
    symptom: "Reviews come in randomly or not at all",
    lookHere: "Review request timing, link access, follow-up text, front-desk process",
    fix: "Review Generation System",
    href: "/solutions/review-system/"
  },
  {
    symptom: "Website gets visits but few calls",
    lookHere: "Hero clarity, phone visibility, proof, service pages, CTA placement",
    fix: "Website Conversion Repair",
    href: "/solutions/website-conversion/"
  },
  {
    symptom: "Estimates are sent but not booked",
    lookHere: "Follow-up timing, reminders, open estimate tracking, booking prompts",
    fix: "Estimate Follow-Up System",
    href: "/solutions/estimate-follow-up/"
  },
  {
    symptom: "Ads feel expensive or inconsistent",
    lookHere: "Lead handling, call quality, response speed, landing path, tracking gaps",
    fix: "Demand Leak Audit",
    href: "/solutions/demand-audit/"
  },
  {
    symptom: "Google Guaranteed leads are weak or disputed",
    lookHere: "Category alignment, service areas, response speed, dispute process",
    fix: "Local Services Ads Cleanup",
    href: "/solutions/local-services-ads/"
  }
];

const problemDetails = [
  {
    title: "Weak Google Visibility",
    fix: "Google Business Profile Optimization",
    feelsLike: "You know people are searching, but competitors show up more often or look more trustworthy on Google Maps.",
    causes: "Thin categories, incomplete services, old photos, stale reviews, unclear service area, or weak profile-to-website alignment.",
    checkFirst: "Search your main service and city. Compare your profile against the top three businesses showing up.",
    href: "/solutions/local-authority/"
  },
  {
    title: "Missed Calls and Slow Response",
    fix: "Missed Call Recovery",
    feelsLike: "The phone matters, but calls still get missed, callbacks happen late, or nobody knows how many leads slipped away.",
    causes: "No clear call coverage plan, weak intake process, no missed-call tracking, or ads running when nobody is ready to answer.",
    checkFirst: "Review the last 30 days of calls. Count missed calls, callback speed, and calls that never got a real follow-up.",
    href: "/solutions/lead-velocity/"
  },
  {
    title: "Thin Reviews and Weak Trust",
    fix: "Review Generation System",
    feelsLike: "Customers are happy, but your reviews do not show it. Competitors look more trusted before the customer ever calls.",
    causes: "No review request process, awkward timing, no direct link, no follow-up text, or old reviews that make the business look quiet.",
    checkFirst: "Look at review recency, service-specific mentions, owner responses, and how easy it is for a happy customer to leave one.",
    href: "/solutions/review-system/"
  },
  {
    title: "Website Visitors Not Turning Into Calls",
    fix: "Website Conversion Repair",
    feelsLike: "The site looks fine, but it does not clearly turn customer intent into calls, forms, or booked work.",
    causes: "Unclear first screen, weak service pages, buried phone number, vague proof, confusing CTA, or mobile layout problems.",
    checkFirst: "Open your homepage and top service page on your phone. Can a customer tell what you do, where you work, and what to do next in 10 seconds?",
    href: "/solutions/website-conversion/"
  },
  {
    title: "Estimates Going Cold",
    fix: "Estimate Follow-Up System",
    feelsLike: "You send the number, but the job stalls because nobody follows up before the customer drifts away.",
    causes: "Follow-up lives in memory, open estimates are not tracked, or the next step is not clear after the quote is sent.",
    checkFirst: "Pull your last 20 estimates. How many got a follow-up within 24 to 72 hours? How many are still open with no clear next step?",
    href: "/solutions/estimate-follow-up/"
  },
  {
    title: "Wasted Ad Spend",
    fix: "Demand Leak Audit",
    feelsLike: "The leads come in, but booked work does not match the spend. The ads get blamed, but the leak may be after the lead arrives.",
    causes: "Slow response, weak call handling, unclear landing pages, poor review proof, tracking gaps, or ads running into a broken path.",
    checkFirst: "Trace one lead from click or call to outcome. Where did it slow down, get missed, or disappear?",
    href: "/solutions/demand-audit/"
  },
  {
    title: "Chaotic Local Services Ads",
    fix: "Local Services Ads Setup & Cleanup",
    feelsLike: "You are paying for leads, but they are the wrong jobs, out of your area, or slipping through because of slow responses.",
    causes: "Incorrect service categories, misaligned service areas, slow dispute processes, or no dedicated intake for ad calls.",
    checkFirst: "Check your active service categories against what you actually want to sell. How many leads were disputed last month?",
    href: "/solutions/local-services-ads/"
  }
];

const faqs = [
  {
    q: "Is this page a list of services?",
    a: "Not exactly. This page is meant to help you identify the problem first. The service comes after the leak is clear."
  },
  {
    q: "What if more than one problem sounds familiar?",
    a: "That is common. Most small service businesses have more than one leak. The practical move is to start with the one closest to booked revenue."
  },
  {
    q: "Do I need a full marketing plan?",
    a: "Usually not at first. You need to know where the current path is breaking before adding more activity, tools, or spend."
  },
  {
    q: "What should I fix first?",
    a: "Start where the most ready-to-buy customer is getting lost. Missed calls, weak Google visibility, unclear service pages, and cold estimates usually come before bigger strategy work."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <details className="group border border-black/5 bg-surface rounded-3xl overflow-hidden mb-4 transition-colors shadow-sm hover:border-black/10">
      <summary className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left cursor-pointer focus:outline-none list-none [&::-webkit-details-marker]:hidden">
        <span className="font-serif font-bold text-brand-navy text-lg md:text-xl tracking-tight">{question}</span>
        <ChevronDown className="w-5 h-5 text-text-secondary/50 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-6 md:px-8 pb-6 md:pb-8 text-text-secondary font-normal leading-relaxed border-t border-black/5 pt-4">
        {answer}
      </div>
    </details>
  );
}

export default async function SolutionsDiagnosticPage() {
  const solutionsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.truepath406.com/solutions/#webpage",
        "url": "https://www.truepath406.com/solutions/",
        "name": "What I Help Service Businesses Fix",
        "headline": "Find the leak that is costing you jobs.",
        "description": "Find the places your service business may be losing jobs — weak Google visibility, missed calls, slow follow-up, thin reviews, website conversion problems, cold estimates, and wasted ad spend.",
        "isPartOf": {
          "@id": "https://www.truepath406.com/#website"
        },
        "publisher": {
          "@id": "https://www.truepath406.com/#organization"
        },
        "about": [
          { "@type": "Thing", "name": "Google Business Profile optimization" },
          { "@type": "Thing", "name": "Missed call recovery" },
          { "@type": "Thing", "name": "Review generation systems" },
          { "@type": "Thing", "name": "Website conversion repair" },
          { "@type": "Thing", "name": "Estimate follow-up" },
          { "@type": "Thing", "name": "Wasted ad spend" },
          { "@type": "Thing", "name": "Demand leak audit" },
          { "@type": "Thing", "name": "Local Services Ads cleanup" }
        ],
        "audience": {
          "@type": "Audience",
          "audienceType": "Owner-operated local service businesses"
        },
        "breadcrumb": {
          "@id": "https://www.truepath406.com/solutions/#breadcrumb"
        },
        "mainEntity": {
          "@id": "https://www.truepath406.com/solutions/#faq"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.truepath406.com/solutions/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.truepath406.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "What I Help Service Businesses Fix",
            "item": "https://www.truepath406.com/solutions/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.truepath406.com/solutions/#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-brand-navy font-sans selection:bg-brand-accent selection:text-white relative flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }}
      />
      
      {/* Background line accents to match site */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full border-l border-black/[0.03] border-r border-black/[0.03] flex justify-between">
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar />

        <main className="flex-grow pt-32 lg:pt-40 pb-20 mt-2">
          
          {/* 1. Compact Diagnostic Hero */}
          <section className="max-w-[1400px] mx-auto px-6 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_#4F7C7A]"></span>
                  <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-accent uppercase">
                    What I help service businesses fix
                  </span>
                </div>
                
                <h1 className="font-serif font-bold tracking-tight leading-[1.1] md:leading-[1.05] text-text-primary text-4xl sm:text-5xl lg:text-6xl mb-6">
                  Find the leak that is <br className="hidden md:block"/>
                  <span className="text-brand-accent italic">costing you jobs.</span>
                </h1>
                
                <p className="text-base md:text-xl text-text-secondary font-normal leading-relaxed mb-8 max-w-2xl">
                  If leads, calls, reviews, estimates, or website visits are not turning into booked work, the problem is usually hiding in one part of the path. Start with the symptom that sounds most familiar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <a 
                    href="#diagnostic-cards" 
                    className="inline-flex h-14 md:h-16 items-center justify-center rounded-standard bg-brand-accent px-8 md:px-10 text-sm md:text-base font-bold text-white transition-all hover:bg-[#85161a] hover:scale-[1.02] active:scale-95 duration-300 shadow-lg shadow-brand-accent/20 whitespace-nowrap"
                  >
                    Start the Diagnosis
                  </a>
                  <a 
                    href="#problem-details" 
                    className="inline-flex h-14 md:h-16 items-center justify-center rounded-standard px-8 md:px-10 text-sm md:text-base font-bold text-brand-navy border-2 border-brand-navy/10 hover:bg-brand-navy/5 transition-all duration-300 whitespace-nowrap"
                  >
                    Skip to the Problems
                  </a>
                </div>
              </div>
              
              {/* The Lead Path Card */}
              <SpotlightCard 
                spotlightColor="rgba(79, 124, 122, 0.05)"
                className="bg-white border border-black/15 transition-all duration-500 shadow-md hover:shadow-lg hover:-translate-y-1 rounded-3xl p-8 md:p-12 max-w-md w-full lg:ml-auto relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-brand-accent/20 transition-colors duration-500" />
                
                <h3 className="font-serif font-bold text-xl text-brand-navy mb-6 pb-4 border-b border-black/5 flex items-center gap-3 tracking-tight relative z-10">
                  <Target className="w-5 h-5 text-brand-accent" />
                  The Lead Path
                </h3>
                <ol className="space-y-6 relative z-10">
                  {[
                    "Customer searches",
                    "They compare options",
                    "They visit or call",
                    "Someone responds",
                    "Estimate gets sent",
                    "Follow-up closes the loop"
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-black/5 text-brand-navy/60 border border-black/10 flex items-center justify-center text-xs font-bold">
                        0{idx + 1}
                      </span>
                      <span className="text-text-secondary font-normal">{step}</span>
                    </li>
                  ))}
                </ol>
              </SpotlightCard>
            </div>
          </section>

          {/* 2. Short Intro */}
          <section className="max-w-[1400px] mx-auto px-6 mb-24 text-center">
            <h2 className="font-serif font-bold tracking-tight text-3xl md:text-5xl text-text-primary mb-6">
              Start with the symptom, <span className="text-brand-accent italic">not the service.</span>
            </h2>
            <p className="text-base md:text-xl text-text-secondary font-normal leading-relaxed max-w-3xl mx-auto">
              Most owners do not wake up wanting a marketing service. They notice a problem: fewer calls, weak reviews, expensive leads, a stale Google profile, or estimates that never close. This page helps sort those symptoms into the practical fixes behind them.
            </p>
          </section>

          {/* 3. Diagnostic Question Cards */}
          <section id="diagnostic-cards" className="max-w-[1400px] mx-auto px-6 mb-32 scroll-mt-32">
            <div className="mb-12 text-center md:text-left">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-accent uppercase mb-3 block">Choose the closest match</span>
              <h2 className="font-serif font-bold tracking-tight text-3xl md:text-4xl text-text-primary mb-4">Which problem sounds familiar?</h2>
              <p className="text-base md:text-lg text-text-secondary font-normal max-w-2xl leading-relaxed">
                These are diagnostic cards. They are meant to help a busy owner recognize the leak before reading a full service page.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {diagnosticCards.map((card, idx) => (
                <SpotlightCard 
                  key={idx} 
                  spotlightColor="rgba(79, 124, 122, 0.05)"
                  className="bg-white border border-black/15 rounded-3xl p-8 md:p-10 transition-all duration-500 shadow-md hover:shadow-lg hover:-translate-y-1 group flex flex-col h-full relative overflow-hidden"
                >
                  <h3 className="font-sans font-bold text-2xl text-brand-navy mb-4 tracking-tight leading-snug relative z-10">{card.title}</h3>
                  <p className="text-text-secondary font-normal mb-8 flex-grow leading-relaxed relative z-10 text-[15px]">{card.body}</p>
                  
                  <div className="bg-black/[0.03] rounded-2xl p-6 mb-8 relative z-10 flex flex-col gap-6">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.15em] text-brand-navy/50 uppercase block mb-1.5">Likely Leak</span>
                      <span className="font-bold text-brand-navy text-base">{card.leak}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.15em] text-brand-navy/50 uppercase block mb-1.5">Best Next Step</span>
                      <span className="font-medium text-brand-navy/80 text-[15px]">{card.nextStep}</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy mt-auto group-hover:gap-3 transition-all relative z-10"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </SpotlightCard>
              ))}
            </div>
          </section>

          {/* 4. Fast Triage Section - Themed with brand-accent for contrast */}
          <section className="max-w-[1400px] mx-auto px-6 mb-32">
            <div className="bg-brand-accent border border-black/5 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="mb-12 relative z-10">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-navy uppercase mb-3 block">Fast Triage</span>
                <h2 className="font-serif font-bold tracking-tight text-3xl md:text-4xl text-white mb-4">What to look at first</h2>
                <p className="text-base md:text-lg text-white/90 font-normal max-w-3xl leading-relaxed">
                  If you already know the symptom, this gives you the first place to look before adding more marketing spend or rebuilding the whole site.
                </p>
              </div>

              <div className="overflow-x-auto relative z-10">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="border-b border-white/20 text-brand-navy text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                      <th className="py-5 px-4 w-1/3">If this is happening</th>
                      <th className="py-5 px-4 w-1/3">Look here first</th>
                      <th className="py-5 px-4 w-1/3">Related fix</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {triageRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/10 transition-colors group">
                        <td className="py-6 px-4 text-white font-bold">{row.symptom}</td>
                        <td className="py-6 px-4 text-white/80 text-sm font-normal leading-relaxed">{row.lookHere}</td>
                        <td className="py-6 px-4">
                          <Link href={row.href} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-brand-navy transition-colors">
                            {row.fix}
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 5. Problem Detail Sections */}
          <section id="problem-details" className="max-w-[1400px] mx-auto px-6 mb-32 scroll-mt-32">
            <div className="mb-12 text-center md:text-left">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-accent uppercase mb-3 block">Problem Details</span>
              <h2 className="font-serif font-bold tracking-tight text-3xl md:text-4xl text-text-primary mb-4">A closer look at each leak</h2>
              <p className="text-base md:text-lg text-text-secondary font-normal max-w-2xl leading-relaxed">
                These sections are intentionally tight. The goal is to help someone decide which service page or question page to read next.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {problemDetails.map((problem, idx) => (
                <SpotlightCard 
                  key={idx} 
                  spotlightColor="rgba(79, 124, 122, 0.05)"
                  className="bg-white border border-black/15 rounded-3xl p-8 md:p-10 transition-all duration-500 shadow-md hover:shadow-lg hover:-translate-y-1 group flex flex-col h-full relative overflow-hidden"
                >
                  <div className="flex flex-col gap-4 mb-8 border-b border-black/5 pb-8">
                    <Link href={problem.href} className="inline-flex items-center px-4 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap hover:bg-brand-accent hover:text-white transition-colors self-start relative z-10">
                      {problem.fix}
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                    <h3 className="font-serif font-bold text-2xl md:text-3xl text-brand-navy tracking-tight relative z-10">{problem.title}</h3>
                  </div>
                  
                  <div className="space-y-6 text-text-secondary font-normal leading-relaxed flex-grow relative z-10">
                    <div>
                      <span className="block font-bold text-brand-navy mb-2 text-sm uppercase tracking-widest">What it feels like:</span>
                      <p>{problem.feelsLike}</p>
                    </div>
                    <div>
                      <span className="block font-bold text-brand-navy mb-2 text-sm uppercase tracking-widest">Usual causes:</span>
                      <p>{problem.causes}</p>
                    </div>
                  </div>
                  <div className="bg-black/[0.02] p-6 rounded-2xl border border-black/5 mt-8 relative overflow-hidden z-10">
                    <span className="font-bold text-brand-navy mb-3 flex items-center gap-2 text-sm tracking-widest uppercase">
                      <Search className="w-4 h-4 text-brand-accent" />
                      Check first:
                    </span>
                    <p className="text-sm text-text-secondary font-normal leading-relaxed">{problem.checkFirst}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </section>

          {/* 6. When to use / skip */}
          <section className="max-w-[1400px] mx-auto px-6 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <SpotlightCard 
                spotlightColor="rgba(79, 124, 122, 0.05)"
                className="bg-white border border-black/15 rounded-3xl p-8 md:p-12 transition-all duration-500 shadow-md hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-[40px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                <h3 className="font-serif font-bold text-2xl text-brand-navy mb-4 flex items-center gap-3 relative z-10">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent" />
                  When to use this page
                </h3>
                <p className="text-text-secondary font-normal leading-relaxed relative z-10 text-lg">
                  Use this page when you can feel something is off, but you are not sure whether the issue is visibility, calls, reviews, website clarity, follow-up, or ad waste.
                </p>
              </SpotlightCard>
              <SpotlightCard 
                spotlightColor="rgba(79, 124, 122, 0.05)"
                className="bg-white border border-black/15 rounded-3xl p-8 md:p-12 transition-all duration-500 shadow-md hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group"
              >
                <h3 className="font-serif font-bold text-2xl text-brand-navy mb-4 flex items-center gap-3 relative z-10">
                  <ArrowRight className="w-6 h-6 text-brand-accent" />
                  When to skip ahead
                </h3>
                <p className="text-text-secondary font-normal leading-relaxed relative z-10 text-lg">
                  If you already know the weak point, go straight to the related service page. This page is the map. The service pages explain the fix.
                </p>
              </SpotlightCard>
            </div>
          </section>

          {/* 7. FAQ Section */}
          <section className="max-w-3xl mx-auto px-6 mb-32">
            <div className="mb-12 text-center">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-accent uppercase mb-3 block">Questions</span>
              <h2 className="font-serif font-bold tracking-tight text-3xl md:text-4xl text-text-primary">A few things owners usually ask.</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </section>

          {/* 8. Final CTA */}
          <section className="max-w-[1400px] mx-auto px-6 text-center">
            <div className="bg-surface rounded-[2.5rem] p-10 md:p-20 shadow-sm border border-black/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none" />
              <div className="relative z-10 max-w-4xl mx-auto">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-brand-accent uppercase mb-4 block">Not sure which leak it is?</span>
                <h2 className="font-serif font-bold tracking-tight text-3xl md:text-5xl lg:text-6xl text-text-primary mb-6">Review the current setup first.</h2>
                <p className="text-lg md:text-xl text-text-secondary font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
                  Most owners feel the symptom before they know the cause. I’ll review the path and show you where customers may be getting lost, confused, delayed, or never followed up with.
                </p>
                <div className="flex flex-col items-center justify-center gap-4">
                  <a
                    href={CONTACT_LINKS.calendar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 md:h-16 items-center justify-center rounded-standard bg-brand-accent px-8 md:px-12 text-sm md:text-base font-bold text-white transition-all hover:bg-[#85161a] hover:scale-[1.02] active:scale-95 duration-300 shadow-lg shadow-brand-accent/20 whitespace-nowrap w-full sm:w-auto gap-4"
                  >
                    Review My Current Setup
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <p className="text-sm text-text-secondary/60 font-bold mt-4">
                    Takes 15 minutes. No sales pitch. I’ll call your cell.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </div>
  );
}
