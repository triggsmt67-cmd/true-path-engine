import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SolutionsContent from '@/components/solutions/SolutionsContent';

const coreServices = [
  {
    title: "Advanced Engine Diagnostics",
    description: "Identify complex engine performance issues with factory-level diagnostic tools and technical expertise.",
    icon: "Search",
    href: "/services/diagnostics/",
    color: "text-brand-red",
    spotlight: "rgba(158, 27, 31, 0.05)"
  },
  {
    title: "Brake & Suspension Systems",
    description: "Maintain absolute control and comfort with precision brake service and advanced suspension tuning.",
    icon: "Tool",
    href: "/services/braking-suspension/",
    color: "text-brand-navy",
    spotlight: "rgba(15, 34, 51, 0.05)"
  },
  {
    title: "Factory Scheduled Maintenance",
    description: "Protect your warranty and vehicle longevity with maintenance schedules that meet or exceed factory standards.",
    icon: "Activity",
    href: "/services/maintenance/",
    color: "text-brand-red",
    spotlight: "rgba(158, 27, 31, 0.05)"
  },
  {
    title: "Engine & Transmission Repair",
    description: "Expert overhaul and repair for high-performance engines and sophisticated modern transmissions.",
    icon: "Settings",
    href: "/services/drivetrain/",
    color: "text-brand-navy",
    spotlight: "rgba(15, 34, 51, 0.05)"
  },
  {
    title: "Electrical & Hybrid Systems",
    description: "Specialized service for the complex electronic architecture and high-voltage systems in modern vehicles.",
    icon: "Zap",
    href: "/services/electrical/",
    color: "text-brand-red",
    spotlight: "rgba(158, 27, 31, 0.05)"
  },
  {
    title: "Performance Upgrades",
    description: "Enhance your vehicle's power and handling with precision-engineered performance parts and tuning.",
    icon: "Target",
    href: "/services/performance/",
    color: "text-brand-navy",
    spotlight: "rgba(15, 34, 51, 0.05)"
  },
  {
    title: "The Benchmark Guarantee",
    description: "Every repair is backed by our absolute commitment to reliability, transparency, and mechanical excellence.",
    icon: "Shield",
    href: "/services/guarantee/",
    color: "text-brand-red",
    spotlight: "rgba(158, 27, 31, 0.05)"
  }
];

export default async function SolutionsHubPage() {
  const solutionsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://benchmarkauto.com/services/#webpage",
        "url": "https://benchmarkauto.com/services/",
        "name": "Specialized Automotive Services | Benchmark Automotive Service",
        "description": "Expert maintenance and repair for high-performance and luxury vehicles in Montana.",
        "isPartOf": { "@id": "https://benchmarkauto.com/#website" },
        "breadcrumb": { "@id": "https://benchmarkauto.com/services/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://benchmarkauto.com/services/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://benchmarkauto.com/" },
          { "@type": "ListItem", "position": 2, "name": "Services" }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://benchmarkauto.com/services/#service",
        "name": "Benchmark Automotive Core Services",
        "serviceType": "Auto Repair",
        "provider": { "@id": "https://benchmarkauto.com/#organization" },
        "telephone": "+1-406-880-6992",
        "areaServed": { "@type": "State", "name": "Montana" },
        "description": "Expert maintenance and repair for high-performance and luxury vehicles in Montana."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans selection:bg-brand-red selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }}
      />
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full border-l border-black/[0.03] border-r border-black/[0.03] flex justify-between">
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
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
