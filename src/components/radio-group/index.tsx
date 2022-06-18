import React, { FC, useState } from 'react';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import * as Styles from './styles';

export interface IRadioGroupItem {
  key: string;
  label: string;
}

export interface IRadioGroup {
  value?: string;
  onChange: (nextKey: string) => void;
  data: IRadioGroupItem[];
}

export const RadioGroup: FC<IRadioGroup> = ({ value, onChange, data }) => {
  const [focused, setValue] = useState<string>((value || data[0].key) as string);

  const handleValueChange = (key: string) => {
    setValue(key);
    if (onChange) {
      onChange(key);
    }
  };

  return (
    <Styles.Container>
      <RadioGroupPrimitive.Root defaultValue={focused} onValueChange={handleValueChange} asChild>
        <Styles.Root>
          {data.map((item) => {
            return (
              <RadioGroupPrimitive.Item key={item.label} value={item.key} asChild>
                <Styles.Item>{item.label}</Styles.Item>
              </RadioGroupPrimitive.Item>
            );
          })}
        </Styles.Root>
      </RadioGroupPrimitive.Root>
    </Styles.Container>
  );
};
