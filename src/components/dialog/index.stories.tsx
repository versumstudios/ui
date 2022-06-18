import { Meta, Story } from '@storybook/react';

import { Dialog, IDialog } from './index';

export default {
  title: 'components/dialog',
  component: Dialog,
  args: {
    title: 'title',
    description: 'description',
    open: true,
    large: true,
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    open: { control: 'boolean' },
    large: { control: 'boolean' },
  },
} as Meta;

export const Interactive: Story<IDialog> = (props) => <Dialog {...props} />;
