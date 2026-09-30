import React from 'react';
import { ASSETS } from '../data';

/** Local brand artwork, shared by the site's navigation and footer. */
export const BrandMark: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <img
      alt="Carolina Barcellona"
      className={className ?? 'h-10 w-auto'}
      src={ASSETS.logo}
    />
  );
};
