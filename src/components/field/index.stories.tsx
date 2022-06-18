import { Meta, Story } from '@storybook/react';

import { Field, IField } from './index';

export default {
  title: 'components/field',
  component: Field,
  args: {
    uid: 'uid',
    label: 'Label',
    tooltip: 'This is a tooltip',
    error: '',
  },
  argTypes: {
    label: { control: 'text' },
    tooltip: { control: 'text' },
    error: { control: 'text' },
  },
} as Meta;

export const Interactive: Story<IField> = (props) => <Field {...props}>Field</Field>;
