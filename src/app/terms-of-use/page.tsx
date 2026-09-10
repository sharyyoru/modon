import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Use | Modon Avenew',
  description: 'Terms of use for Modon Avenew website.',
};

export default function TermsOfUsePage() {
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
              Terms of <span className="font-semibold">Use</span>
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 text-lg mb-6">
                Last updated: September 2026
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-white/70 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Use of Website</h2>
              <p className="text-white/70 mb-4">
                This website is provided for informational purposes only. The content is subject to change without notice. Images, renderings, and descriptions are for illustration purposes only and may not represent the final product.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Pricing and Availability</h2>
              <p className="text-white/70 mb-4">
                All pricing and availability information is subject to change without notice. The information provided on this website does not constitute an offer to sell or a solicitation of an offer to buy any property.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Intellectual Property</h2>
              <p className="text-white/70 mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of Modon Properties and is protected by copyright and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-white/70 mb-4">
                Modon Properties shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Governing Law</h2>
              <p className="text-white/70 mb-4">
                These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact Us</h2>
              <p className="text-white/70 mb-4">
                If you have any questions about these Terms of Use, please contact us at info@modon-avenew.com.
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
