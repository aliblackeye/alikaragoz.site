'use client';

import { DragEvent, FC, useState } from 'react';

import { COLORS } from '@constants/colors';
import { FILE_TYPES } from '@constants/file-types';
import ICONS from '@constants/icons';
import { FONT_SIZE, SIZE } from '@constants/sizes';
import { WEIGHT } from '@constants/weight';

import { cn } from '@utils/cn';
import { createNotification } from '@utils/createNotification';

import { Icon } from './icon';
import { Text } from './text';

interface IDragAndDropInputProps {
  name?: string;
  disabled?: boolean;
  maxSize?: {
    size: number;
    unit: 'KB' | 'MB' | 'GB';
  };
  className?: string;
  fileTypes?: FILE_TYPES[];
  onChange?: (file: File) => void;
}

export const DragAndDropInput = (props: IDragAndDropInputProps) => {
  // Props
  const {
    name,
    disabled,
    maxSize = {
      size: 2,
      unit: 'MB',
    },
    fileTypes,
    onChange,
    className,
  } = props;

  // States
  const [isOver, setIsOver] = useState(false);

  // Functions
  const getSizeMultiplier = (unit: 'KB' | 'MB' | 'GB'): number => {
    switch (unit) {
      case 'KB':
        return 1024;
      case 'MB':
        return 1024 * 1024;
      case 'GB':
        return 1024 * 1024 * 1024;
      default:
        return 1;
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);
  };

  const handleDrop = (
    event: DragEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setIsOver(false);

    if ('dataTransfer' in event && event.dataTransfer.files) {
      const file = Array.from(event.dataTransfer.files)[0];

      if (onChange) {
        onChange(file);
      }
    } else if (
      'target' in event &&
      (event.target as HTMLInputElement).files !== null
    ) {
      const file = Array.from(
        (event.target as HTMLInputElement).files as FileList
      )[0];

      if (file && file.size <= maxSize.size * getSizeMultiplier(maxSize.unit)) {
        if (onChange) {
          onChange(file);
        }
      } else {
        createNotification({
          title: 'File size is too large',
          description: `File size should be less than ${maxSize.size} ${maxSize.unit}`,
          status: 'danger',
        });
      }
    }
  };

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={className}
      >
        <label
          htmlFor="drag-and-drop-input"
          className={cn(
            `h-38 general-transition hover:border-primary-600 flex cursor-pointer flex-col items-center justify-center  rounded-lg border-2 border-gray-100 bg-white pb-6 pt-5`,
            isOver && 'bg-gray-200',
            disabled && 'pointer-events-none bg-gray-50'
          )}
        >
          {/* UPLOAD ICON */}
          <div
            className={`mb-3 rounded-full border-[6px] border-gray-50 bg-gray-100 p-2`}
          >
            <Icon icon={ICONS.UPLOAD_CLOUD} size={SIZE.LG} />
          </div>

          {/* TEXT */}
          <Text
            element="p"
            size={FONT_SIZE.SM}
            weight={WEIGHT.REGULAR}
            color={COLORS.black as string}
            className="mb-1"
          >
            <Text
              element="span"
              size={FONT_SIZE.SM}
              weight={WEIGHT.SEMIBOLD}
              color={COLORS.primary[700]}
              className={cn(disabled && '!text-gray-300')}
            >
              Click to upload
            </Text>{' '}
            or drag and drop
          </Text>

          {/* ACCEPTED FILES */}
          <Text
            element="p"
            size={FONT_SIZE.XS}
            weight={WEIGHT.REGULAR}
            color={COLORS.gray[600]}
          >
            {fileTypes
              ? fileTypes
                  .map((type) => `${type.toUpperCase()}`)

                  .join(', ')
              : undefined}{' '}
            (MAX. {maxSize.size} {maxSize.unit})
          </Text>

          <input
            type="file"
            name={name}
            disabled={disabled}
            hidden
            id="drag-and-drop-input"
            accept={
              fileTypes
                ? fileTypes.map((type) => `${type}`).join(', ')
                : undefined
            }
            onChange={(e) => {
              handleDrop(e);
            }}
          />
        </label>
      </div>
    </>
  );
};
