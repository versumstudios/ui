import { keyframes, styled } from '../styles/stitches';

const pulsing = keyframes({
  '0%': { opacity: 1 },
  '50%': { opacity: 0.5 },
  '100%': { opacity: 1 },
});

export const Status = styled('div', {
  width: 6,
  height: 6,
  margin: '0 $space$4',
  borderRadius: 9999,
  animation: `${pulsing} 2s linear infinite`,

  variants: {
    variant: {
      success: {
        backgroundColor: '$green',
      },

      warning: {
        backgroundColor: '$yellow',
      },

      error: {
        backgroundColor: '$red',
      },
    },
  },

  defaultVariants: {
    variant: 'success',
  },
});
