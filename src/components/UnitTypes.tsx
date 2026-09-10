'use client';

import { useState } from 'react';
import { BedDouble, Bath, Maximize, Lock } from 'lucide-react';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { useSectionTracking } from '@/hooks/useTracking';
import { trackCTAClick } from '@/lib/tracking';

const units = [
  {
    type: '4-Bedroom Villa',
    bedrooms: 4,
    bathrooms: 5,
    description: 'Spacious family living with premium finishes and private garden.',
    featured: false,
  },
  {
    type: '5-Bedroom Villa',
    bedrooms: 5,
    bathrooms: 6,
    description: 'Expansive luxury villa with dedicated entertainment spaces.',
    featured: true,
  },
  {
    type: '6-Bedroom Villa',
    bedrooms: 6,
    bathrooms: 7,
    description: 'The ultimate in luxury living with unparalleled space and privacy.',
    featured: true,
  },
  {
    type: 'Townhouse',
    bedrooms: 4,
    bathrooms: 5,
    description: 'Modern townhouse living with community amenities.',
    featured: false,
  },
];

export function UnitTypes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trackRef = useSectionTracking('units');

  const handleUnlockPricing = () => {
    trackCTAClick('unlock_pricing', 'units');
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="units" ref={trackRef} className="py-24 lg:py-32 bg-[#141414]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Residences
            </p>
            <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
              Choose Your <span className="font-semibold">Dream Home</span>
            </h2>
            <p className="text-white/60 text-lg">
              From elegant townhouses to expansive 6-bedroom villas, Modon Wadeem 
              offers a range of residences designed for discerning families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {units.map((unit, index) => (
              <div
                key={index}
                className={`relative bg-[#0a0a0a] rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-[#C4A35A]/30 transition-all duration-300 group ${
                  unit.featured ? 'ring-2 ring-[#C4A35A]' : ''
                }`}
              >
                {unit.featured && (
                  <span className="absolute -top-3 left-6 bg-[#C4A35A] text-black text-xs font-semibold px-4 py-1 rounded-full">
                    Premium
                  </span>
                )}
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {unit.type}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-4 h-4 text-[#C4A35A]" />
                  <span className="text-[#C4A35A] text-sm font-medium">
                    Register to View Pricing
                  </span>
                </div>
                <p className="text-white/50 text-sm mb-6">{unit.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-white/60">
                    <BedDouble className="w-4 h-4 text-[#C4A35A]" />
                    <span>{unit.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Bath className="w-4 h-4 text-[#C4A35A]" />
                    <span>{unit.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Maximize className="w-4 h-4 text-[#C4A35A]" />
                    <span>View Size</span>
                  </div>
                </div>
                <Button
                  onClick={handleUnlockPricing}
                  variant="secondary"
                  className="w-full bg-white/5 hover:bg-white/10 text-white font-medium"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Unlock Full Details
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-white/50 mb-6">
              Register to receive detailed floor plans, pricing, and availability.
            </p>
            <Button
              onClick={handleUnlockPricing}
              size="lg"
            >
              Get Exclusive Pricing
            </Button>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Unlock Exclusive Pricing"
        modalName="pricing_modal"
      >
        <p className="text-gray-600 mb-6">
          Register your interest to receive detailed pricing, floor plans, and
          exclusive access to unit selection.
        </p>
        <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
