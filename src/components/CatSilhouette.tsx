import React from 'react';

export const CatPawIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {/* Main central pad */}
    <ellipse cx="12" cy="15.5" rx="5" ry="4" />
    {/* 4 toe pads */}
    <circle cx="6.5" cy="10" r="2.2" />
    <circle cx="10" cy="7" r="2.2" />
    <circle cx="14" cy="7" r="2.2" />
    <circle cx="17.5" cy="10" r="2.2" />
  </svg>
);

export const CatFaceIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Cat head with ears */}
    <path d="M4 11V6l4 2.5a11 11 0 0 1 8 0L20 6v5c0 4.5-3.5 8-8 8s-8-3.5-8-8z" />
    {/* Eyes */}
    <circle cx="9" cy="12" r="1" fill="currentColor" />
    <circle cx="15" cy="12" r="1" fill="currentColor" />
    {/* Nose/mouth */}
    <path d="M11.5 15.5c.3.2.7.2 1 0" />
  </svg>
);

export const CatLedgeSilhouette: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    {/* Resting cat sitting quietly on ledge with tail curled */}
    <path d="M35 75 C35 60, 42 50, 52 48 C50 42, 48 35, 52 28 C53 26, 56 20, 60 22 C63 24, 65 30, 67 31 C72 31, 78 35, 78 42 C78 48, 75 52, 73 55 C77 62, 78 70, 75 75 C70 78, 40 78, 35 75 Z" />
    {/* Left ear */}
    <path d="M52 28 L48 18 L57 24 Z" />
    {/* Right ear */}
    <path d="M64 24 L72 17 L69 28 Z" />
    {/* Tail curving down */}
    <path d="M35 74 C30 76, 26 82, 28 88 C30 92, 35 90, 36 86 C37 81, 40 76, 42 75 Z" />
  </svg>
);
