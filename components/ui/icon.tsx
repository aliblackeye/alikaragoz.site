import { createElement, CSSProperties } from 'react';

import Image from 'next/image';

import { IconType } from 'react-icons';

import { SIZE } from '@constants/sizes';
import { STATUS } from '@constants/status';

import { cn } from '@utils/cn';

interface IIcon {
  icon: IconType;
  image?: typeof Image;
  size?: SIZE;
  className?: string;
  status?: STATUS;
  onClick?: (e?: any) => void;
  // Örnek kullanım: COLORS['gray']['900']
  color?: string;
  style?: CSSProperties;
}

const Icon = (props: IIcon) => {
  // Props
  const {
    className,
    size = SIZE.MD,
    onClick,
    status = STATUS.BLACK,
    color,
    style,
  } = props;

  const classNames = cn(
    'icon',
    className || '',
    `icon-size-${SIZE[size].toLowerCase()}`,
    {
      'text-primary-900': status === 'primary',
      'text-primary-700': status === 'secondary',
      'text-danger-700': status === 'danger',
      'text-success-700': status === 'success',
      'text-warning-600': status === 'warning',
      'text-info-900': status === 'info',
      'text-black': status === 'black',
      'text-white': status === 'white',
    }
  );

  return (
    <span className={classNames} onClick={onClick}>
      {createElement(props.icon, {
        size,
        fontSize: size,
        color,
        className,
        style,
      })}
    </span>
  );
};

export { Icon };
