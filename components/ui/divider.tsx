import { forwardRef, HTMLAttributes } from 'react';

import { cva } from 'class-variance-authority';

import { STATUS } from '@constants/status';

import { cn } from '@utils/cn';

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  margin?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  status?: STATUS;
}

const dividerVariants = cva('orbina-ui-divider border-none h-[1px]', {
  variants: {
    margin: {
      none: 'my-0',
      xs: 'my-1',
      sm: 'my-2',
      md: 'my-3',
      lg: 'my-4',
      xl: 'my-5',
      '2xl': 'my-6',
      '3xl': 'my-7',
      '4xl': 'my-8',
    },
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
    margin: 'md',
    status: 'gray',
  },
});

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, margin, status = STATUS.GRAY, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn(dividerVariants({ margin, status, className }))}
      {...props}
    />
  )
);

Divider.displayName = 'Divider';

export { Divider, dividerVariants };
