'use client';

import { useState } from 'react';
import { ArrowRight, Lock, FileText, Calculator, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { useSectionTracking } from '@/hooks/useTracking';
import { trackCTAClick } from '@/lib/tracking';

const paymentFeatures = [
  {
    icon: Calculator,
    title: 'Flexible Installments',
    description: 'Spread your payments across construction phases.',
  },
  {
    icon: Calendar,
    title: 'Extended Timeline',
    description: 'Comfortable payment schedule aligned with project milestones.',
  },
  {
    icon: FileText,
    title: 'Clear Breakdown',
    description: 'Transparent payment structure with no hidden costs.',
  },
];

export function PaymentPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trackRef = useSectionTracking('payment_plan');

  const handleRevealPlan = () => {
    trackCTAClick('reveal_payment_plan', 'payment');
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="payment" ref={trackRef} className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Payment Plan
              </p>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
                Flexible <span className="font-semibold">Payment Options</span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Our exclusive payment plan is designed to make your dream home accessible. 
                Register to receive the full payment schedule.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1B365D] to-[#0f1f38] rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 bg-white/5 rounded-2xl">
                  <p className="text-white/50 text-sm mb-2">Downpayment</p>
                  <p className="text-4xl font-bold text-[#C4A35A]">5%</p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl">
                  <p className="text-white/50 text-sm mb-2">During Construction</p>
                  <div className="flex items-center justify-center gap-2">
                    <Lock className="w-5 h-5 text-white/30" />
                    <span className="text-white/30 text-lg">Register to View</span>
                  </div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl">
                  <p className="text-white/50 text-sm mb-2">On Handover</p>
                  <div className="flex items-center justify-center gap-2">
                    <Lock className="w-5 h-5 text-white/30" />
                    <span className="text-white/30 text-lg">Register to View</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {paymentFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C4A35A]/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-[#C4A35A]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-white/50 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button onClick={handleRevealPlan} size="lg" className="group">
                  Reveal Full Payment Plan
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-white/40 text-sm mt-4">
                  Includes detailed breakdown & payment schedule
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Payment Plan"
        modalName="payment_plan_modal"
      >
        <p className="text-gray-600 mb-6">
          Register to receive the detailed payment plan PDF along with unit
          availability and floor plans.
        </p>
        <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
