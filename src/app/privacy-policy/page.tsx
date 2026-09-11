import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Modon Wadeem',
  description: 'Privacy policy for Modon Wadeem website.',
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

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
              <p className="text-white/70 mb-4">
                Dre Homes Real Estate Broker (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operating as an authorized channel partner for Modon Properties, respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and safeguard your information when you visit our website, use our services, or register your interest in Modon Wadeem properties.
              </p>
              <p className="text-white/70 mb-4">
                By using this website and submitting your information through our lead capture forms, you consent to the collection and use of your data as described in this Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Data Controller</h2>
              <p className="text-white/70 mb-4">
                Dre Homes Real Estate Broker is the data controller responsible for your personal data. If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <ul className="list-none text-white/70 space-y-1 mb-4">
                <li><strong>Company:</strong> Dre Homes Real Estate Broker</li>
                <li><strong>Email:</strong> info@drehomes.com</li>
                <li><strong>Phone:</strong> +971 58 541 7606</li>
                <li><strong>Address:</strong> Abu Dhabi, United Arab Emirates</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Information We Collect</h2>
              <p className="text-white/70 mb-4">
                We collect and process the following categories of personal data:
              </p>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Identity Data:</strong> Full name</li>
                <li><strong>Contact Data:</strong> Email address, phone number (including country code)</li>
                <li><strong>Preference Data:</strong> Property preferences, unit type interests, purchase timeline</li>
                <li><strong>Communication Data:</strong> Any messages or inquiries you send to us</li>
              </ul>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">3.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Technical Data:</strong> IP address, browser type and version, device information, operating system</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, referral source</li>
                <li><strong>Marketing Data:</strong> UTM parameters, campaign source, advertising identifiers</li>
                <li><strong>Cookie Data:</strong> Information collected through cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. How We Use Your Information</h2>
              <p className="text-white/70 mb-4">
                We use your personal data for the following purposes:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>To respond to inquiries:</strong> Contacting you about Modon Wadeem properties, pricing, and availability</li>
                <li><strong>To provide services:</strong> Sending payment plans, brochures, and project information you request</li>
                <li><strong>To communicate:</strong> Providing updates about the project, construction progress, and launch events</li>
                <li><strong>For marketing:</strong> Sending promotional materials about similar properties (with your consent)</li>
                <li><strong>To improve our services:</strong> Analyzing website usage to enhance user experience</li>
                <li><strong>For analytics:</strong> Understanding our audience and measuring marketing effectiveness</li>
                <li><strong>Legal compliance:</strong> Meeting our legal and regulatory obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Legal Basis for Processing</h2>
              <p className="text-white/70 mb-4">
                We process your personal data on the following legal grounds:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for specific purposes</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests, such as responding to your inquiries and improving our services</li>
                <li><strong>Contract:</strong> Processing is necessary to fulfill a contract or take steps at your request before entering a contract</li>
                <li><strong>Legal Obligation:</strong> Processing is necessary to comply with applicable laws</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Data Sharing and Disclosure</h2>
              <p className="text-white/70 mb-4">
                We may share your personal data with:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Modon Properties:</strong> The developer of Modon Wadeem, to facilitate your property inquiry</li>
                <li><strong>Abu Dhabi Islamic Bank (ADIB):</strong> Our financing partner, if you request mortgage information</li>
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our website, conduct our business, or service you (e.g., hosting providers, CRM systems, email services)</li>
                <li><strong>Analytics Partners:</strong> Companies like LinkedIn and Google that help us understand website traffic and marketing effectiveness</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights</li>
              </ul>
              <p className="text-white/70 mb-4">
                We do not sell your personal data to third parties for their own marketing purposes.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-white/70 mb-4">
                Our website uses cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
              <p className="text-white/70 mb-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes (including LinkedIn Insight Tag)</li>
              </ul>
              <p className="text-white/70 mb-4">
                You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Data Retention</h2>
              <p className="text-white/70 mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Lead inquiry data: Up to 3 years from your last interaction with us</li>
                <li>Marketing preferences: Until you withdraw consent</li>
                <li>Website analytics data: Up to 26 months</li>
              </ul>
              <p className="text-white/70 mb-4">
                After the retention period, your data will be securely deleted or anonymized.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Your Rights</h2>
              <p className="text-white/70 mb-4">
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data (&quot;right to be forgotten&quot;)</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for direct marketing</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time where processing is based on consent</li>
              </ul>
              <p className="text-white/70 mb-4">
                To exercise any of these rights, please contact us at info@drehomes.com. We will respond to your request within 30 days.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Data Security</h2>
              <p className="text-white/70 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal data, including:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure data storage with access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-white/70 mb-4">
                While we strive to protect your personal data, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. International Data Transfers</h2>
              <p className="text-white/70 mb-4">
                Your personal data may be transferred to and processed in countries outside your country of residence, including the United Arab Emirates. We ensure that appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable data protection laws.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Third-Party Links</h2>
              <p className="text-white/70 mb-4">
                Our website may contain links to third-party websites (such as WhatsApp, LinkedIn, or partner websites). We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">13. Children&apos;s Privacy</h2>
              <p className="text-white/70 mb-4">
                Our website and services are not directed to individuals under 18 years of age. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">14. Changes to This Privacy Policy</h2>
              <p className="text-white/70 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page with a new &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">15. Contact Us</h2>
              <p className="text-white/70 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none text-white/70 space-y-1 mb-4">
                <li><strong>Email:</strong> info@drehomes.com</li>
                <li><strong>WhatsApp:</strong> +971 58 541 7606</li>
                <li><strong>Website:</strong> modon-blond.vercel.app</li>
              </ul>
              <p className="text-white/70 mb-4">
                We are committed to resolving any complaints about our collection or use of your personal data. If you have a complaint, please contact us first so we can try to resolve it.
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
