import { keyframes, styled } from '../../styles/stitches';

const spin = keyframes({
  '0%': {
    transform: 'translateX(-50%) translateY(-50%) rotate(0deg)',
  },
  '100%': {
    transform: 'translateX(-50%) translateY(-50%) rotate(360deg)',
  },
});

export const Container = styled('div', {
  position: 'relative',
  borderRadius: 9999,
  width: 20,
  height: 20,
  border: '2px solid $colors$primaryBorder',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'border-color 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out',

  '&:before': {
    content: "''",
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 0,
    height: 0,
    borderRadius: 9999,
    transform: 'translateX(-50%) translateY(-50%)',
    backgroundColor: 'transparent',
    transition: 'all 0.2s ease-out',
  },

  '&:after': {
    content: "''",
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 16,
    height: 16,
    borderRadius: 9999,
    opacity: 0,
    transform: 'translateX(-50%) translateY(-50%)',
    border: '2px solid transparent',
    borderTop: '2px solid $colors$primaryFill',
    transition: 'opacity 0.3s ease-in-out',
    animation: `${spin} 1s linear infinite`,
  },

  i: {
    position: 'relative',
    fontSize: 16,
    fontWeight: 700,
    color: 'white',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
  },

  variants: {
    progress: {
      true: {
        '&:after': {
          opacity: 1,
        },
      },
    },

    error: {
      true: {
        border: '2px solid $colors$red',

        i: {
          opacity: 1,
          transition: 'all 0.3s 0.2s ease-in-out',
        },

        '&:before': {
          width: 18,
          height: 18,
          backgroundColor: '$red',
        },
      },
    },

    success: {
      true: {
        border: '2px solid $colors$green',

        i: {
          opacity: 1,
          transition: 'all 0.3s 0.2s ease-in-out',
        },

        '&:before': {
          width: 18,
          height: 18,
          backgroundColor: '$green',
        },
      },
    },

    small: {
      true: {
        width: 16,
        height: 16,
        '&:after': {
          content: "''",
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 12,
          height: 12,
        },
      },
    },
  },
});
