import React, { FC, forwardRef, ReactNode } from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';

import * as Styles from './styles';

export interface IAccordionTrigger {
  children?: ReactNode;
}

export const AccordionTrigger = forwardRef<HTMLButtonElement, IAccordionTrigger>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <AccordionPrimitive.Header asChild>
        <Styles.Header>
          <AccordionPrimitive.Trigger asChild>
            <Styles.Trigger {...props} ref={forwardedRef}>
              {children}
              <Styles.Chevron aria-hidden>
                <i>expand_more</i>
              </Styles.Chevron>
            </Styles.Trigger>
          </AccordionPrimitive.Trigger>
        </Styles.Header>
      </AccordionPrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = 'accordionTrigger';

export interface IAccordionContent {
  children?: ReactNode;
}

export const AccordionContent = forwardRef<HTMLDivElement, IAccordionContent>(
  ({ children, ...props }, forwardedRef) => (
    <AccordionPrimitive.Content {...props} ref={forwardedRef} asChild>
      <Styles.Content>
        <div>{children}</div>
      </Styles.Content>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = 'accordionContent';

export interface IAccordionItem {
  children?: ReactNode;
  value: string;
}

export const AccordionItem: FC<IAccordionItem> = ({ children, value }) => (
  <AccordionPrimitive.Item value={value} asChild>
    <Styles.Item>{children}</Styles.Item>
  </AccordionPrimitive.Item>
);

AccordionItem.displayName = 'accordionItem';

export interface IAccordion {
  children?: ReactNode;
}

export const Accordion: FC<IAccordion> = ({ children }) => {
  return (
    <AccordionPrimitive.Root type="multiple" asChild>
      <Styles.Root>{children}</Styles.Root>
    </AccordionPrimitive.Root>
  );
};
