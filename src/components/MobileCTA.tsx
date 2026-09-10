'use client';

import { useState, useEffect } from 'react';
import { X, ArrowRight, Gift, Clock, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { RegistrationForm } from './RegistrationForm';
import { trackCTAClick } from '@/lib/tracking';

export function MobileCTA() {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('modon_popup_shown');
    if (popupShown) {
      setPopupDismissed(true);
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setShowStickyBar(scrollTop > 100);
    };

    const popupTimer = setTimeout(() => {
      const popupShown = sessionStorage.getItem('modon_popup_shown');
      if (!popupShown && !popupDismissed && scrollProgress > 15) {
        setShowPopup(true);
        sessionStorage.setItem('modon_popup_shown', 'true');
      }
    }, 10000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(popupTimer);
    };
  }, [popupDismissed, scrollProgress]);

  useEffect(() => {
    if (scrollProgress > 40 && !popupDismissed && !showPopup) {
      const popupShown = sessionStorage.getItem('modon_popup_shown');
      if (!popupShown) {
        setShowPopup(true);
        sessionStorage.setItem('modon_popup_shown', 'true');
      }
    }
  }, [scrollProgress, popupDismissed, showPopup]);

  const handleRegisterClick = (source: string) => {
    trackCTAClick(`mobile_${source}`, 'mobile_cta');
    setIsModalOpen(true);
    setShowPopup(false);
  };

  const dismissPopup = () => {
    setShowPopup(false);
    setPopupDismissed(true);
  };

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-all duration-300 ${
          showStickyBar ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="h-1 bg-white/10">
          <div
            className="h-full bg-[#C4A35A] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="bg-[#0a0a0a]/98 backdrop-blur-lg border-t border-white/10 px-4 py-3 safe-area-bottom">
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm truncate">Modon Wadeem</p>
              <p className="text-[#C4A35A] text-xs">5% Down • 75% ADIB Financing</p>
            </div>
            <Button
              onClick={() => handleRegisterClick('sticky_bar')}
              size="sm"
              className="whitespace-nowrap"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={dismissPopup}
          />

          <div className="relative w-full max-w-lg bg-[#0a0a0a] rounded-t-3xl p-6 pb-8 animate-slide-up safe-area-bottom">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full" />

            <button
              onClick={dismissPopup}
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mt-4">
              <div className="inline-flex items-center gap-2 bg-[#C4A35A]/20 text-[#C4A35A] px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                <Gift className="w-4 h-4" />
                Exclusive Offer
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2">
                Get Priority Access
              </h3>
              <p className="text-white/60 mb-6">
                Register now for exclusive pricing, floor plans & priority unit selection at Modon Wadeem.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-[#C4A35A] text-lg font-bold">5%</p>
                  <p className="text-white/50 text-xs">Downpayment</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-[#C4A35A] text-lg font-bold">75%</p>
                  <p className="text-white/50 text-xs">ADIB Financing</p>
                </div>
              </div>

              <Button
                onClick={() => handleRegisterClick('popup')}
                size="lg"
                className="w-full"
              >
                Register Your Interest
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-center text-white/40 text-xs mt-4 flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" />
                Limited units available • High demand
              </p>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => handleRegisterClick('fab')}
        className={`fixed right-4 z-40 lg:hidden w-14 h-14 rounded-full bg-[#C4A35A] shadow-lg shadow-[#C4A35A]/30 flex items-center justify-center transition-all duration-300 ${
          showStickyBar ? 'bottom-20' : 'bottom-6'
        } ${showStickyBar ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        aria-label="Register Interest"
      >
        <Phone className="w-6 h-6 text-black" />
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Register Your Interest"
        modalName="mobile_registration"
      >
        <p className="text-gray-600 mb-6">
          Be among the first to access exclusive pricing and unit selection at Modon Wadeem.
        </p>
        <RegistrationForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
}
