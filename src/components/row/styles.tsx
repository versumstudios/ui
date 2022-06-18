import { styled } from '../../styles/stitches';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid $colors$primaryBorder',

  variants: {
    disabled: {
      true: {
        opacity: 0.25,
        cursor: 'not-allowed',

        '&>*': {
          pointerEvents: 'none',
        },
      },
    },
  },
});

export const Label = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '& > *': {
    margin: 0,
    fontSize: 16,
  },

  h6: {
    marginBottom: '$space$4',
  },

  p: {
    color: '$secondaryFill',
  },
});

export const Item = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '$space$3',

  '@bp1': {
    marginTop: 0,
  },
});
