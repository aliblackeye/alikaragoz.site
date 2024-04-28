'use client';

import React, { ReactNode } from 'react';

import { toast } from '@hooks/use-toast';

import ICONS from '@constants/icons';
import { SIZE } from '@constants/sizes';
import { STATUS } from '@constants/status';

interface INotificationProps {
  title: string;
  description: ReactNode;
  status: 'success' | 'warning' | 'danger';
  placement?: string;
}

export const createNotification = (props: INotificationProps) => {
  const {
    title = 'Success!',
    description = 'Your action was successful!',
    status = 'success',
  } = props;

  toast({
    title,
    description,
    status,
    icon: {
      iconType:
        status === 'danger'
          ? ICONS.ERROR
          : status === 'success'
            ? ICONS.CHECK
            : ICONS.EXCLAMATION,

      size: SIZE.XL,

      status:
        status === 'danger'
          ? STATUS.DANGER
          : status === 'success'
            ? STATUS.SUCCESS
            : STATUS.WARNING,
    },
  });
};
