import { styled } from '../../styles/stitches';

export const Controls = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  i: {
    cursor: 'pointer',
    color: '$secondaryFill',
    transition: '$fast',

    '&:hover': {
      color: '$primaryFill',
    },
  },
});

export const Main = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',

  i: {
    fontSize: 48,
  },

  '&:focus': {
    outline: 0,
    i: {
      color: '$primaryFill',
    },
  },
});

export const Secondary = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  margin: '$space$3',

  i: {
    fontSize: 24,
  },

  '&:focus': {
    outline: 0,
    i: {
      color: '$primaryFill',
    },
  },
});

export const Scrub = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: 'calc(100vw - $space$3 - $space$3)',
  margin: '0 auto',

  '@bp1': {
    maxWidth: 'calc(100vw - $space$1 - $space$1)',
  },
});
