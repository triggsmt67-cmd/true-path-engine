import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What I Help Service Businesses Fix | True Path Digital',
  description: 'Find the places your service business may be losing jobs — weak Google visibility, missed calls, slow follow-up, thin reviews, website conversion problems, cold estimates, and wasted ad spend.',
  alternates: {
    canonical: 'https://truepath406.com/solutions/'
  }
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
