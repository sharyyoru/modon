'use client';

import { useState } from 'react';
import { MapPin, Clock, Building2, Plane, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { useSectionTracking } from '@/hooks/useTracking';
import { trackCTAClick } from '@/lib/tracking';

const nearbyLocations = [
  { icon: Building2, name: 'Abu Dhabi Mall', time: '15 min' },
  { icon: Plane, name: 'Abu Dhabi Airport', time: '25 min' },
  { icon: Building2, name: 'Corniche Beach', time: '20 min' },
  { icon: Building2, name: 'City Center', time: '10 min' },
];

export function Location() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trackRef = useSectionTracking('location');

  const handleScheduleVisit = () => {
    trackCTAClick('schedule_visit', 'location');
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="location" ref={trackRef} className="py-24 lg:py-32 bg-[#141414]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Prime Location
              </p>
              <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
                Heart of <span className="font-semibold">Abu Dhabi</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Strategically located in Abu Dhabi, Modon Wadeem offers unparalleled 
                connectivity to the city&apos;s key destinations while providing a 
                serene residential environment.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {nearbyLocations.map((location, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-xl border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#C4A35A]/10 flex items-center justify-center">
                      <location.icon className="w-5 h-5 text-[#C4A35A]" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{location.name}</p>
                      <p className="text-white/50 text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {location.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button onClick={handleScheduleVisit} size="lg" className="group">
                Schedule a Visit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10">
                <div className="w-full h-full flex items-center justify-center bg-[#1B365D]/20">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-[#C4A35A] mx-auto mb-4" />
                    <p className="text-white text-xl font-semibold mb-2">Modon Wadeem</p>
                    <p className="text-white/60">Abu Dhabi, UAE</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C4A35A]/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Schedule a Site Visit"
        modalName="visit_modal"
      >
        <p className="text-gray-600 mb-6">
          Register to schedule a private viewing of Modon Wadeem with our dedicated sales team.
        </p>
        <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
