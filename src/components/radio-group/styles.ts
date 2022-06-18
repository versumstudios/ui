import { styled } from '../../styles/stitches';

export const Container = styled('span', {
  display: 'flex',
  marginBottom: '$space$3',
});

export const Root = styled('div', {
  display: 'flex',
  backgroundColor: '$secondaryBackground',
  borderRadius: 5,
  padding: 2,
});

export const Item = styled('div', {
  all: 'unset',
  borderRadius: 5,
  padding: '$space$5 $space$2',
  backgroundColor: '$secondaryBackground',
  color: '$secondaryFill',
  fontSize: 13,
  fontWeight: '700',
  cursor: 'pointer',

  '&:focus': { outline: 0 },

  '&:hover': { color: '$primaryFill' },

  '&[data-state="checked"]': {
    backgroundColor: '$primaryBackground',
    color: '$primaryFill',
  },
});
