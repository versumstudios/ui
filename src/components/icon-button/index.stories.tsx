import { Meta, Story } from '@storybook/react';

import { IconButton } from './index';

export default {
  title: 'components/icon-button',
  component: IconButton,
  args: {},
  argTypes: {},
} as Meta;

export const Interactive: Story = (props) => (
  <IconButton {...props}>
    <i>add</i>
  </IconButton>
);
