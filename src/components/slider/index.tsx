import React, { FC } from 'react';

import * as SliderPrimitive from '@radix-ui/react-slider';

import * as Styles from './styles';

export interface ISlider {
  value?: number[] | undefined;
  label: string;
  onChange?: (toggled: number) => void;
  max?: number;
  min?: number;
  step?: number;
  scrubber?: boolean;
}

export const Slider: FC<ISlider> = ({
  value,
  label,
  min = 0,
  max = 1,
  step = 0.01,
  onChange = () => null,
  scrubber = false,
}) => {
  const handleChange = ([nextValue]: number[]) => {
    onChange(nextValue);
  };

  return (
    <SliderPrimitive.Root
      asChild
      min={min}
      max={max}
      step={step}
      aria-label={label}
      value={value}
      onValueChange={handleChange}
    >
      <Styles.Root>
        <SliderPrimitive.Track asChild>
          <Styles.Track>
            <SliderPrimitive.Range asChild>
              <Styles.Range />
            </SliderPrimitive.Range>
          </Styles.Track>
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb asChild>
          <Styles.Thumb scrubber={scrubber} />
        </SliderPrimitive.Thumb>
      </Styles.Root>
    </SliderPrimitive.Root>
  );
};

Slider.displayName = 'SliderComponent';
