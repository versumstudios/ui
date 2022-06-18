import { styled } from '../../styles/stitches';

export const Container = styled('button', {
  appearance: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  background: '#666666',
  borderRadius: 12,
  height: 24,
  width: 42,
  position: 'relative',
  transition: 'background 0.2s ease',

  '&:after': {
    content: '""',
    background: 'white',
    borderRadius: '50%',
    height: 20,
    width: 20,
    position: 'absolute',
    top: 2,
    left: 0,
    transform: 'translateX(2px)',
    transition: 'transform 0.2s ease',
  },

  variants: {
    toggled: {
      true: {
        background: '$primaryHighlight',

        '&:after': {
          transform: 'translateX(20px)',
        },
      },
    },
  },
});
