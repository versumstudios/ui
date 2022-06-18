import { styled } from '../../styles/stitches';

const I = styled('i', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: 14,
  color: '$secondaryFill',
});

export const Icon = styled(I, {
  left: 8,
});

export const Arrow = styled(I, {
  right: 8,
});

export const Container = styled('div', {
  position: 'relative',
  borderRadius: 5,
  width: '100%',
  border: '1px solid $colors$primaryBorder',

  '&:hover': {
    border: '1px solid $colors$secondaryBorder',
  },

  '&:focus-within': {
    border: '1px solid $colors$primaryFill',
  },
  variants: {
    variant: {
      basic: {
        border: 'none',

        '&:hover': {
          border: 'none',
        },

        '&:focus-within': {
          border: 'none',
        },

        [`& ${Icon}`]: {
          display: 'none',
        },

        [`& ${Arrow}`]: {
          display: 'none',
        },
      },
      market: {},
    },
  },
});

export const Select = styled('select', {
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  appearance: 'none',
  color: '$secondaryFill',
  fontFamily: '$DMSans',
  fontSize: 16,
  textRendering: 'auto',
  width: '100%',
  height: 40,
  paddingLeft: 8,
  paddingRight: 28,
  cursor: 'pointer',

  variants: {
    hasIcon: {
      true: {
        paddingLeft: 28,
      },
    },

    variant: {
      basic: {
        paddingRight: 8,
        '&:hover': {
          color: '$primaryFill',
        },
        '&:focus-within': {
          color: '$primaryFill',
        },
      },
      market: {
        fontSize: 16,
        height: 32,

        '@bp1': {
          fontSize: 14,
        },
      },
    },
  },
});
