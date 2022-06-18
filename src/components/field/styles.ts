import * as RadixLabel from '@radix-ui/react-label';

import { styled } from '../../styles/stitches';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '$space$3',
});

export const LabelContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '$space$4',
});

export const Label = styled(RadixLabel.Root, {
  cursor: 'default',
  color: '$secondaryFill',
  fontSize: 14,
});

export const Error = styled('div', {
  fontSize: 13,
  color: '$primaryError',
  padding: '$space$4',
});
