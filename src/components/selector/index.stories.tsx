import { Meta, Story } from '@storybook/react';

import { ISelector, Selector } from './index';

export default {
  title: 'components/selector',
  component: Selector,
} as Meta;

export const Interactive: Story<ISelector> = () => {
  return (
    <Selector
      onChange={() => null}
      list={[
        { value: '1', label: 'Item 1' },
        { value: '2', label: 'Item 2' },
        { value: '3', label: 'Item 3' },
      ]}
    />
  );
};
