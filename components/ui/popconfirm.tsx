'use client';

import { ReactNode, useState } from 'react';

import { cn } from '@utils/cn';

import { Button } from './form-elements/button';
import { Popover } from './popover';

interface IPopconfirmProps {
  children: ReactNode;
  label?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export function Popconfirm(props: IPopconfirmProps) {
  const { children, label, onCancel, onConfirm } = props;

  const [show, setShow] = useState(false);

  return (
    <Popover
      align="center"
      side="top"
      open={show}
      onOpenChange={(visible) => {
        setShow(visible);
      }}
      content={
        <div className="space-y-2">
          <p className={cn('popconfirm-label', 'font-medium')}>{label}</p>

          <div
            className={cn('popconfirm-actions', 'flex', 'justify-end', 'gap-2')}
          >
            <Button
              label="FORM_ELEMENTS.CTA.CONFIRM"
              onClick={() => {
                onConfirm && onConfirm();

                setShow(false);
              }}
            />

            <Button
              label="FORM_ELEMENTS.CTA.CANCEL"
              onClick={() => {
                onCancel && onCancel();

                setShow(false);
              }}
            />
          </div>
        </div>
      }
    >
      {children}
    </Popover>
  );
}
