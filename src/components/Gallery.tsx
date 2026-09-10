'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { useSectionTracking } from '@/hooks/useTracking';
import { trackCTAClick } from '@/lib/tracking';

const galleryImages = [
  {
    src: '/images/hero-bg.jpg',
    alt: 'Modon Wadeem Exterior',
    category: 'Exterior',
  },
  {
    src: '/images/hero-bg.jpg',
    alt: 'Modon Wadeem Living Space',
    category: 'Interior',
  },
  {
    src: '/images/hero-bg.jpg',
    alt: 'Modon Wadeem Bedroom',
    category: 'Interior',
  },
  {
    src: '/images/hero-bg.jpg',
    alt: 'Modon Wadeem Community',
    category: 'Community',
  },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const trackRef = useSectionTracking('gallery');

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleViewAll = () => {
    trackCTAClick('gallery_view_all', 'gallery');
    setIsModalOpen(true);
  };

  return (
    <>
      <section ref={trackRef} className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#C4A35A] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Gallery
            </p>
            <h2 className="text-4xl md:text-5xl text-white font-light mb-6">
              A Glimpse of <span className="font-semibold">Excellence</span>
            </h2>
            <p className="text-white/60 text-lg">
              Explore the exceptional design and craftsmanship that defines Modon Wadeem.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-[16/9] relative rounded-2xl overflow-hidden">
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              
              <div className="absolute bottom-6 left-6">
                <span className="bg-[#C4A35A] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {galleryImages[currentIndex].category}
                </span>
              </div>
            </div>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#C4A35A] w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button onClick={handleViewAll} variant="outline" size="lg">
              <Lock className="w-4 h-4 mr-2" />
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Access Full Gallery"
        modalName="gallery_modal"
      >
        <p className="text-gray-600 mb-6">
          Register to view the complete gallery including interior designs, floor plans, and community renders.
        </p>
        <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
