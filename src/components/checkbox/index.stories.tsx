import { Meta, Story } from '@storybook/react';

import { Checkbox, ICheckbox } from './index';

export default {
  title: 'components/checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    reversed: true,
    disabled: false,
  },
  argTypes: {
    label: { control: 'text' },
    reversed: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

export const Interactive: Story<ICheckbox> = (props) => <Checkbox {...props} />;
