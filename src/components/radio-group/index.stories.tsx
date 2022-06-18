import { Meta, Story } from '@storybook/react';

import { IRadioGroup, RadioGroup } from './index';

export default {
  title: 'components/radio-group',
  component: RadioGroup,
} as Meta;

export const Interactive: Story<IRadioGroup> = () => {
  return (
    <RadioGroup
      onChange={() => null}
      data={[
        {
          key: 's',
          label: 'S',
        },
        {
          key: 'm',
          label: 'M',
        },
        {
          key: 'l',
          label: 'L',
        },
        {
          key: 'xl',
          label: 'XL',
        },
      ]}
    />
  );
};
