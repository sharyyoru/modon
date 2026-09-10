'use client';

import { 
  Waves, 
  Dumbbell, 
  TreePine, 
  ShieldCheck, 
  Users, 
  Car,
  Building2,
  Sparkles
} from 'lucide-react';
import { useSectionTracking } from '@/hooks/useTracking';

const amenities = [
  {
    icon: Waves,
    title: 'Swimming Pool',
    description: 'Temperature-controlled pools for all ages.',
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art gym with personal trainers.',
  },
  {
    icon: TreePine,
    title: 'Landscaped Gardens',
    description: 'Beautifully manicured green spaces.',
  },
  {
    icon: ShieldCheck,
    title: '24/7 Security',
    description: 'Round-the-clock security and surveillance.',
  },
  {
    icon: Users,
    title: 'Community Center',
    description: 'Spaces for gatherings and events.',
  },
  {
    icon: Car,
    title: 'Covered Parking',
    description: 'Dedicated parking for residents.',
  },
  {
    icon: Building2,
    title: 'Retail Spaces',
    description: 'Convenient shops and cafes nearby.',
  },
  {
    icon: Sparkles,
    title: 'Kids Play Areas',
    description: 'Safe and engaging spaces for children.',
  },
];

export function Amenities() {
  const trackRef = useSectionTracking('amenities');

  return (
    <section id="amenities" ref={trackRef} className="py-24 lg:py-32 bg-[#141414]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Amenities
          </p>
          <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
            Lifestyle <span className="font-semibold">Redefined</span>
          </h2>
          <p className="text-white/60 text-lg">
            Experience a complete lifestyle with world-class amenities designed 
            for comfort, wellness, and community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="group p-6 bg-[#0a0a0a] rounded-2xl border border-white/10 hover:border-[#C4A35A]/30 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-[#C4A35A]/10 flex items-center justify-center mb-5 group-hover:bg-[#C4A35A]/20 transition-colors">
                <amenity.icon className="w-7 h-7 text-[#C4A35A]" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">{amenity.title}</h3>
              <p className="text-white/50 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
