'use client';

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { trackCTAClick } from '@/lib/tracking';

const WHATSAPP_NUMBER = '971585417606';

export function Footer() {
  const handleWhatsAppClick = () => {
    trackCTAClick('footer_whatsapp', 'footer');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Image
              src="/images/modon-logo.webp"
              alt="Modon"
              width={100}
              height={33}
              className="h-8 w-auto"
            />
            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div className="hidden md:block">
              <p className="text-[#C4A35A] text-sm font-medium">ADIB Financing Partner</p>
            </div>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-medium rounded-full transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp: +971 58 541 7606
          </button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Modon Properties. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="/privacy-policy" className="text-white/40 hover:text-white/60 text-xs transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-use" className="text-white/40 hover:text-white/60 text-xs transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
