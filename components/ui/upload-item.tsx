import { COLORS } from '@constants/colors';
import ICONS from '@constants/icons';
import { BUTTON_SIZE, FONT_SIZE, SIZE } from '@constants/sizes';
import { BUTTON_STATUS, STATUS, TEXT_STATUS } from '@constants/status';
import { WEIGHT } from '@constants/weight';

import { Icon } from '@components/ui/icon';
import { Progress } from '@components/ui/progress';
import { Text } from '@components/ui/text';

import { Button, ButtonProps } from './form-elements/button';

function formatFileSize(bytes: number) {
  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  if (bytes < KB) {
    return bytes + ' bytes';
  } else if (bytes < MB) {
    return (bytes / KB).toFixed(2) + ' KB';
  } else if (bytes < GB) {
    return (bytes / MB).toFixed(2) + ' MB';
  } else {
    return (bytes / GB).toFixed(2) + ' GB';
  }
}

function itemTypeIcon(file: File, fileType: string, defaultIcon: any) {
  if (file.size > 0) {
    if (fileType.includes('image')) {
      return ICONS.UPLOAD_IMAGE;
    }
    if (fileType.includes('video')) {
      return ICONS.UPLOAD_VIDEO;
    }
    if (
      fileType.includes('pdf') ||
      fileType.includes('document') ||
      fileType.includes('application') ||
      fileType.includes('text') ||
      fileType.includes('doc')
    ) {
      return ICONS.ABOUT;
    } else {
      return ICONS.ABOUT;
    }
  } else {
    if (fileType.includes('image')) {
      return ICONS.UPLOAD_IMAGE;
    } else if (fileType.includes('video')) {
      return ICONS.UPLOAD_VIDEO;
    } else if (
      fileType.includes('pdf') ||
      fileType.includes('document') ||
      fileType.includes('application') ||
      fileType.includes('text') ||
      fileType.includes('doc')
    ) {
      return ICONS.ABOUT;
    } else {
      return ICONS.UPLOAD_FILE;
    }
  }
}

interface IUploadItemProps {
  file: File;
  index: number;
  handleRemove?: () => void;
  percentage?: number;
  disabled?: boolean;
}

export const UploadItem = (props: IUploadItemProps) => {
  const { file, index, handleRemove, percentage = 0, disabled } = props;

  return (
    <>
      <div
        key={index}
        className={`relative flex gap-4 rounded-lg border border-purple-600 bg-white p-4`}
      >
        {/* FILE ICON */}
        <div
          className={`self-start rounded-full p-1`}
          style={{
            border: `4px solid ${file.size > 0 ? COLORS.primary[50] : COLORS.danger[50]}`,
            backgroundColor:
              file.size > 0 ? COLORS.primary[100] : COLORS.danger[100],
          }}
        >
          <Icon
            className="h-5 w-5"
            icon={itemTypeIcon(file, file.type, ICONS.UPLOAD_FILE)}
            size={SIZE.XL}
            color={file.size > 0 ? COLORS.primary[600] : COLORS.danger[500]}
          />
        </div>

        {/* FILE INFO */}
        <div className="w-full">
          <div className="flex w-full flex-col">
            <Text
              element="h1"
              size={FONT_SIZE.MD}
              weight={WEIGHT.MEDIUM}
              color={file.size > 0 ? COLORS.gray[700] : COLORS.danger[700]}
            >
              {file?.name}
            </Text>

            <Text
              element="span"
              size={FONT_SIZE.SM}
              weight={WEIGHT.REGULAR}
              color={file.size > 0 ? COLORS.gray[600] : COLORS.danger[600]}
            >
              {formatFileSize(file.size)}
            </Text>
          </div>

          {/* PROGRESS */}
          <div className="flex items-center gap-3">
            <Progress
              value={percentage}
              status={STATUS.PRIMARY}
              className="w-full"
            />

            <Text
              element="p"
              size={FONT_SIZE.MD}
              weight={WEIGHT.MEDIUM}
              color={COLORS.gray[700]}
            >
              {percentage}%
            </Text>
          </div>
        </div>

        {/* REMOVE BUTTON */}
        <Button
          icon={{
            iconType: ICONS.TRASH,
            size: SIZE.LG,
            status: STATUS.GRAY,
          }}
          status={BUTTON_STATUS.TERTIARY}
          size={BUTTON_SIZE.SM}
          disabled={disabled}
          variant="ghost"
          onClick={handleRemove}
          className="absolute right-2 top-2"
        />
      </div>
    </>
  );
};
