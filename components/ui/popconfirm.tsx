'use client';

import { ReactNode, useState } from 'react';

import { useI18n } from '@locales/client';

import { COLORS } from '@constants/colors';
import ICONS from '@constants/icons';
import { FONT_SIZE, SIZE } from '@constants/sizes';
import { BUTTON_STATUS, TEXT_STATUS } from '@constants/status';
import { WEIGHT } from '@constants/weight';

import { cn } from '@utils/cn';

import { Button } from './form-elements/button';
import { Icon } from './icon';
import { Popover } from './popover';
import { Text } from './text';

interface IPopconfirmProps {
  children: ReactNode;
  title?: string;
  description?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function Popconfirm(props: IPopconfirmProps) {
  const { children, title, description, onCancel, onConfirm } = props;

  const [show, setShow] = useState(false);

  const t = useI18n() as any;

  return (
    <Popover
      align="center"
      side="top"
      open={show}
      onOpenChange={(visible) => {
        setShow(visible);
      }}
      content={
        <div className="popconfirm-wrapper flex gap-5">
          <div className="popconfirm-left">
            <div
              className={cn(
                'warn-icon',
                `rounded-full border-[6px] border-primary-50 bg-primary-100 p-1`
              )}
            >
              <Icon
                icon={ICONS.ERROR}
                size={SIZE.LG}
                color={COLORS.primary[600]}
              />
            </div>
          </div>
          <div className="popconfirm-right">
            <div className="popconfirm-information space-y-1">
              <Text
                element="h3"
                className={cn('popconfirm-title')}
                color={COLORS.gray[900]}
                size={FONT_SIZE.SM}
                weight={WEIGHT.SEMIBOLD}
              >
                {t(title || 'COMPONENTS.POPCONFIRM.DEFAULT_TITLE')}
              </Text>
              <Text
                element="p"
                className={cn('popconfirm-description')}
                color={COLORS.gray[600]}
                size={FONT_SIZE.SM}
                weight={WEIGHT.REGULAR}
              >
                {t(description || 'COMPONENTS.POPCONFIRM.DEFAULT_DESCRIPTION')}
              </Text>
            </div>

            <div className={cn('popconfirm-actions', 'flex', 'gap-3')}>
              <Button
                label="FORM_ELEMENTS.CTA.NO"
                status={BUTTON_STATUS.GRAY}
                variant="link"
                onClick={() => {
                  onCancel && onCancel();
                  setShow(false);
                }}
              />

              <Button
                label="FORM_ELEMENTS.CTA.YES"
                status={BUTTON_STATUS.PRIMARY}
                variant="link"
                onClick={() => {
                  onConfirm && onConfirm();
                  setShow(false);
                }}
              />
            </div>
          </div>
        </div>
      }
    >
      {children}
    </Popover>
  );
}
