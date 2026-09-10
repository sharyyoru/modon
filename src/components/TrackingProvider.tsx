'use client';

import { ReactNode } from 'react';

interface TrackingProviderProps {
  children: ReactNode;
}

export function TrackingProvider({ children }: TrackingProviderProps) {
  return <>{children}</>;
}
