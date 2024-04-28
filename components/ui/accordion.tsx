'use client';

import * as React from 'react';
import { ReactNode } from 'react';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cva } from 'class-variance-authority';
import { ChevronDown } from 'lucide-react';

import { FONT_SIZE } from '@constants/sizes';
import { BUTTON_STATUS, STATUS, TEXT_STATUS } from '@constants/status';
import { WEIGHT } from '@constants/weight';

import { cn } from '@utils/cn';

import { Text } from '@components/ui/text';

// Başlık ve içeriklerin olduğu bir accordion componenti.
{
  /* <Text element="h1"
size={FONT_SIZE.XL}
weight={WEIGHT.BOLD}
status={TEXT_STATUS.GRAY}>Questions</Text>
<Text      
className='mt-1'
element="p"
size={FONT_SIZE.MD}
weight={WEIGHT.REGULAR}
status={TEXT_STATUS.GRAY}> You can see and manage your questions from here.</Text> */
}

{
  /* <Accordion type="single" collapsible>
<Text element="h1"
            size={FONT_SIZE.XL}
            weight={WEIGHT.BOLD}
            status={TEXT_STATUS.GRAY}>Questions</Text>
  <Text      
      
            element="p"
            size={FONT_SIZE.MD}
            weight={WEIGHT.REGULAR}
            status={TEXT_STATUS.GRAY}> You can see and manage your questions from here.</Text>
<AccordionItem value="item-1">
  <AccordionTrigger> How can I export images from my website? </AccordionTrigger>
  <AccordionContent>
    Yes. It adheres to the WAI-ARIA design pattern.
  </AccordionContent>
</AccordionItem>
</Accordion> */
}

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-gray-200', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      <Text
        element="p"
        size={FONT_SIZE.MD}
        weight={WEIGHT.SEMIBOLD}
        status={TEXT_STATUS.GRAY}
      >
        {' '}
        {children}{' '}
      </Text>
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
