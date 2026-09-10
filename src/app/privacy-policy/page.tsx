import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Modon Avenew',
  description: 'Privacy policy for Modon Avenew website.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="bg-[#0a0a0a] border-b border-white/10">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl text-white font-light mb-8">
              Privacy <span className="font-semibold">Policy</span>
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 text-lg mb-6">
                Last updated: September 2026
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Introduction</h2>
              <p className="text-white/70 mb-4">
                Modon Properties (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or register your interest in Modon Avenew.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Information We Collect</h2>
              <p className="text-white/70 mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Country of residence</li>
                <li>Property preferences</li>
                <li>Purchase timeline</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-white/70 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Respond to your inquiries about Modon Avenew</li>
                <li>Send you information about pricing and availability</li>
                <li>Provide you with updates about the project</li>
                <li>Improve our website and services</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Security</h2>
              <p className="text-white/70 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
              <p className="text-white/70 mb-4">
                If you have any questions about this Privacy Policy, please contact us at info@modon-avenew.com.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Modon Properties. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
