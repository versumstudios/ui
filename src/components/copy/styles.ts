import { styled } from '../../styles/stitches';

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

export const Button = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',

  '&:focus': {
    outline: 0,
    i: {
      color: '$primaryFill',
    },
  },

  '&:hover': {
    i: {
      color: '$primaryFill',
    },
  },
});

export const Icon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: 5,

  i: {
    fontSize: 14,
    color: '$secondaryFill',
  },
});
