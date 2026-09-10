'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useSectionTracking } from '@/hooks/useTracking';

const faqs = [
  {
    question: 'What types of properties are available at Modon Wadeem?',
    answer: 'Modon Wadeem offers a range of luxury residences including 4-bedroom villas, 5-bedroom villas, 6-bedroom villas, and elegant townhouses. Each property is designed with premium finishes and modern amenities.',
  },
  {
    question: 'What is the minimum downpayment required?',
    answer: 'Through our exclusive partnership with ADIB, you can secure your dream home with just a 5% downpayment. This makes luxury living more accessible than ever.',
  },
  {
    question: 'What financing options are available?',
    answer: 'We offer up to 75% financing through Abu Dhabi Islamic Bank (ADIB) with Sharia-compliant solutions, competitive rates, and flexible repayment terms.',
  },
  {
    question: 'Can foreign nationals purchase property at Modon Wadeem?',
    answer: 'Yes, Modon Wadeem is located in a designated freehold area where foreign nationals can purchase property with full ownership rights.',
  },
  {
    question: 'What amenities are included in the community?',
    answer: 'The community features world-class amenities including swimming pools, fitness centers, landscaped gardens, 24/7 security, community centers, covered parking, retail spaces, and children\'s play areas.',
  },
  {
    question: 'When is the expected completion date?',
    answer: 'Please register your interest to receive the latest updates on construction progress and expected handover dates.',
  },
  {
    question: 'How can I schedule a site visit?',
    answer: 'You can schedule a private viewing by registering your interest through our website. Our dedicated sales team will contact you to arrange a convenient time.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const trackRef = useSectionTracking('faq');

  return (
    <section ref={trackRef} className="py-24 lg:py-32 bg-[#141414]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
            Frequently Asked <span className="font-semibold">Questions</span>
          </h2>
          <p className="text-white/60 text-lg">
            Find answers to common questions about Modon Wadeem.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C4A35A] flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-white/60 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
