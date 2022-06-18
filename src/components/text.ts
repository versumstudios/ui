import { styled } from '../styles/stitches';

export const Text = styled('p', {
  color: '$primaryFill',

  variants: {
    unset: {
      true: {
        margin: 'unset',
      },
    },

    ellipsis: {
      true: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    },
  },
});
