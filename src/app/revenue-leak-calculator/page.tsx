import RevenueLeakCalculator from '@/components/RevenueLeakCalculator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Revenue Leak Calculator | True Path Digital',
  description: 'Calculate your revenue leak and see how much money your business is leaving on the table.',
  alternates: {
    canonical: 'https://www.truepath406.com/revenue-leak-calculator/',
  }
};

export default function RevenueLeakCalculatorPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans selection:bg-brand-accent selection:text-white relative">
      {/* Global Vertical Grid Background - Subtle dark lines for light mode */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full border-l border-black/[0.03] border-r border-black/[0.03] flex justify-between">
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-32 pb-24 md:pt-40 flex items-center justify-center">
          <div className="w-full px-4">
            <RevenueLeakCalculator />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
