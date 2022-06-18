import * as RadixLabel from '@radix-ui/react-label';

import { styled } from '../../styles/stitches';
import { Text } from '../text';

export const Container = styled('button', {
  all: 'unset',
  backgroundColor: '$secondaryBackground',
  width: 16,
  height: 16,
  borderRadius: 5,
  border: '1px solid $colors$primaryBorder',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Indicator = styled('div', {
  i: {
    display: 'block',
    fontSize: 14,
    fontWeight: 700,
    color: '$secondaryFill',
  },
});

export const Label = styled(RadixLabel.Root, {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',

  [`& ${Text}`]: {
    fontSize: 14,
    order: 1,
    marginRight: '$space$3',
  },

  [`& ${Container}`]: {
    order: 2,
  },

  '&:hover': {
    [`& ${Container}`]: {
      border: '1px solid $colors$secondaryBorder',
    },
  },

  '&:focus-within': {
    [`& ${Container}`]: {
      border: '1px solid $colors$primaryFill',

      i: {
        color: '$primaryFill',
      },
    },
  },

  variants: {
    reversed: {
      true: {
        [`& ${Text}`]: {
          order: 2,
          marginRight: 'unset',
          marginLeft: '$space$3',
        },

        [`& ${Container}`]: {
          order: 1,
        },
      },
    },

    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  },
});
