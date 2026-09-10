'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';
import { HeroForm } from './HeroForm';
import { useVideoTracking } from '@/hooks/useVideoTracking';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  useVideoTracking(videoRef);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        {/* Mobile: Static Image (faster load) */}
        <Image
          src="/images/hero-bg.jpg"
          alt="Modon Wadeem"
          fill
          priority
          className="md:hidden object-cover opacity-30"
        />
        {/* Desktop: Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Headline & Value Props */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-[#C4A35A] rounded-full animate-pulse" />
              <span className="text-white/70 text-sm tracking-wide">Hudayriyat Island, Abu Dhabi</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-tight leading-[1.1] mb-4 animate-fade-in-up">
              Modon
              <br />
              <span className="font-semibold text-[#C4A35A]">Wadeem</span>
            </h1>

            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              Luxury villas & townhouses with exclusive ADIB financing
            </p>

            {/* Value Props - Prominent */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mb-6 animate-fade-in-up animation-delay-300">
              <div className="text-center lg:text-left">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Downpayment</p>
                <p className="text-4xl md:text-5xl font-bold text-white">5%</p>
              </div>
              <div className="w-px h-14 bg-white/20" />
              <div className="text-center lg:text-left">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">ADIB Financing</p>
                <p className="text-4xl md:text-5xl font-bold text-[#C4A35A]">75%</p>
              </div>
            </div>

            <p className="text-white/50 text-sm animate-fade-in-up animation-delay-400">
              4, 5 & 6 bedroom villas · Townhouses available
            </p>
          </div>

          {/* Right: Inline Form */}
          <div className="animate-fade-in-up animation-delay-300 lg:animation-delay-200">
            <HeroForm />
          </div>
        </div>
      </div>

      {/* Video controls - desktop only */}
      <button
        onClick={toggleVideo}
        className="hidden md:flex absolute bottom-8 left-8 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
