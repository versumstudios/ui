import { styled } from '../../styles/stitches';

export const Tag = styled('span', {
  display: 'inline-flex',
  backgroundColor: '$secondaryBackground',
  color: '$secondaryFill',
  padding: '$space$5 $space$4',
  borderRadius: 5,
  fontSize: 12,
  border: '1px solid $colors$primaryBorder',

  '&:focus-within': {
    border: '1px solid $colors$primaryFill',
  },
});
