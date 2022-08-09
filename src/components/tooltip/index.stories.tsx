import { Meta, Story } from '@storybook/react';

import { Box } from '../box';

import { ITooltip, Tooltip } from './index';

export default {
  title: 'components/tooltip',
  component: Tooltip,
  args: {
    description: 'This is a tooltip',
  },
} as Meta;

export const Interactive: Story<ITooltip> = (props) => (
  <Tooltip {...props}>
    <Box css={{ color: '$primaryFill' }}>Tooltip</Box>
  </Tooltip>
);
