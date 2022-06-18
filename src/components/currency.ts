import { styled } from '../styles/stitches';

export const Tezos = styled('span', {
  display: 'inline-flex',
  margin: '0 $space$5',

  '&:after': {
    content: 'tez',
    fontFamily: '$mono',
    color: 'inherit',

    '@bp1': {
      content: 'ꜩ',
    },
  },
});
