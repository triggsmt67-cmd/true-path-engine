import TrustDeficitCalculator from '@/components/TrustDeficitCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust Deficit Calculator | True Path Digital',
  description: 'Calculate your trust deficit and see how your digital presence is costing you business.',
  alternates: {
    canonical: 'https://truepath406.com/trust-calculator/',
  }
};

export default function TrustCalculatorPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary pt-32 pb-24 md:pt-40 flex items-center justify-center">
      <div className="w-full px-4">
        <TrustDeficitCalculator />
      </div>
    </main>
  );
}
