import React, { ChangeEvent, forwardRef, useState } from 'react';
import { uniqueId } from 'lodash';

import { CSS } from '@stitches/react';

import * as Styles from './styles';

export interface IInput {
  type?: string;
  placeholder?: string;
  defaultValue?: string | number | undefined;
  value?: string | number | undefined;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  label?: string;
  disabled?: boolean;
  small?: boolean;
  min?: number | string;
  max?: number | string;
  css?: CSS;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      type = 'text',
      placeholder,
      defaultValue,
      value,
      onChange = () => null,
      onBlur = () => null,
      onFocus = () => null,
      label,
      disabled = false,
      small = false,
      ...rest
    },
    ref
  ) => {
    const [internalUID] = useState(uniqueId('vinput-'));
    return (
      <Styles.Container small={small} disabled={disabled}>
        {label && <Styles.Label htmlFor={internalUID}>{label}</Styles.Label>}
        <Styles.Input
          id={internalUID}
          ref={ref}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          tabIndex={disabled ? -1 : 0}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          {...rest}
        />
      </Styles.Container>
    );
  }
);

Input.displayName = 'designSystemInput';
