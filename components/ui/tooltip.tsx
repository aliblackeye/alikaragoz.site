'use client';

import * as React from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '../../common/utils/cn';

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipComp = TooltipPrimitive.Root;

interface ITooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  sideOffset?: number;
  delayDuration?: number;
  disableHoverableContent?: boolean;
  skipDelayDuration?: number;
}

const Tooltip = (props: ITooltipProps) => {
  const {
    children,
    sideOffset,
    content,
    delayDuration,
    disableHoverableContent,
    skipDelayDuration,
  } = props;
  return (
    <TooltipProvider
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
      skipDelayDuration={skipDelayDuration}
    >
      <TooltipComp>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent sideOffset={sideOffset}>{content}</TooltipContent>
      </TooltipComp>
    </TooltipProvider>
  );
};

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip };
