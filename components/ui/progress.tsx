'use client';

import * as React from 'react';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva } from 'class-variance-authority';

import { STATUS } from '@constants/status';

import { cn } from '@utils/cn';

interface IProgressProps {
  status?: STATUS;
  value?: number;
}

const progressVariants = cva(
  'h-full w-full flex-1 bg-primary-600 transition-all',
  {
    variants: {
      status: {
        primary: 'bg-primary-600',
        secondary: 'bg-primary-50',
        warning: 'bg-warning-500',
        danger: 'bg-danger-500',
        success: 'bg-success-500',
        info: 'bg-blue-light-500',
        black: 'bg-gray-800',
        white: 'bg-white',
        gray: 'bg-gray-200',
        light: 'bg-gray-25',
      },
    },
    defaultVariants: {
      status: 'primary',
    },
  }
);

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  IProgressProps & React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, status, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'orbina-ui-progress relative h-2 w-full overflow-hidden rounded-full bg-gray-200',
      { className }
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(progressVariants({ status }))}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
