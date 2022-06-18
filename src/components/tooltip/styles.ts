import * as Tooltip from '@radix-ui/react-tooltip';

import { styled } from '../../styles/stitches';

export const TooltipTrigger = styled(Tooltip.Trigger, {
  backgroundColor: 'transparent',
  border: 'none',
  // marginLeft: 4,

  i: {
    color: '$secondaryFill',
    fontSize: 12,
  },

  '&:focus': {
    outline: 0,
  },
});

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: 5,
  fontSize: 12,
  padding: '$space$4',
  backgroundColor: '$secondaryBackground',
  border: '1px solid $primaryBorder',
  color: '$secondaryFill',
  maxWidth: 250,
});
