import * as StyledSelect from '../../../components/selector/styles';
import { styled } from '../../../styles/stitches';

export const Container = styled('div', {
  [`& ${StyledSelect.Select}`]: {
    fontSize: 16,
    height: 32,

    '@bp1': {
      fontSize: 14,
    },
  },
});
