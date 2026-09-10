'use client';

import { Home, Percent, Building2, MapPin } from 'lucide-react';
import { useSectionTracking } from '@/hooks/useTracking';

const values = [
  {
    icon: Home,
    label: 'Luxury Villas',
    value: '4-6 Beds',
  },
  {
    icon: Percent,
    label: 'Downpayment',
    value: '5%',
  },
  {
    icon: Building2,
    label: 'ADIB Financing',
    value: 'Up to 75%',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Abu Dhabi',
  },
];

export function ValueBar() {
  const trackRef = useSectionTracking('value_bar');

  return (
    <section ref={trackRef} className="bg-[#1B365D] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {values.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-[#C4A35A]" />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-wider">{item.label}</p>
                <p className="text-white text-lg font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
