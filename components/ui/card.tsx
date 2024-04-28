import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import { SHADOW } from '@constants/shadow';
import { STATUS } from '@constants/status';

import { cn } from '@utils/cn';

const cardVariants = cva(
  'orbina-ui-card rounded-[10px] p-4 text-card-foreground shadow-sm',
  {
    variants: {
      status: {
        primary: 'bg-primary-600 border-primary-600 text-white',
        secondary:
          'bg-primary-50 border-primary-50 text-primary-700 shadow-none',
        warning: 'bg-warning-500 border-warning-300 text-white',
        danger: 'bg-danger-500 border-danger-300 text-white',
        success: 'bg-success-500 border-success-300 text-white',
        info: 'bg-blue-light-500 text-white',
        black: 'bg-gray-800 text-white',
        white: 'bg-white text-gray-700 border-gray-200',
        gray: 'bg-gray-200 text-gray-700 border-gray-200',
        light: 'bg-gray-25 text-gray-700 border-gray-200',
      },
      shadow: {
        none: 'shadow-none',
        xs: 'shadow-xs',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
        '2xl': 'shadow-2xl',
        '3xl': 'shadow-3xl',
      },
      border: {
        none: 'border-none',
        sm: 'border',
        md: 'border-2',
        lg: 'border-4',
        xl: 'border-8',
      },
    },
    defaultVariants: {
      status: 'light',
      shadow: 'none',
      border: 'sm',
    },
  }
);

interface CardProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  title?: string;
  description?: string;
  shadow?: SHADOW;
  status?: STATUS;
  className?: string;
  block?: boolean;
  // Örnek kullanım: COLORS['gray']['900']
  color?: string;
  border?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

const Card = ({
  className,
  header,
  title,
  description,
  children,
  block,
  shadow,
  color,
  footer,
  border,
  status = STATUS.LIGHT,
  onClick,
  ...props
}: CardProps) => (
  <div
    className={cn(
      block && 'w-full',
      cardVariants({ className, shadow, status, border })
    )}
    style={{ backgroundColor: color }}
    onClick={onClick}
    {...props}
  >
    {header && <CardHeader className="card-header">{header}</CardHeader>}
    {title && <CardTitle className="card-title">{title}</CardTitle>}
    {description && (
      <CardDescription className="card-description">
        {description}
      </CardDescription>
    )}
    {children && <div className="card-content">{children}</div>}
    {footer && <CardFooter className="card-footer">{footer}</CardFooter>}
  </div>
);
Card.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card };
