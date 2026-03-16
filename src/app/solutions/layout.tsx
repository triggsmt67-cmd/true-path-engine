import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Infrastructure Hub | True Path Digital',
  description: 'The Command Center for Montana trade growth. High-fidelity marketing frameworks and tactical service nodes for Plumbing, HVAC, and Septic business owners.',
  alternates: {
    canonical: 'https://truepath406.com/solutions'
  }
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
