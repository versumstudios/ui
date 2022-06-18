import { keyframes, styled } from '../../styles/stitches';

const fadeInSlide = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, calc(-50% + 20px))' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%)' },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

// const scaleIn = keyframes({
//   from: { transform: 'scale(0.9)' },
//   to: { transform: 'scale(1)' },
// });

export const Overlay = styled('div', {
  backgroundColor: 'hsl(0 0% 0% / 0.5439)',
  position: 'fixed',
  top: 0,
  inset: 0,
  zIndex: 2000,
  pointerEvents: 'all',

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${fadeIn} 200ms ease-out`,
  },

  variants: {
    opaque: {
      true: {
        backgroundColor: 'hsl(0 0% 0% / 1)',
      },
    },
  },
});

export const Header = styled('div', {
  marginBottom: '$space$4',
});

export const Close = styled('div', {
  position: 'absolute',
  top: 16,
  right: 16,
  cursor: 'pointer',
  background: 'transparent',
  border: 0,

  i: {
    color: '$secondaryFill',
  },

  '&:hover': {
    i: {
      color: '$primaryFill',
    },
  },

  '&:focus': {
    outline: 0,
    i: {
      color: '$primaryFill',
    },
  },
});

export const Title = styled('h6', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  color: '$primaryFill',
  width: 'calc(100% - 24px)',
  height: 24,
  margin: 0,
});

export const Description = styled('p', {
  color: '$secondaryFill',
  margin: '$space$5 0 0 0',
  fontSize: 14,
  width: 'calc(100% - 24px)',
});

export const Content = styled('div', {
  backgroundColor: '$primaryBackground',
  border: '1px solid $colors$primaryBorder',
  borderRadius: 5,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 450,
  // maxHeight: '85vh',
  padding: '$space$3',

  '&:focus': { outline: 'none' },

  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${fadeInSlide} 200ms ease-out`,
    willChange: 'transform',

    '&[data-state="closed"]': {
      animation: `${fadeOut} 100ms ease-out`,
    },
  },

  variants: {
    fill: {
      true: {
        padding: 'unset',
      },
    },

    large: {
      true: {
        maxWidth: 720,
        maxHeight: 'unset',
      },
    },
  },
});

export const Buttons = styled('div', {
  '& > *': {
    marginTop: '$space$4',
  },
});
