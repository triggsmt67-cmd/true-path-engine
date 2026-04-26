import TrustDeficitCalculator from '@/components/TrustDeficitCalculator';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust Deficit Calculator | Benchmark Automotive',
  description: 'Calculate your trust deficit and see how your digital presence is costing you business.',
  alternates: {
    canonical: 'https://truepath406.com/trust-calculator/',
  }
};

export default function TrustCalculatorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <TrustDeficitCalculator />
    </main>
  );
}
