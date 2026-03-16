import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fetchGraphQL } from '@/utils/fetchGraphQL';
import SolutionsContent from '@/components/solutions/SolutionsContent';

const frameworks = [
  {
    title: "Local Authority Framework",
    subtitle: "Logic Pillar 01",
    description: "Dominating the map and anchoring your authority in the Montana market through proprietary proximity engines.",
    points: ["Proximity Mastery", "Semantic Trust", "Maps Dominance"],
    href: "/solutions/local-authority",
    icon: "MapPin",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    spotlight: "rgba(59, 130, 246, 0.1)"
  },
  {
    title: "Lead Velocity Framework",
    subtitle: "Logic Pillar 02",
    description: "Stop losing jobs to slow responses. Instant lead capture and automated response built specifically for the Trades.",
    points: ["LSA Management", "Missed Call Recovery", "Automated Nurture"],
    href: "/solutions/lead-velocity",
    icon: "Zap",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    spotlight: "rgba(255, 107, 0, 0.1)"
  }
];

const serviceNodes = [
  {
    title: "GMB Optimization",
    description: "Beyond just NAP data. We optimize for categorical dominance, coordinate integrity, and primary search area signals to own the 3-pack.",
    icon: "MapPin",
    category: "Proximity",
    color: "text-blue-400",
    spotlight: "rgba(59, 130, 246, 0.05)",
    wpCategory: "gmb-optimization"
  },
  {
    title: "Local Service Ads (LSA)",
    description: "Direct call-injection for trade businesses. We handle the background checks, budget scaling, and dispute management to ensure a sub-$50 lead cost.",
    icon: "Target",
    category: "Paid",
    color: "text-emerald-400",
    spotlight: "rgba(16, 185, 129, 0.05)",
    wpCategory: "paid-growth"
  },
  {
    title: "Automated Intake",
    description: "Turning missed calls into jobs. Our AI-driven SMS fallback captures homeowners the second you can't answer, booking quotes 24/7.",
    icon: "MessageSquare",
    category: "Logic",
    color: "text-violet-400",
    spotlight: "rgba(139, 92, 246, 0.05)",
    wpCategory: "automated-intake"
  },
  {
    title: "Reputation Scaling",
    description: "Not just getting reviews, but building a moat. Automated review velocity systems that prompt customers exactly when their trust is highest.",
    icon: "Star",
    category: "Trust",
    color: "text-cyan-400",
    spotlight: "rgba(6, 182, 212, 0.05)",
    wpCategory: "reputation-scaling"
  },
  {
    title: "Strategic AI",
    description: "Operational automation designed for field techs. Reducing paperwork and scheduling friction so your team can focus on the job, not the app.",
    icon: "Settings",
    category: "Process",
    color: "text-amber-400",
    spotlight: "rgba(245, 158, 11, 0.05)",
    wpCategory: "ai-used-carefully"
  },
  {
    title: "Market Shield",
    description: "Active competitive defense. We monitor the Montana landscape to ensure your proximity remains unchallenged by out-of-state competitors.",
    icon: "Lock",
    category: "Strategy",
    color: "text-indigo-400",
    spotlight: "rgba(99, 102, 241, 0.05)",
    wpCategory: "market-shield"
  }
];

// Query to get the latest post for each category
const EVIDENCE_QUERY = `
  query GetHubEvidence {
    posts(first: 100) {
      nodes {
        title
        slug
        date
        categories {
          nodes {
            slug
          }
        }
      }
    }
  }
`;

export default async function SolutionsHubPage() {
  let evidencePosts: any[] = [];
  
  try {
    const data = await fetchGraphQL(EVIDENCE_QUERY);
    evidencePosts = data?.posts?.nodes || [];
  } catch (err) {
    console.error("Failed to fetch hub evidence:", err);
  }

  // Map evidence to nodes
  const nodesWithEvidence = serviceNodes.map(node => {
    const latestPost = evidencePosts.find(post => 
      post.categories?.nodes.some((cat: any) => cat.slug === node.wpCategory)
    );
    
    return {
      ...node,
      evidence: latestPost ? {
        title: latestPost.title,
        slug: latestPost.slug,
        date: latestPost.date
      } : undefined
    };
  });

  return (
    <div className="min-h-screen bg-background text-ice font-sans selection:bg-primary selection:text-white relative">
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
        <SolutionsContent 
          frameworks={frameworks} 
          serviceNodes={nodesWithEvidence} 
        />
        <Footer />
      </div>
    </div>
  );
}
