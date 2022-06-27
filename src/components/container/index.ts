import { styled } from '../../styles/stitches';

export const Container = styled('div', {
  padding: '0 $space$3',

  '@bp1': {
    padding: '0 $space$2',
  },

  '@bp2': {
    padding: '0 $space$1',
  },

  variants: {
    centred: {
      true: {
        '@bp2': {
          maxWidth: 1440,
          margin: '0 auto',
        },
      },
    },

    debug: {
      true: {
        border: '1px dashed red',

        '@bp1': {
          border: '1px dashed green',
        },

        '@bp2': {
          border: '1px dashed blue',
        },
      },
    },
  },
});
