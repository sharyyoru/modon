'use client';

import { useEffect, RefObject } from 'react';
import { trackVideoPlay } from '@/lib/tracking';

export function useVideoTracking(videoRef: RefObject<HTMLVideoElement | null>) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      trackVideoPlay('hero_video');
    };

    video.addEventListener('play', handlePlay);
    return () => video.removeEventListener('play', handlePlay);
  }, [videoRef]);
}
