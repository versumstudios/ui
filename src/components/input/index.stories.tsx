import { Meta, Story } from '@storybook/react';

import { IInput, Input } from './index';

export default {
  title: 'components/input',
  component: Input,
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    label: '',
    disabled: false,
    small: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'number'],
    },
    placeholder: { control: 'text' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    small: { control: 'boolean' },
  },
} as Meta;

export const Interactive: Story<IInput> = (props) => <Input {...props} />;
