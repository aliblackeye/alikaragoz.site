import { type } from 'os';

import React, { ChangeEvent, ReactNode, useRef, useState } from 'react';

import { useI18n } from '@locales/client';

import { COLORS } from '@constants/colors';
import { FILE_TYPES } from '@constants/file-types';
import ICONS from '@constants/icons';
import { FONT_SIZE, SIZE } from '@constants/sizes';
import { WEIGHT } from '@constants/weight';

import { cn } from '@utils/cn';

import { Icon } from '@components/ui/icon';

import { Text } from '../text';

type MergedProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'prefix' | 'suffix'
>;

export interface InputProps extends MergedProps {
  prefix?: ReactNode;
  suffix?: ReactNode;
  className?: string;
  placeholder?: string;
  fileTypes?: FILE_TYPES[];
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'file'
    | 'number'
    | 'tel'
    | 'url'
    | 'color'
    | 'time';
  name: string;
  iconLeading?: ReactNode;
  leadingDropdown?: ReactNode;
  trailingDropdown?: ReactNode;
  leadingText?: string;
  trailingText?: string;
  helpIcon?: ReactNode;
  size?: 'sm' | 'md';
  disabled?: boolean;
  readOnly?: boolean;
  value?: string;
  defaultValue?: string;
  limit?: number;
  required?: boolean;
  onChange?: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | File
    >
  ) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const {
      className,
      prefix,
      suffix,
      size = 'sm',
      helpIcon,
      iconLeading,
      leadingDropdown,
      leadingText,
      trailingDropdown,
      trailingText,
      disabled,
      limit,
      fileTypes,
      placeholder,
      onChange,
      ...rest
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const t = useI18n() as any;

    // Functions
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const selectedFile = files[0];
        if (onChange) {
          onChange(selectedFile as any);
        }
      }
    };

    const handleFileLabelClick = () => {
      if (inputRef.current) {
        inputRef.current.click();
      }
    };

    return (
      <div className={cn('shadcn-input-wrapper', 'w-full', className)}>
        <div
          className={cn(
            'shadcn-input-container',
            `flex bg-background ${rest.type === 'file' ? 'h-auto' : 'h-10 '} w-full rounded-md border border-gray-300 text-sm shadow-[0px_1px_2px_0px_var(--shadow)]`,
            `${rest.type === 'color' && 'shadcn-input-color'}`,
            {
              'bg-gray-50': disabled,
            }
          )}
        >
          {leadingText && (
            <span
              className={cn(
                'shadcn-input-leading-text',
                'border-r border-gray-300 text-gray-600',
                {
                  'px-[12px] py-[8px]': size === 'sm',
                }
              )}
            >
              {t(leadingText)}
            </span>
          )}

          {iconLeading && (
            <span
              className={cn(
                'shadcn-input-icon-leading',
                'flex items-center justify-center pl-2 text-gray-500 '
              )}
            >
              {iconLeading}
            </span>
          )}

          <div className="relative flex h-auto w-full flex-col">
            <input
              disabled={disabled}
              maxLength={limit}
              onChange={rest.type === 'file' ? handleFileChange : onChange}
              accept={
                fileTypes
                  ? fileTypes.map((type) => `${type}`).join(', ')
                  : undefined
              }
              className={cn(
                `shadcn-input general-transition flex h-10  w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background   placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${iconLeading ? 'px-1 py-2' : 'px-[14px] py-[10px]'} ring-offset-primary-300 overflow-hidden text-gray-900 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:text-gray-500`,
                `${rest.type === 'color' && 'appearance:none h-full'}`
              )}
              ref={inputRef}
              {...rest}
              hidden={rest.type === 'file'}
            />

            {rest.type === 'file' && (
              <div className="flex">
                {/* CHOSEN FILE */}
                <div className="text-md inset-y-0 flex w-[70%] items-center border-r px-4 py-2 text-gray-500 ">
                  <span className="flex-grow overflow-hidden">
                    {rest.type === 'file' && rest.value
                      ? rest.value.split('\\').pop()?.split('/').pop()
                      : 'No file chosen.'}
                  </span>
                </div>

                {/* SELECT FILE */}
                <label
                  className="general-transition flex min-w-fit cursor-pointer select-none items-center gap-2 rounded-e-lg border-l border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
                  htmlFor="file-upload"
                  onClick={handleFileLabelClick}
                >
                  <Icon
                    icon={ICONS.PLUS_CIRCLE}
                    size={SIZE.MD}
                    color={COLORS.gray[700]}
                  />

                  <Text
                    element="h1"
                    size={FONT_SIZE.MD}
                    weight={WEIGHT.SEMIBOLD}
                    color={COLORS.gray[700]}
                  >
                    {t(placeholder) || 'Upload file'}
                  </Text>
                </label>
              </div>
            )}
          </div>

          {trailingText && (
            <span
              className={cn(
                'shadcn-input-trailing-text',
                'min-w-[64px] border-l border-gray-300 text-center text-gray-600',
                {
                  'px-[12px] py-[8px]': size === 'sm',
                }
              )}
            >
              {t(trailingText)}
            </span>
          )}

          {limit && (
            <span
              className={cn(
                'shadcn-input-limit-text',
                'min-w-[64px] border-l border-gray-300 text-center text-gray-600',
                {
                  'px-[12px] py-[8px]': size === 'sm',
                }
              )}
            >
              {typeof rest.value === 'string' ? rest.value.length : 0}/{limit}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
