import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { fetchGraphQL } from '@/utils/fetchGraphQL';
import SolutionsContent from '@/components/solutions/SolutionsContent';

const frameworks = [
  {
    title: "Demand Capture",
    subtitle: "Logic Pillar 01",
    description: "If the phone rings but the process breaks after that, more lead volume only creates more waste.\n\nThis is where we look at how demand is being caught, where it is slipping, and what friction is quietly costing booked work.",
    points: ["Call Handling", "Missed Opportunity Recovery", "Intake Clarity"],
    href: "/solutions/local-authority",
    icon: "MapPin",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
    spotlight: "rgba(59, 130, 246, 0.1)",
    cta: "Review This Area"
  },
  {
    title: "Demand Conversion",
    subtitle: "Logic Pillar 02",
    description: "A visibility problem and a conversion problem are not the same thing.\n\nThis is where we look at what happens after an inquiry comes in — whether trust is strong, follow-up is disciplined, and the business is turning opportunities into booked work consistently.",
    points: ["Booking Rate", "Follow-Up Discipline", "Trust Signals"],
    href: "/solutions/lead-velocity",
    icon: "Zap",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    spotlight: "rgba(255, 107, 0, 0.1)",
    cta: "Review This Area"
  }
];

const serviceNodes = [
  {
    title: "Google Business Profile",
    description: "For many service businesses, this is still one of the most important demand and trust surfaces.\n\nI look at whether the profile supports the business clearly — or quietly weakens it through neglect, inconsistency, or weak proof.",
    icon: "MapPin",
    category: "Trust",
    color: "text-blue-400",
    spotlight: "rgba(59, 130, 246, 0.05)",
    staticEvidence: "An inactive Google Business Profile can quietly reduce trust before the phone ever rings.",
    cta: "View Review Area"
  },
  {
    title: "Paid Lead Sources",
    description: "When lead quality drops or cost rises, the first question is not always how to get more.\n\nSometimes the better question is whether the current spend is producing the kind of work the business actually wants.",
    icon: "Target",
    category: "Spend",
    color: "text-emerald-400",
    spotlight: "rgba(16, 185, 129, 0.05)",
    staticEvidence: "Poor lead quality is often a spend-discipline problem before it is a traffic problem.",
    cta: "View Review Area"
  },
  {
    title: "Intake and Follow-Up",
    description: "Missed calls and weak follow-up quietly cost more than most owners realize.",
    icon: "MessageSquare",
    category: "Process",
    color: "text-violet-400",
    spotlight: "rgba(139, 92, 246, 0.05)",
    cta: "View Review Area"
  },
  {
    title: "Reputation and Public Proof",
    description: "A business can do good work and still have weak public trust reinforcement.",
    icon: "Star",
    category: "Trust",
    color: "text-cyan-400",
    spotlight: "rgba(6, 182, 212, 0.05)",
    cta: "View Review Area"
  },
  {
    title: "AI and Automation",
    description: "AI is useful when it reduces friction.\n\nIt becomes a problem when it adds more noise, more tools, or false confidence.\n\nNot as a replacement for judgment.\nAs support for better decisions.",
    icon: "Settings",
    category: "Process",
    color: "text-amber-400",
    spotlight: "rgba(245, 158, 11, 0.05)",
    staticEvidence: "AI is most useful when it simplifies the work, not when it distracts from it.",
    cta: "View Review Area"
  },
  {
    title: "Demand Stability",
    description: "A lot of service businesses stay busy, but stay busy in the wrong way.",
    icon: "Lock",
    category: "Strategy",
    color: "text-indigo-400",
    spotlight: "rgba(99, 102, 241, 0.05)",
    cta: "View Review Area"
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
  const nodesWithEvidence = serviceNodes.map((node: any) => {
    const latestPost = evidencePosts.find(post => 
      post.categories?.nodes.some((cat: any) => node.wpCategory && cat.slug === node.wpCategory)
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
