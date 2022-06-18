import { Meta, Story } from '@storybook/react';

import { ISearch, Search } from './index';

export default {
  title: 'components/search',
  component: Search,
} as Meta;

export const Interactive: Story<ISearch> = () => {
  return <Search placeholder="Search" />;
};
