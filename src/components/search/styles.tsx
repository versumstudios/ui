import { styled } from '../../styles/stitches';

export const Container = styled('div', {
  display: 'flex',
  borderRadius: 5,
  width: '100%',
  border: '1px solid $colors$primaryBorder',
  alignItems: 'center',

  '&:hover': {
    border: '1px solid $colors$secondaryBorder',
  },

  '&:focus-within': {
    border: '1px solid $colors$primaryFill',
  },

  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed',

        '&:hover': {
          border: '1px solid $colors$primaryBorder',
        },

        '&:focus-within': {
          border: '1px solid $colors$primaryBorder',
        },

        '&>*': {
          pointerEvents: 'none',
        },
      },
    },

    subtle: {
      true: {
        backgroundColor: '$secondaryBackground',
        border: '1px solid transparent',
      },
    },
  },
});

export const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  padding: '$space$4',
  paddingRight: 'unset',

  i: {
    color: '$secondaryFill',
  },
});

export const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 'none',
  color: '$primaryFill',
  width: '100%',
  padding: '$space$4',
  fontSize: 16,
  zIndex: 0,

  '&::placeholder': {
    color: '$secondaryFill',
  },

  '&:focus': {
    outline: 0,
  },

  '@bp1': {
    fontSize: 14,
  },

  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
        color: '$secondaryFill',
      },
    },
  },
});
