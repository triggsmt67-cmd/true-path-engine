import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsContent from '@/components/solutions/SolutionsContent';

const coreServices = [
  {
    title: "Google Business Profile Optimization",
    description: "Show up better in local search with a stronger profile, clearer services, better trust signals, and cleaner local positioning.",
    icon: "MapPin",
    href: "/solutions/local-authority/",
    color: "text-blue-400",
    spotlight: "rgba(59, 130, 246, 0.05)"
  },
  {
    title: "Missed Call Recovery & Lead Response",
    description: "Stop losing jobs to missed calls, slow replies, and follow-up gaps that cool leads off fast.",
    icon: "Zap",
    href: "/solutions/lead-velocity/",
    color: "text-brand-accent",
    spotlight: "rgba(2, 132, 199, 0.05)"
  },
  {
    title: "Review Generation Systems",
    description: "Build a simple process that helps you get more reviews without constantly chasing customers.",
    icon: "Star",
    href: "/solutions/review-system/",
    color: "text-cyan-400",
    spotlight: "rgba(6, 182, 212, 0.05)"
  },
  {
    title: "Website Conversion Repair",
    description: "Turn more visitors into calls, quote requests, and booked work by removing friction and tightening the message.",
    icon: "Globe",
    href: "/solutions/website-conversion/",
    color: "text-emerald-400",
    spotlight: "rgba(16, 185, 129, 0.05)"
  },
  {
    title: "Demand Leak Audit",
    description: "Find out where visibility, follow-up, conversion, and response are breaking down before spending more money.",
    icon: "Target",
    href: "/solutions/demand-audit/",
    color: "text-violet-400",
    spotlight: "rgba(139, 92, 246, 0.05)"
  },
  {
    title: "Estimate Follow-Up & Booking Automation",
    description: "Keep quotes and inquiries from going cold with a cleaner, more consistent follow-up process.",
    icon: "MessageSquare",
    href: "/solutions/estimate-follow-up/",
    color: "text-amber-400",
    spotlight: "rgba(245, 158, 11, 0.05)"
  },
  {
    title: "Local Services Ads Setup & Cleanup",
    description: "Improve lead flow from Local Services Ads with cleaner setup, better response handling, and less wasted spend.",
    icon: "Settings",
    href: "/solutions/local-services-ads/",
    color: "text-indigo-400",
    spotlight: "rgba(99, 102, 241, 0.05)"
  }
];

export default async function SolutionsHubPage() {
  const solutionsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://truepath406.com/solutions/#webpage",
        "url": "https://truepath406.com/solutions/",
        "name": "Service Business Growth Solutions | True Path Digital",
        "description": "Practical marketing and revenue services for owner-operated local service businesses in Montana.",
        "isPartOf": { "@id": "https://truepath406.com/#website" },
        "breadcrumb": { "@id": "https://truepath406.com/solutions/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://truepath406.com/solutions/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://truepath406.com/" },
          { "@type": "ListItem", "position": 2, "name": "Solutions" }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://truepath406.com/solutions/#service",
        "name": "True Path Digital Core Services",
        "serviceType": "Marketing Consulting",
        "provider": { "@id": "https://truepath406.com/#organization" },
        "telephone": "+1-406-880-6992",
        "areaServed": { "@type": "State", "name": "Montana" },
        "description": "Practical marketing and revenue services for owner-operated local service businesses in Montana."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans selection:bg-brand-accent selection:text-brand-navy relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full border-l border-black/[0.03] border-r flex justify-between">
          <div className="h-full w-px bg-black/[0.03]"></div>
          <div className="h-full w-px bg-black/[0.03]"></div>
          <div className="h-full w-px bg-black/[0.03]"></div>
          <div className="h-full w-px bg-black/[0.03]"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <SolutionsContent 
          services={coreServices} 
        />
        <Footer />
      </div>
    </div>
  );
}
