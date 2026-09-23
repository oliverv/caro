import React, { useState } from 'react';
import { ASSETS } from '../data';

/**
 * Brand logo with local-first loading.
 *
 * Drop the client file at `public/assets/Logo-C_barcellona_bicolor_2.jpg`
 * (exact name from the handoff) and it is used automatically.
 * Until then, falls back to the remote wordmark (which needs the
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
