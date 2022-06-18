import { Meta, Story } from '@storybook/react';

import { Box } from '../box';

import { Step } from './index';

export default {
  title: 'components/step',
  component: Step,
  args: {
    small: false,
  },
  argTypes: {
    progress: { control: 'boolean', table: { disable: true } },
    success: { control: 'boolean', table: { disable: true } },
    error: { control: 'boolean', table: { disable: true } },
    small: { control: 'boolean' },
  },
} as Meta;

export const Interactive: Story = (props) => {
  return (
    <Box css={{ '&>*': { marginRight: '$4' } }}>
      <Step {...props} />
      <Step {...props} progress />
      <Step {...props} success />
      <Step {...props} error />
    </Box>
  );
};
