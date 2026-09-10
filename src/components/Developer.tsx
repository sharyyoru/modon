'use client';

import Image from 'next/image';
import { Award, Building, Users, Globe } from 'lucide-react';
import { useSectionTracking } from '@/hooks/useTracking';

const stats = [
  { icon: Building, value: '20+', label: 'Projects Delivered' },
  { icon: Users, value: '50,000+', label: 'Happy Residents' },
  { icon: Globe, value: '15+', label: 'Years Experience' },
  { icon: Award, value: '30+', label: 'Awards Won' },
];

export function Developer() {
  const trackRef = useSectionTracking('developer');

  return (
    <section ref={trackRef} className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              The Developer
            </p>
            <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
              Built by <span className="font-semibold">Modon</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Modon Properties is a leading real estate developer in Abu Dhabi, 
              committed to creating sustainable and innovative communities that 
              enhance the quality of life for residents.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              With a portfolio spanning residential, commercial, and mixed-use 
              developments, Modon has established itself as a trusted name in 
              UAE real estate.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <stat.icon className="w-6 h-6 text-[#C4A35A] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/50 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D] to-[#0f1f38] rounded-3xl" />
              <div className="absolute inset-4 bg-[#0a0a0a] rounded-2xl flex items-center justify-center">
                <Image
                  src="/images/modon-logo.webp"
                  alt="Modon Properties"
                  width={180}
                  height={60}
                  className="w-auto h-auto max-w-[80%]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#C4A35A]/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#1B365D]/30 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
