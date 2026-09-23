import React, { useState } from 'react';
import { ASSETS } from '../data';

/**
 * Brand logo with local-first loading.
 *
 * Local-first logo: `public/assets/Logo-C_barcellona_bicolor_2.png`
 * (transparent, derived from client bicolor artwork).
 * Falls back to the remote white wordmark (which needs the
 * invert treatment on the cream header).
 */
export const BrandMark: React.FC<{ className?: string }> = ({ className }) => {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <img
        alt="Carolina Barcellona"
        className={className ?? 'h-10 w-auto mix-blend-luminosity invert'}
        src={ASSETS.logo}
      />
    );
  }

  return (
    <img
      alt="Carolina Barcellona"
      className={className ?? 'h-10 w-auto'}
      src={ASSETS.logoLocal}
      onError={() => setUseFallback(true)}
    />
  );
};
