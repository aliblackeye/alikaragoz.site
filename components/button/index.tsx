'use client';

import { ReactNode } from 'react';

// Libs
import { useRouter } from 'next/navigation';

// Locales
import { useI18n } from '@locales/client';
// Next UI
import { ButtonProps, Button as NextButton } from '@nextui-org/button';

// Interfaces
import { STATUS } from '@constants/status';

import '@styles/_button.scss';

interface IButtonProps extends ButtonProps {
  label?: string;
  status?: STATUS;
  icon?: ReactNode;
  endIcon?: ReactNode;
}

export default function Button(props: IButtonProps) {
  // Props
  const {
    status = STATUS.PRIMARY,
    label,
    className,
    href,
    onClick,
    endContent,
    startContent,
    icon,
    endIcon,
    radius,
    size = 'sm',
    ...others
  } = props;

  // Variables
  const router = useRouter();

  const t = useI18n() as any;

  return (
    <NextButton
      {...others}
      size={size}
      radius={'md' ?? radius}
      onClick={(e) => {
        if (href) {
          router.push(href);
          return;
        }
        onClick && onClick(e);
      }}
      className={`nextui-button ${className}`}
      color={status as any}
      isIconOnly={!label}
      startContent={
        <>
          {icon}
          {startContent}
        </>
      }
      endContent={
        <>
          {endIcon}
          {endContent}
        </>
      }
    >
      {t(label)}
    </NextButton>
  );
}
