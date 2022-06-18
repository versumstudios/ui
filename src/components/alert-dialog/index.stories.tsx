import { Meta, Story } from '@storybook/react';

import { AlertDialog } from './index';

export default {
  title: 'components/alert-dialog',
  component: AlertDialog,
  args: {
    title: 'title',
    description: 'description',
    open: true,
    label: 'Alert',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    open: { control: 'boolean' },
    label: { control: 'text' },
  },
} as Meta;

export const Interactive: Story = (props) => <AlertDialog {...props}>Alert dialog</AlertDialog>;
