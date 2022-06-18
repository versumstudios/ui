import { styled } from '../../styles/stitches';

export const Container = styled('div', {
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
    small: {
      true: {
        flex: 'none',
        width: 80,
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});

export const Textarea = styled('textarea', {
  backgroundColor: 'transparent',
  border: 'none',
  color: '$primaryFill',
  width: '100%',
  maxWidth: '100%',
  minHeight: 100,
  maxHeight: 150,
  padding: 8,
  whiteSpace: 'pre-wrap',
  resize: 'none', // 'vertical',

  '&::placeholder': {
    color: '$secondaryFill',
  },

  '&:focus': {
    outline: 0,
  },

  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
        color: '$secondaryFill',
        opacity: 0.3,
      },
    },
  },
});
