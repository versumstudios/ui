import { Meta, Story } from '@storybook/react';

import { ITextNumberPair, TextNumberPair } from './index';

export default {
  title: 'containers/text-number-pair',
  component: TextNumberPair,
  args: {
    address: 'tzkt1',
    value: 100,
    editable: false,
    isPercentage: false,
  },
  argTypes: {
    address: { control: 'text' },
    value: { control: 'number' },
    editable: { control: 'boolean' },
    isPercentage: { control: 'boolean' },
  },
} as Meta;

export const Interactive: Story<ITextNumberPair> = (props) => {
  return <TextNumberPair {...props} />;
};
