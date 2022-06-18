import React, { ChangeEvent, forwardRef } from 'react';

import * as Styles from './styles';

interface ITextarea {
  placeholder?: string;
  defaultValue?: string | number | undefined;
  value?: string | number | undefined;
  onChange?: (value: string) => void;
  disabled?: boolean;
  small?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
  ({ placeholder, value, defaultValue, onChange = () => null, disabled = false, small = false, ...rest }, ref) => {
    return (
      <Styles.Container small={small} disabled={disabled}>
        <Styles.Textarea
          ref={ref}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          tabIndex={disabled ? -1 : 0}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
          disabled={disabled}
          {...rest}
        />
      </Styles.Container>
    );
  }
);

Textarea.displayName = 'designSystemTextarea';
