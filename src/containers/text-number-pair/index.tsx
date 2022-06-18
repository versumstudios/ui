import React, { useRef } from 'react';

import { Box } from '../../components/box';
import { Input } from '../../components/input';

export interface ITextNumberPair {
  address?: string | undefined;
  value?: number | undefined;
  editable?: boolean;
  isPercentage?: boolean;
  onChange?: (value: string, percentage: number) => void;
}

export const TextNumberPair = ({
  address = '',
  value = 0,
  editable = true,
  isPercentage = false,
  onChange = () => null,
}: ITextNumberPair) => {
  const wref = useRef<HTMLInputElement>(null);
  const vref = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (onChange) {
      if (wref.current && vref.current) {
        onChange(wref.current?.value, Number(vref.current?.value));
      }
    }
  };

  return (
    <Box css={{ flex: 1, display: 'flex', alignItems: 'center', columnGap: '$space$4' }}>
      <Input ref={wref} placeholder="address" value={address} disabled={!editable} onChange={handleChange} />
      <Input
        ref={vref}
        placeholder="quantity"
        value={value}
        onChange={handleChange}
        type="number"
        min={0}
        {...(isPercentage && { max: 100 })}
        small
      />
    </Box>
  );
};
