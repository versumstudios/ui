import { Meta, Story } from '@storybook/react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, IAccordion } from './index';

export default {
  title: 'components/accordion',
  component: Accordion,
} as Meta;

export const Interactive: Story<IAccordion> = () => {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content 1</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>Content 2</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Item 3</AccordionTrigger>
        <AccordionContent>Content 3</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
