import { createStitches } from '@stitches/react';

export const ForAudioScrub = {
  primaryFill: '#ffffff',
  primaryBorder: 'rgba(255, 255, 255, 0.1)',
};

export const DarkTheme = {
  // background
  $colors$primaryBackground: '#101010', // '#131415',
  $colors$secondaryBackground: '#181818', // '#1c1d1f',

  // fill
  $colors$primaryFill: '#ffffff',
  $colors$secondaryFill: '#8c8c8d',

  // other
  $colors$primaryHighlight: '#0971f1',
  $colors$secondaryHighlight: '#227ff2',
  $colors$primaryBorder: '#282828', // original 'rgba(255, 255, 255, 0.1)',
  $colors$secondaryBorder: '#404040', // original 'rgba(255, 255, 255, 0.2)',
  $colors$primaryError: '#f9153e',
  $colors$secondaryError: '#190206',
};

export const LightTheme = {
  // background
  $colors$primaryBackground: '#ffffff',
  $colors$secondaryBackground: '#f7f7f7',

  // fill
  $colors$primaryFill: '#000000',
  $colors$secondaryFill: 'rgba(0, 0, 0, 0.6)',

  // other
  $colors$primaryHighlight: '#0971f1',
  $colors$secondaryHighlight: '#227ff2',
  $colors$primaryBorder: '#e5e5e5', // original 'rgba(0, 0, 0, 0.1)',
  $colors$secondaryBorder: '#cccccc', // 'rgba(0, 0, 0, 0.2)',
  $colors$primaryError: '#f9153e',
  $colors$secondaryError: '#190206',
};

export const { theme, styled, getCssText, css, keyframes, globalCss } = createStitches({
  theme: {
    fonts: { DMSans: 'DM Sans, sans-serif', mono: 'DM Mono, monospace' },
    space: {
      0: '128px',
      1: '64px',
      2: '32px',
      3: '16px',
      4: '8px',
      5: '4px',
    },
    transitions: {
      fast: 'all 0.1s ease-in-out',
      medium: 'all 0.2s ease-in-out',
      slow: 'all 0.5s ease-in-out',
    },
    colors: {
      green: '#4ec74e',
      yellow: '#FFB200',
      red: '#F9153E',
      ...ForAudioScrub,
    },
  },
  media: {
    bp1: '(min-width: 640px)', // desktop
    bp2: '(min-width: 1440px)', // large
  },
});
