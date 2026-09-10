'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { trackCTAClick } from '@/lib/tracking';

const WHATSAPP_NUMBER = '971585417606';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'm interested in Modon Wadeem");

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackCTAClick('header_whatsapp', 'header');
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      '_blank'
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <Image
              src="/images/modon-logo.webp"
              alt="Modon"
              width={100}
              height={33}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </a>

          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-medium rounded-full transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp Us</span>
          </button>
        </div>
      </div>
    </header>
  );
}
