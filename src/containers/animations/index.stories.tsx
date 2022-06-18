import { Meta, Story } from '@storybook/react';

import { Box } from '../../components/box';

import { BrowserFrame, Grid, Masonry, Vertical } from './index';

export default {
  title: 'containers/animations',
  component: BrowserFrame,
  args: {
    layout: 'masonry',
    info: true,
    market: true,
    labels: true,
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['masonry', 'grid', 'vertical'],
    },
  },
} as Meta;

export const Interactive: Story = ({ layout, info, market, labels }) => {
  const renderLayout = () => {
    switch (layout) {
      case 'masonry':
        return <Masonry info={info} market={market} labels={labels} />;
      case 'grid':
        return <Grid info={info} market={market} labels={labels} />;
      default:
        return <Vertical info={info} market={market} labels={labels} />;
    }
  };
  return (
    <Box css={{ justifyContent: 'space-between', background: '$secondaryBackground' }}>
      <BrowserFrame>{renderLayout()}</BrowserFrame>
    </Box>
  );
};
