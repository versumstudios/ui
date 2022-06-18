import { styled } from '../../styles/stitches';

export const Overlay = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  opacity: 0.3,
  transition: '$fast',
});

export const Container = styled('button', {
  appearance: 'none',
  backgroundColor: '$secondaryBackground',
  border: 'none',
  color: 'white',
  fontFamily: '$DMSans',
  fontSize: 14,
  transition: '$fast',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',

  i: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    fontSize: 14,
    color: 'inherit',
    opacity: 0.8,
    transition: '$fast',
  },

  '&:focus': {
    outline: 'none',

    [`& ${Overlay}`]: {
      opacity: 0,
    },

    i: {
      opacity: 1,
    },
  },

  '&:hover': {
    [`& ${Overlay}`]: {
      opacity: 0,
    },

    i: {
      opacity: 1,
    },
  },
});
