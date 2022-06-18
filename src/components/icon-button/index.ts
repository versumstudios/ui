import { styled } from '../../styles/stitches';

export const IconButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderRadius: 9999,
  border: '1px solid $colors$primaryBorder',
  padding: 4,
  cursor: 'pointer',

  i: {
    color: '$secondaryFill',
    fontSize: 14,
  },

  '&:focus': {
    outline: 0,
    border: '1px solid $colors$primaryFill',
  },

  '&:hover': {
    border: '1px solid $colors$secondaryBorder',
  },
});
