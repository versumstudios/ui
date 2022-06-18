import { styled } from '../../styles/stitches';

export const Container = styled('div', {
  borderRadius: 5,
  width: '100%',
  border: '1px solid $colors$primaryBorder',
  display: 'flex',

  '&:hover': {
    border: '1px solid $colors$secondaryBorder',
  },

  '&:focus-within': {
    border: '1px solid $colors$primaryFill',
  },

  variants: {
    small: {
      true: {
        flex: 'none',
        width: 80,
      },
    },
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
  },
});

export const Label = styled('label', {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '$primaryBackground',
  color: '$secondaryFill',
  paddingLeft: '$space$4',
  paddingRight: '$space$5',
  opacity: 0.5,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
});

export const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 'none',
  color: '$primaryFill',
  width: '100%',
  height: 40,
  padding: 8,

  '&::placeholder': {
    color: '$secondaryFill',
  },

  '&::-webkit-calendar-picker-indicator': {
    display: 'none',
  },

  '&:focus': {
    outline: 0,
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
