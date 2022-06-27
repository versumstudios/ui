import { Meta, Story } from '@storybook/react';

import { Container } from './index';

export default {
  title: 'components/container',
  component: Container,
  args: {
    debug: true,
    centred: true,
  },
} as Meta;

export const Interactive: Story = (props) => <Container {...props}>Container</Container>;
