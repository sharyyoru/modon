'use client';

import { MessageCircle } from 'lucide-react';
import { trackCTAClick } from '@/lib/tracking';

const WHATSAPP_NUMBER = '971585417606';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I'm interested in Modon Wadeem plots");

export function WhatsAppWidget() {
  const handleClick = () => {
    trackCTAClick('whatsapp_widget', 'floating');
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">WhatsApp Us</span>
      
      {/* Pulse animation */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-[#25D366]"></span>
      </span>
    </button>
  );
}
