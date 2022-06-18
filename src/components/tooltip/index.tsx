import React, { FC, ReactNode } from 'react';

import * as RadixTooltip from '@radix-ui/react-tooltip';

import * as Styles from './styles';

interface ITooltip {
  children: ReactNode;
  description: string;
}

export const Tooltip: FC<ITooltip> = ({ children, description }) => {
  return (
    <RadixTooltip.Root delayDuration={0}>
      <Styles.TooltipTrigger tabIndex={-1}>{children}</Styles.TooltipTrigger>
      <Styles.TooltipContent sideOffset={8}>{description}</Styles.TooltipContent>
    </RadixTooltip.Root>
  );
};
