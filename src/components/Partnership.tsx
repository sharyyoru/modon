'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Percent, Clock, Shield } from 'lucide-react';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { useSectionTracking } from '@/hooks/useTracking';
import { trackCTAClick } from '@/lib/tracking';

const benefits = [
  {
    icon: Percent,
    title: 'Up to 75% Financing',
    description: 'Maximize your purchasing power with competitive financing rates.',
  },
  {
    icon: Clock,
    title: 'Flexible Terms',
    description: 'Choose from various repayment periods that suit your needs.',
  },
  {
    icon: Shield,
    title: 'Sharia Compliant',
    description: 'All financing solutions are fully Sharia compliant.',
  },
];

const features = [
  '5% downpayment only',
  'Quick pre-approval process',
  'Competitive profit rates',
  'No early settlement fees',
  'Dedicated relationship manager',
  'Exclusive partner rates',
];

export function Partnership() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trackRef = useSectionTracking('partnership');

  const handleRegisterClick = () => {
    trackCTAClick('partnership_register', 'partnership');
    setIsModalOpen(true);
  };

  return (
    <>
      <section ref={trackRef} className="py-24 lg:py-32 bg-gradient-to-b from-[#1B365D] to-[#0f1f38]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Strategic Partnership
            </p>
            <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
              Modon <span className="font-semibold text-[#C4A35A]">×</span> ADIB
            </h2>
            <p className="text-white/70 text-lg">
              Through our exclusive partnership with Abu Dhabi Islamic Bank, 
              we bring you exceptional financing solutions to make your dream home a reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/modon-adib.jfif"
                  alt="Modon and ADIB Partnership"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Downpayment</p>
                    <p className="text-3xl font-bold text-white">5%</p>
                  </div>
                  <div className="bg-[#C4A35A]/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-[#C4A35A]/30">
                    <p className="text-[#C4A35A]/80 text-xs uppercase tracking-wider mb-1">Financing</p>
                    <p className="text-3xl font-bold text-[#C4A35A]">75%</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C4A35A]/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#C4A35A]" />
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-white/50 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
                <h4 className="text-white font-semibold mb-4">Partnership Benefits</h4>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C4A35A] flex-shrink-0" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={handleRegisterClick} size="lg" className="w-full sm:w-auto group">
                Get Pre-Approved
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Pre-Approved"
        modalName="partnership_registration"
      >
        <p className="text-gray-600 mb-6">
          Register to receive financing details and get pre-approved for your Modon Wadeem home.
        </p>
        <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
