import React, { FC } from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CSS } from '@stitches/react';

import { Text } from '../text';

import * as Styles from './styles';

export interface ICheckbox {
  value?: boolean;
  onChange?: (nextValue: boolean) => void;
  label?: string;
  reversed?: boolean;
  disabled?: boolean;
  css?: CSS;
}

export const Checkbox: FC<ICheckbox> = ({ value, onChange, label, reversed = false, disabled, ...rest }) => {
  return (
    <Styles.Label reversed={reversed} disabled={disabled} {...rest}>
      <CheckboxPrimitive.Root checked={value} onCheckedChange={onChange} asChild>
        <Styles.Container>
          <CheckboxPrimitive.Indicator asChild>
            <Styles.Indicator>
              <i>done</i>
            </Styles.Indicator>
          </CheckboxPrimitive.Indicator>
        </Styles.Container>
      </CheckboxPrimitive.Root>
      {label && (
        <Text unset css={{ color: '$secondaryFill' }}>
          {label}
        </Text>
      )}
    </Styles.Label>
  );
};
