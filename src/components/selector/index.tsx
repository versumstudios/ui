import React, { ChangeEvent, FC } from 'react';

import * as Styles from './styles';

enum Variants {
  basic = 'basic', // no borders or icons
  market = 'market', // smaller size for filters
}

export interface ISelectorItem {
  labelForDefault?: boolean;
  value: string | number;
  label: string;
  icon?: string;
}

export interface ISelector {
  variant?: string;
  value?: string | number;
  list: ISelectorItem[];
  label?: string;
  onChange: (nextValue: string) => void;
}

export const Selector: FC<ISelector> = ({ label, variant, value, list, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextValue = e.target.value;
    onChange(nextValue);
  };

  const getIcon = () => {
    const found = list.find((e) => e.value === value);
    if (found?.icon) {
      return found.icon;
    }

    return null;
  };

  const icon = getIcon();

  return (
    <Styles.Container variant={variant as Variants}>
      {icon && <Styles.Icon>{icon}</Styles.Icon>}
      <Styles.Select variant={variant as Variants} value={value} onChange={handleChange} hasIcon={!!icon}>
        {list.map((item) => (
          <option key={item.value} value={item.value}>
            {item.labelForDefault ? label : item.label}
          </option>
        ))}
      </Styles.Select>
      <Styles.Arrow>unfold_more</Styles.Arrow>
    </Styles.Container>
  );
};
