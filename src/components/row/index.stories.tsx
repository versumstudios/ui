import { Meta, Story } from '@storybook/react';

import { Text } from '../text';

import { IRow, Row } from './index';

export default {
  title: 'components/row',
  component: Row,
} as Meta;

export const Interactive: Story<IRow> = () => {
  return (
    <Row title="Title" label={<Text>Description</Text>}>
      This is the content
    </Row>
  );
};
