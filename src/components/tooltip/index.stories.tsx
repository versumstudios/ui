import { Meta, Story } from '@storybook/react';

import { ITooltip, Tooltip } from './index';

export default {
  title: 'components/tooltip',
  component: Tooltip,
  args: {
    description: 'This is a tooltip',
  },
} as Meta;

export const Interactive: Story<ITooltip> = (props) => <Tooltip {...props}>Tooltip</Tooltip>;
