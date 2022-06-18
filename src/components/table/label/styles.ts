import { styled } from '../../../styles/stitches';

export const Container = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  p: {
    fontSize: 13,
    textAlign: 'left',
    fontWeight: 700,
    margin: 0,
    color: '$secondaryFill',
  },

  i: {
    width: 18,
    height: 18,
    fontSize: 16,
    color: '$secondaryFill',
    marginLeft: '$space$5',
  },

  '&:focus': {
    outline: 'none',
    p: {
      color: '$primaryFill',
    },
    i: {
      color: '$primaryFill',
    },
  },

  '&:hover': {
    p: {
      color: '$primaryFill',
    },
    i: {
      color: '$primaryFill',
    },
  },
});
