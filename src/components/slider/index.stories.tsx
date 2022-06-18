import { Meta, Story } from '@storybook/react';

import { Slider } from './index';

export default {
  title: 'components/slider',
  component: Slider,
} as Meta;

export const Interactive: Story = () => {
  return <Slider label="slider" />;
};
