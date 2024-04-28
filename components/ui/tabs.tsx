'use client';

import * as React from 'react';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@utils/cn';

const TabsComp = TabsPrimitive.Root;

interface TabsProps {
  tabs: {
    label: string;
    content?: React.ReactNode;
    disabled?: boolean;
  }[];
  defaultLabel: string;
  className?: string;
  type?: 'white-border' | 'button-group';
  triggerItemClassName?: string;
  onValueChange?: (tab: string) => void;
}

const Tabs = (props: TabsProps) => {
  // Props
  const {
    defaultLabel,
    className,
    tabs,
    type = 'white-border',
    triggerItemClassName,
    onValueChange,
  } = props;

  return (
    <TabsComp defaultValue={defaultLabel} onValueChange={onValueChange}>
      <TabsPrimitive.List
        className={cn(
          className,
          'tab-list general-transition',
          type === 'white-border' &&
            'inline-flex h-10 items-center justify-center gap-2 rounded-md border border-gray-100 bg-gray-50 p-1 text-muted-foreground ',
          type === 'button-group' &&
            'inline-flex items-center justify-center rounded-lg border border-gray-300 bg-muted text-center font-semibold text-gray-800 shadow-sm'
        )}
      >
        {tabs?.map((tab, index) => (
          <TabsPrimitive.Trigger
            key={index}
            value={tab.label}
            disabled={tab.disabled}
            className={cn(
              'tabs-trigger general-transition  disabled:pointer-events-none',
              type === 'button-group' && {
                'max-w inline-flex w-auto items-center justify-center whitespace-nowrap border-gray-300 bg-white px-[16px] py-[10px]  text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:text-gray-300 data-[state=active]:bg-gray-50 data-[state=active]:text-gray-700 data-[state=active]:shadow-sm':
                  true,
                'rounded-s-lg border-r': index === 0,
                'rounded-e-lg ': index === tabs.length - 1,
                'border-r ': index !== tabs.length - 1,
              },
              type === 'white-border' &&
                'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-semibold text-gray-500 ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-gray-700 data-[state=active]:shadow-[0px_1px_3px_0px_#1018281A] ',
              triggerItemClassName
            )}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>

      {tabs?.map((tab, index) => (
        <TabsPrimitive.Content
          key={index}
          value={tab.label}
          className={cn(
            'tabs-content general-transition ',
            type === 'button-group' &&
              'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            type === 'white-border' &&
              'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            className
          )}
        >
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsComp>
  );
};

export { Tabs };
