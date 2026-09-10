'use client';

import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  quickLinks: [
    { label: 'Villas', href: '#units' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
    { label: 'Register', href: '#register' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
  ],
};

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Image
              src="/images/modon-logo.webp"
              alt="Modon"
              width={140}
              height={46}
              className="h-12 w-auto mb-6"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-6">
              Modon Avenew offers exclusive luxury villas and townhouses in Abu Dhabi. 
              Experience refined living with 5% downpayment and up to 75% ADIB financing.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#C4A35A]" />
              </div>
              <span className="text-white/60 text-sm">Abu Dhabi, UAE</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#C4A35A]" />
              </div>
              <span className="text-white/60 text-sm">+971 2 XXX XXXX</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                <Mail className="w-4 h-4 text-[#C4A35A]" />
              </div>
              <span className="text-white/60 text-sm">info@modon-avenew.com</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-[#C4A35A] text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#C4A35A] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">In Partnership With</h4>
              <p className="text-[#C4A35A] font-semibold">ADIB</p>
              <p className="text-white/40 text-xs">Abu Dhabi Islamic Bank</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Modon Properties. All rights reserved.
            </p>
            <p className="text-white/40 text-xs">
              Prices and availability subject to change without notice. Images are for illustration purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
