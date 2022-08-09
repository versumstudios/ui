import { keyframes, styled } from '../../styles/stitches';

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const Root = styled('div', {});

export const Trigger = styled('button', {
  all: 'unset',
  backgroundColor: 'transparent',
  padding: '0 $space$4',
  height: 40,
  flex: 1,
  fontSize: 14,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$secondaryFill',
  cursor: 'pointer',
  '&[data-state="closed"]': { backgroundColor: 'transparent' },
  '&[data-state="open"]': { backgroundColor: '$secondaryBackground', color: '$primaryFill' },
  '&:hover': { backgroundColor: '$secondaryBackground', color: '$primaryFill' },
});

export const Item = styled('div', {
  overflow: 'hidden',
});

export const Header = styled('h3', {
  all: 'unset',
  display: 'flex',
});

export const Content = styled('div', {
  overflow: 'hidden',
  color: '$primaryFill',
  padding: '$space$4',

  '&[data-state="open"]': {
    animation: `${slideDown} 200ms linear`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 200ms linear`,
  },
});

export const Chevron = styled('div', {
  width: 20,
  height: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 200ms',

  i: {
    color: '$secondaryFill',
  },

  '[data-state=open] &': { transform: 'rotate(180deg)' },
});
