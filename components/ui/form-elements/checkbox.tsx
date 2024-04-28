'use client';

import { CSSProperties } from 'react';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva } from 'class-variance-authority';
import { IconType } from 'react-icons';

import ICONS from '@constants/icons';
import { SIZE } from '@constants/sizes';
import { STATUS } from '@constants/status';

import { cn } from '@utils/cn';

import { Icon } from '@components/ui/icon';

interface CheckboxProps {
  rounded?: boolean;
  name: string;
  value?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  icon?: {
    iconType: IconType;
    status?: STATUS;
    size?: SIZE;
    color?: string;
    style?: CSSProperties;
  };
  variant?: 'default' | 'primary';
  shape?: 'rounded' | 'square';
}

const checkboxVariants = cva(
  `shadcn-checkbox border-gray-300 data-[state=checked]:bg-primary-100 data-[state=checked]:border-primary-500  peer h-5 w-5 shrink-0 border ring-offset-primary-300 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary-100 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 hover:bg-primary-100 general-transition`,
  {
    variants: {
      variant: {
        default: 'border-gray-300',
        primary: 'border-primary-500',
      },
      shape: {
        rounded: 'rounded-lg',
        square: 'rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      shape: 'square',
    },
  }
);

const Checkbox = (props: CheckboxProps) => {
  const { rounded, variant, shape, onChange, className, icon, value, ...rest } =
    props;

  return (
    <CheckboxPrimitive.Root
      {...rest}
      onCheckedChange={onChange}
      checked={value}
      className={cn(
        checkboxVariants({
          variant,
          shape,
          className,
        })
      )}
    >
      <CheckboxPrimitive.Indicator
        className={cn('flex items-center justify-center text-current')}
      >
        <Icon
          icon={icon?.iconType || ICONS.CHECK}
          size={icon?.size || SIZE.MD}
          status={icon?.status || STATUS.PRIMARY}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};

export { Checkbox };
