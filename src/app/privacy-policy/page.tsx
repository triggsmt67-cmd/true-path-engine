import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | True Path Digital',
  description: 'Privacy Policy and Terms of Data Collection for True Path Digital.',
  alternates: {
    canonical: 'https://truepath406.com/privacy-policy/'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col selection:bg-brand-accent selection:text-white">
      <Navbar />

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full border-l border-white/[0.03] border-r flex justify-between">
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
          <div className="h-full w-px bg-white/[0.03]"></div>
        </div>
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto bg-surface border border-black/5 rounded-standard p-8 md:p-12 shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4 uppercase tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-text-secondary mb-10 font-bold uppercase tracking-widest">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

          <div className="prose prose-slate max-w-none text-text-secondary prose-headings:text-brand-navy prose-a:text-brand-accent hover:prose-a:text-[#85161a]">
            <h2>1. Information We Collect</h2>
            <p>
              When you interact with True Path Digital, particularly through our Trust Deficit Calculator or contact forms, we may collect the following information:
            </p>
            <ul>
              <li><strong>Personal Identifiers:</strong> Name, email address, and phone number.</li>
              <li><strong>Business Information:</strong> Business name, location, website URL, and Google Business Profile data.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and operating system (primarily for rate-limiting and security purposes).</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the collected information strictly for the following business purposes:
            </p>
            <ul>
              <li>To provide the requested services, such as delivering the results of the Trust Deficit Calculator or video teardowns.</li>
              <li>To communicate with you regarding your service inquiries.</li>
              <li>To improve our digital infrastructure and ensure the security of our platforms.</li>
              <li>For direct marketing (with your consent, where required), which you may opt out of at any time.</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>
              <strong>We do not sell your personal data.</strong> We may share your information only in the following limited circumstances:
            </p>
            <ul>
              <li>With trusted third-party service providers (e.g., email delivery via Resend) strictly to facilitate our communications with you.</li>
              <li>If required by law, subpoena, or other legal processes.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement reasonable security measures, including rate-limiting, strict CORS policies, and input sanitization, to protect your data from unauthorized access, alteration, or disclosure. However, no internet transmission is entirely secure, and we cannot guarantee absolute security.
            </p>

            <h2>5. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us using the information below.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              <strong>True Path Digital</strong><br />
              Email: trevor@truepath406.com<br />
              Location: Missoula, Montana
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
