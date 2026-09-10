'use client';

import { useState } from 'react';
import { ArrowRight, Shield, Leaf, Award } from 'lucide-react';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { useSectionTracking } from '@/hooks/useTracking';
import { trackCTAClick } from '@/lib/tracking';

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Built to the highest standards with premium materials and finishes.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Design',
    description: 'Eco-friendly construction with energy-efficient features.',
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Developed by Modon, a leader in Abu Dhabi real estate.',
  },
];

export function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trackRef = useSectionTracking('about');

  const handleRegisterClick = () => {
    trackCTAClick('about_register', 'about');
    setIsModalOpen(true);
  };

  return (
    <>
      <section ref={trackRef} className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Introducing Wadeem
              </p>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-6 leading-tight">
                A New Standard of <span className="font-semibold">Luxury Living</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Modon Wadeem represents a new chapter in Abu Dhabi&apos;s residential landscape. 
                Featuring meticulously designed villas and townhouses, this exclusive community 
                offers the perfect blend of privacy, luxury, and modern convenience.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                With 5% downpayment and up to 75% financing through ADIB, owning your dream home 
                has never been more accessible.
              </p>
              <Button onClick={handleRegisterClick} size="lg" className="group">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-5 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#C4A35A]/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#C4A35A]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-[#C4A35A]" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/50 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get More Information"
        modalName="about_registration"
      >
        <p className="text-gray-600 mb-6">
          Register to receive detailed information about Modon Wadeem, including brochures and floor plans.
        </p>
        <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
