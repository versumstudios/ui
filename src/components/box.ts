import { styled } from '../styles/stitches';

export const Box = styled('div', {
  display: 'flex',

  variants: {
    vertical: {
      true: {
        alignItems: 'center',
      },
    },
    horizontal: {
      true: {
        justifyContent: 'center',
      },
    },
    mobile: {
      true: {
        '@bp2': {
          display: 'none',
        },
      },
    },
    tablet: {
      true: {
        display: 'none',
        width: '100%',

        '@bp1': {
          display: 'block',
        },
      },
    },
    desktop: {
      true: {
        display: 'none',
        width: '100%',

        '@bp2': {
          display: 'block',
        },
      },
    },
  },
});
