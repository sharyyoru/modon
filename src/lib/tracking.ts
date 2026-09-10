import { v4 as uuidv4 } from 'uuid';

let sessionId: string | null = null;

function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  
  if (!sessionId) {
    sessionId = sessionStorage.getItem('modon_session_id');
    if (!sessionId) {
      sessionId = uuidv4();
      sessionStorage.setItem('modon_session_id', sessionId);
    }
  }
  return sessionId;
}

export function trackEvent(eventType: string, eventData: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  
  const event = {
    session_id: getSessionId(),
    event_type: eventType,
    event_data: eventData,
    page_url: window.location.href,
    referrer: document.referrer,
    timestamp: new Date().toISOString(),
  };
  
  console.log('Track event:', event);
}

export function trackCTAClick(ctaName: string, section: string) {
  trackEvent('cta_click', { cta_name: ctaName, section });
}

export function trackSectionView(sectionName: string) {
  trackEvent('section_view', { section_name: sectionName });
}

export function trackFormStart() {
  trackEvent('form_start', {});
}

export function trackFormSubmit(success: boolean) {
  trackEvent('form_submit', { success });
}

export function trackVideoPlay(videoName: string) {
  trackEvent('video_play', { video_name: videoName });
}

export function trackModalOpen(modalName: string) {
  trackEvent('modal_open', { modal_name: modalName });
}

export function trackModalClose(modalName: string) {
  trackEvent('modal_close', { modal_name: modalName });
}

export function trackLinkedInConversion() {
  if (typeof window === 'undefined') return;
  
  // Fire LinkedIn conversion event
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lintrk = (window as any).lintrk;
  if (lintrk) {
    lintrk('track', { conversion_id: 'LINKEDIN_CONVERSION_ID' }); // Replace with actual conversion ID
  }
  
  trackEvent('linkedin_conversion', {});
}
