import { styled } from '../../styles/stitches';
import * as Styles from '../copy/styles';

export const Container = styled('code', {
  position: 'relative',
  padding: '$space$3',
  margin: '$space$3 0',
  backgroundColor: '$secondaryBackground',
  borderRadius: 5,

  [`& ${Styles.Container}`]: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});
