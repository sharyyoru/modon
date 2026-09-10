'use client';

import { RegistrationForm } from './RegistrationForm';
import { useSectionTracking } from '@/hooks/useTracking';

export function RegisterSection() {
  const trackRef = useSectionTracking('register');

  return (
    <section id="register" ref={trackRef} className="py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1B365D]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Register Now
            </p>
            <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
              Secure Your <span className="font-semibold">Dream Home</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Be among the first to receive exclusive pricing, floor plans, and priority 
              unit selection at Modon Avenew.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl">
            <RegistrationForm />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-[#C4A35A] text-2xl font-bold">5%</p>
              <p className="text-white/50 text-sm">Downpayment</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div>
              <p className="text-[#C4A35A] text-2xl font-bold">75%</p>
              <p className="text-white/50 text-sm">ADIB Financing</p>
            </div>
            <div className="w-px h-12 bg-white/20 hidden sm:block" />
            <div>
              <p className="text-[#C4A35A] text-2xl font-bold">4-6</p>
              <p className="text-white/50 text-sm">Bedroom Villas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
