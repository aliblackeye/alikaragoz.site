/* eslint-disable react/no-children-prop */
'use client';

import { createElement, CSSProperties, ReactNode } from 'react';

import { cva } from 'class-variance-authority';

import { FONT_SIZE } from '@constants/sizes';
import { TEXT_STATUS } from '@constants/status';
import { WEIGHT } from '@constants/weight';

import { cn } from '@utils/cn';

interface TextProps {
  element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  size?: FONT_SIZE;
  status?: TEXT_STATUS;
  className?: string;
  children?: ReactNode;
  weight?: WEIGHT;
  // Örnek kullanım: COLORS['gray']['900']
  color?: string;
  style?: CSSProperties;
}

const textVariants = cva('shadcn-text', {
  variants: {
    status: {
      primary: 'text-primary-700',
      secondary: 'text-secondary-700',
      success: 'text-success-700',
      warning: 'text-warning-700',
      danger: 'text-danger-700',
      info: 'text-info-700',
      link: 'text-link-700',
      light: 'text-light-700',
      text: 'text-text-700',
      white: 'text-white',
      black: 'text-black',
      gray: 'text-gray-700',
    },
    size: {
      'display-2xl': 'text-[72px] leading-[90px]',
      'display-xl': 'text-[60px] leading-[72px]',
      'display-lg': 'text-[48px] leading-[60px]',
      'display-md': 'text-[36px] leading-[44px]',
      'display-sm': 'text-[30px] leading-[38px]',
      'display-xs': 'text-[24px] leading-[32px]',
      'text-xl': 'text-[20px] leading-[30px]',
      'text-lg': 'text-[18px] leading-[28px]',
      'text-md': 'text-[16px] leading-[24px]',
      'text-sm': 'text-[14px] leading-[20px]',
      'text-xs': 'text-[12px] leading-[18px]',
    },

    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'text-sm',
    status: 'primary',
    weight: 'regular',
  },
});

const Text = (props: TextProps) => {
  const {
    element,
    status = TEXT_STATUS.BLACK,
    size = FONT_SIZE.SM,
    children,
    className,
    weight,
    color,
    style,
    ...rest
  } = props;

  return createElement(element, {
    ...rest,
    className: cn(
      textVariants({
        size,
        status,
        weight,
        className,
      })
    ),
    style: { color, ...style },
    children,
  });
};

Text.displayName = 'Text';

export { Text, textVariants };
