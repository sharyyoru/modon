'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="flex items-center gap-3">
            <Image
              src="/images/modon-logo.webp"
              alt="Modon"
              width={100}
              height={33}
              className="h-8 md:h-10 w-auto"
              priority
            />
            <span className="text-white/30">|</span>
            <span className="text-white/60 text-sm font-medium">Dre Homes</span>
          </div>
        </div>
      </div>
    </header>
  );
}
