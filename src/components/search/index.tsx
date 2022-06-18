/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, forwardRef, useState } from 'react';
import _uniqueId from 'lodash/uniqueId';

import { Box } from '../box';
import { Step } from '../step';

import * as Styles from './styles';

export interface ISearch {
  placeholder?: string;
  defaultValue?: string | number | undefined;
  value?: string | number | undefined;
  onChange?: (value: any) => void;
  onFocus?: () => void;
  onBlur?: (e: any) => void;
  disabled?: boolean;
  subtle?: boolean;
  progress?: boolean;
}

export const Search = forwardRef<HTMLInputElement, ISearch>(
  (
    {
      placeholder,
      defaultValue,
      value,
      onChange = () => null,
      onFocus = () => null,
      onBlur = () => null,
      disabled = false,
      subtle = false,
      progress = false,
      ...rest
    },
    ref
  ) => {
    const [internalUID] = useState(_uniqueId('vsearch-'));

    return (
      <Styles.Container disabled={disabled} subtle={subtle}>
        <Styles.Label htmlFor={internalUID} css={{ i: { fontSize: 20 } }}>
          <i>search</i>
        </Styles.Label>

        <Styles.Input
          id={internalUID}
          ref={ref}
          type="text"
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          tabIndex={disabled ? -1 : 0}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          autoComplete="off"
          {...rest}
        />

        {progress && (
          <Box css={{ paddingRight: '$space$4' }} vertical>
            <Step progress small />
          </Box>
        )}
      </Styles.Container>
    );
  }
);

Search.displayName = 'designSystemSearch';
