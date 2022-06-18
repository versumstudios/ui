import { styled } from '../../styles/stitches';

export const Button = styled('button', {
  appearance: 'none',
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  lineHeight: 1.2,
  color: '$primaryFill',
  borderRadius: 5,
  padding: '$space$4 $space$3',
  fontFamily: '$DMSans',
  fontSize: 14,
  cursor: 'pointer',
  transition: '$fast',
  overflow: 'hidden',

  i: {
    color: 'inherit',
  },

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
    // opacity: 0.5,
    // pointerEvents: 'none',
  },

  variants: {
    full: {
      true: {
        width: '100%',
        height: 40,
        fontSize: 16,
        fontWeight: 700,
      },
    },

    round: {
      true: {
        borderRadius: 9999,
      },
    },

    small: {
      true: {
        padding: '$space$5',
      },
    },

    shrink: {
      true: {
        alignSelf: 'flex-start',
      },
    },

    variant: {
      primary: {
        fontWeight: 700,
        backgroundColor: '$primaryFill',
        color: '$primaryBackground',

        '&:hover ': {
          backgroundColor: 'transparent',
          border: '1px solid $colors$primaryFill',
          color: '$primaryFill',
        },

        '&:focus': {
          backgroundColor: 'transparent',
          border: '1px solid $colors$primaryFill',
          color: '$primaryFill',
        },

        '&:disabled': {
          backgroundColor: 'transparent',
          border: '1px solid $colors$primaryBorder',
          color: '$secondaryFill',
        },
      },

      secondary: {
        border: '1px solid $colors$primaryBorder',
        color: '$secondaryFill',

        '&:hover ': {
          border: '1px solid $colors$primaryFill',
          color: '$primaryFill',
        },

        '&:focus': {
          border: '1px solid $colors$primaryFill',
          color: '$primaryFill',
        },

        '&:disabled': {
          border: '1px solid $colors$primaryBorder',
          color: '$secondaryFill',
        },
      },

      highlight: {
        border: '1px solid $colors$primaryHighlight',
        color: '$primaryHighlight',

        '&:hover ': {
          backgroundColor: '$primaryHighlight',
          color: '$primaryFill',
        },

        '&:focus': {
          backgroundColor: '$primaryHighlight',
          color: '$primaryFill',
        },

        '&:disabled': {
          backgroundColor: '$primaryHighlight',
          color: '$primaryFill',
        },
      },

      warning: {
        border: '1px solid $colors$red',
        color: '$red',

        '&:hover ': {
          backgroundColor: '$red',
          color: '$primaryFill',
        },

        '&:focus': {
          backgroundColor: '$red',
          color: '$primaryFill',
        },

        '&:disabled': {
          backgroundColor: '$red',
          color: '$primaryFill',
        },
      },

      simple: {
        color: '$secondaryFill',

        '&:hover ': {
          color: '$primaryFill',
        },

        '&:focus': {
          color: '$primaryFill',
        },
      },

      basic: {
        padding: 0,
        color: '$secondaryFill',

        '&:hover ': {
          color: '$primaryFill',
        },

        '&:focus ': {
          color: '$primaryFill',
        },
      },

      market: {
        backgroundColor: 'transparent',
        color: '$secondaryFill',
        padding: '$space$5 $space$4',
        borderRadius: 5,
        fontSize: 12,
        lineHeight: 'unset',
        border: '1px solid $colors$primaryBorder',

        '&:hover': {
          border: '1px solid $colors$secondaryBorder',
        },

        '&:focus-within': {
          border: '1px solid $colors$primaryFill',
        },
      },

      tag: {
        backgroundColor: '$secondaryBackground',
        color: '$secondaryFill',
        padding: '$space$5 $space$4',
        borderRadius: 5,
        fontSize: 12,
        border: '1px solid $colors$primaryBorder',

        '&:hover': {
          border: '1px solid $colors$secondaryBorder',
        },

        '&:focus-within': {
          border: '1px solid $colors$primaryFill',
        },
      },

      underline: {
        padding: 0,
        color: '$secondaryFill',
        textDecoration: 'underline',

        '&:hover ': {
          textDecoration: 'none',
        },

        '&:focus ': {
          textDecoration: 'none',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
