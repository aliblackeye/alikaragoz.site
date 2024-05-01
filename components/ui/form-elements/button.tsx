import { CSSProperties, forwardRef } from 'react';

import { useI18n } from '@locales/client';
import { cva } from 'class-variance-authority';
import { IconType } from 'react-icons';

import type { VariantProps } from 'class-variance-authority';

import ICONS from '@constants/icons';
import { BUTTON_SIZE, SIZE } from '@constants/sizes';
import { BUTTON_STATUS, STATUS } from '@constants/status';

import { cn } from '@utils/cn';

import { Icon } from '@components/ui/icon';

const buttonVariants = (iconButton: boolean, status: BUTTON_STATUS) => {
  const variants = cva(
    `shadcn-button inline-flex items-center justify-center w-min whitespace-nowrap rounded-md text-sm font-medium general-transition ring-offset-primary-300 leading-5 border focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary-100 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 font-semibold shadow-[0px_1px_2px_0px_var(--shadow)] ${iconButton ? 'min-w-[36px] min-h-[36px]' : ''}`,
    {
      variants: {
        status: {
          primary:
            'bg-primary-600 border-primary-600 text-white hover:bg-primary-700',
          secondary:
            'bg-primary-50 border-primary-50 text-primary-700 hover:bg-primary-100 hover:text-primary-800 shadow-none  disabled:opacity-100',
          warning:
            'bg-warning-500 border-warning-300 text-white hover:bg-warning-600',
          danger:
            'bg-danger-600 border-danger-300 text-white hover:bg-danger-600',
          success:
            'bg-success-600 border-success-600 text-white hover:bg-success-700',
          info: 'bg-blue-light-500 text-white hover:bg-blue-light-600',
          text: 'text-black hover:text-primary-600',
          black: 'bg-gray-800 text-white hover:bg-gray-900',
          white: 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50',
          gray: 'bg-gray-300 text-gray-700 border-gray-300 hover:bg-gray-400',
          light: 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-gray-50',
          tertiary:
            'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-700',
        },
        variant: {
          solid: '',
          outline: '',
          ghost: 'bg-transparent border-transparent shadow-none',
          link: `general-transition underline-offset-4 underline-${status}-600 bg-transparent hover:bg-transparent border-none !p-0 hover:underline text-${status}-600`,
        },
        size: {
          sm: `h-9 py-[8px] px-[14px] ${iconButton ? 'p-[8px]' : ''}`,
          md: `h-10 py-[10px] px-[16px] ${iconButton ? 'p-[10px]' : ''}`,
          lg: `h-11 py-[10px] px-[18px] text-base leading-6 ${iconButton ? 'p-[12px]' : ''}`,
          xl: `h-12 py-[12px] px-[20px] text-base leading-6 ${iconButton ? 'p-[14px]' : ''}`,
          '2xl': `h-15 py-[16px] px-[28px] text-lg leading-6 ${iconButton ? 'p-[16px]' : ''}`,
        },
        radius: {
          sm: 'rounded-sm',
          md: 'rounded-md',
          lg: 'rounded-lg',
          full: 'rounded-full',
        },
        loading: {
          true: 'cursor-wait',
          false: '',
        },
      },
      defaultVariants: {
        status: 'primary',
        variant: 'solid',
        size: 'sm',
        radius: 'md',
      },
    }
  );
  return variants;
};

const createIcon = (
  icon: IconType,
  status: STATUS = STATUS.WHITE,
  size: SIZE = SIZE.SM,
  color?: string,
  style?: CSSProperties
) => {
  return (
    <Icon icon={icon} status={status} size={size} color={color} style={style} />
  );
};

type ButtonTypes = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<VariantProps<typeof buttonVariants>, 'valueOf'>;

export interface ButtonProps extends ButtonTypes {
  label?: string;
  status?: BUTTON_STATUS;
  variant?: 'outline' | 'solid' | 'ghost' | 'link';
  icon?: {
    iconType: IconType;
    status?: STATUS;
    size?: SIZE;
    color?: string;
    style?: CSSProperties;
  };
  rightIcon?: {
    iconType: IconType;
    status?: STATUS;
    size?: SIZE;
    color?: string;
    style?: CSSProperties;
  };
  onClick?: (e?: any) => void;
  radius?: 'md' | 'lg' | 'sm' | 'full';
  size?: BUTTON_SIZE;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  block?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      status,
      size,
      radius,
      label,
      icon,
      rightIcon,
      loading,
      type = 'button',
      disabled,
      role,
      style,
      ...props
    },
    ref
  ) => {
    const t = useI18n() as any;

    return (
      <>
        <button
          className={cn(
            buttonVariants(
              !label && icon ? true : false,
              status
            )({
              variant,
              size,
              status,
              className,
              radius,
              loading,
            })
          )}
          role={role}
          ref={ref}
          type={type}
          disabled={disabled || loading}
          style={style}
          {...props}
        >
          <div className="relative flex items-center gap-2">
            {icon && (
              <div
                className={cn('button-icon-left', {
                  'opacity-0': loading,
                })}
              >
                {createIcon(
                  icon.iconType,
                  icon.status,
                  icon.size,
                  icon.color,
                  icon.style
                )}
              </div>
            )}
            {label && (
              <span
                className={cn('button-label', {
                  'opacity-0': loading,
                })}
              >
                {t(label)}
              </span>
            )}
            {loading && (
              <div
                className={cn(
                  'button-loader',
                  'absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]'
                )}
              >
                <div className="animate-spin-slow">
                  <Icon
                    icon={ICONS.LOADING}
                    status={STATUS.WHITE}
                    size={SIZE.LG}
                  />
                </div>
              </div>
            )}
            {rightIcon && (
              <div
                className={cn('button-icon-right', {
                  'opacity-0': loading,
                })}
              >
                {createIcon(
                  rightIcon.iconType,
                  rightIcon.status,
                  rightIcon.size,
                  rightIcon.color
                )}
              </div>
            )}
          </div>
        </button>
      </>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
