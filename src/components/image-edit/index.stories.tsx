import { Meta, Story } from '@storybook/react';

import { Box } from '../box';

import { IImageEdit, ImageEdit } from './index';

export default {
  title: 'components/image-edit',
  component: ImageEdit,
  args: {},
  argTypes: {},
} as Meta;

export const Interactive: Story<IImageEdit> = (props) => (
  <ImageEdit {...props}>
    <Box css={{ width: 40, height: 40, borderRadius: 5 }} />
  </ImageEdit>
);
