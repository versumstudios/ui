import { Meta, Story } from '@storybook/react';

import { Button } from './index';

export default {
  title: 'components/button',
  component: Button,
  args: {
    disabled: false,
    full: false,
    round: false,
    small: false,
    shrink: false,
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'highlight', 'warning', 'simple', 'basic', 'market', 'tag', 'underline'],
    },
  },
} as Meta;

export const Interactive: Story = (props) => <Button {...props}>Button</Button>;
