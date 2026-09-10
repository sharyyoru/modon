'use client';

import { useRef, useState } from 'react';
import { ArrowRight, Play, Pause } from 'lucide-react';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { useVideoTracking } from '@/hooks/useVideoTracking';
import { trackCTAClick } from '@/lib/tracking';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  useVideoTracking(videoRef);

  const handleRegisterClick = () => {
    trackCTAClick('hero_register', 'hero');
    setIsModalOpen(true);
  };

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
    <>
      <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/80" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-[#C4A35A] rounded-full animate-pulse" />
              <span className="text-white/70 text-sm tracking-wide">Abu Dhabi, UAE</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
              Modon
              <br />
              <span className="font-semibold text-[#C4A35A]">Wadeem</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Exclusive 4, 5 & 6 bedroom luxury villas and townhouses in Abu Dhabi.
              A new chapter in refined living, designed for those who seek excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Downpayment</p>
                  <p className="text-3xl md:text-4xl font-semibold text-white">5%</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">ADIB Financing</p>
                  <p className="text-3xl md:text-4xl font-semibold text-[#C4A35A]">75%</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
              <Button
                onClick={handleRegisterClick}
                size="lg"
                className="w-full sm:w-auto group"
              >
                Register for Exclusive Pricing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleRegisterClick}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Reveal Payment Plan
              </Button>
            </div>
          </div>
        </div>

        <button
          onClick={toggleVideo}
          className="absolute bottom-8 right-8 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Exclusive Access"
        modalName="hero_registration"
      >
        <p className="text-gray-600 mb-6">
          Register now to receive exclusive pricing, floor plans, and priority unit selection at Modon Wadeem.
        </p>
        <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
