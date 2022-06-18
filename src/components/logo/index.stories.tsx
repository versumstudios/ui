import { Meta, Story } from '@storybook/react';

import { Box } from '../box';

import { Logo, Monogram } from './index';

export default {
  title: 'components/logo',
  component: Logo,
  args: {},
  argTypes: {},
} as Meta;

export const Interactive: Story = (props) => (
  <Box>
    <Logo {...props} />
    <Monogram />
  </Box>
);
