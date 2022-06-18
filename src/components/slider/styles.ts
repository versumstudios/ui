import { styled } from '../../styles/stitches';

export const Thumb = styled('span', {
  all: 'unset',
  display: 'block',
  height: 12,
  width: 12,
  borderRadius: 9999,
  background: '$primaryFill',
  opacity: 0,
  transition: '$fast',

  '&:focus': {
    opacity: 1,
  },

  variants: {
    scrubber: {
      true: {
        opacity: 1,
      },
    },
  },
});

export const Root = styled('span', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: '100%',

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&:hover': {
    [`& ${Thumb}`]: { opacity: 1 },
  },
});

export const Track = styled('span', {
  backgroundColor: '$primaryBorder',
  position: 'relative',
  flexGrow: 1,
  borderRadius: 9999,

  '&[data-orientation="horizontal"]': { height: 4, borderRadius: 2 },
});

export const Range = styled('span', {
  position: 'absolute',
  backgroundColor: '$primaryFill',
  borderRadius: 9999,
  height: '100%',
});
