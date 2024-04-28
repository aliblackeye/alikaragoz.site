import { ReactNode } from 'react';

import { useRouter } from 'next/navigation';

import { DialogClose } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { IconType } from 'react-icons';

import { COLORS } from '@constants/colors';
import ICONS from '@constants/icons';
import { BUTTON_SIZE, FONT_SIZE, SIZE } from '@constants/sizes';
import { BUTTON_STATUS, STATUS, TEXT_STATUS } from '@constants/status';
import { WEIGHT } from '@constants/weight';

import { cn } from '@utils/cn';

import { Button, ButtonProps } from '../form-elements/button';
import { Icon } from '../icon';
import { Text } from '../text';
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTrigger,
} from './modal';

/* 
  <ConfirmModal
  title="Logging out"
  description="Are you sure you want to log out? If you log out now, your onboarding process will be unsaved."
  icon={{
    iconType: ICONS.LOGOUT,
    status: STATUS.BLACK,
    size: SIZE.LG,
  }}
  confirmButton={{
    label: 'Log out',
    status: BUTTON_STATUS.WHITE,
    size: BUTTON_SIZE.LG,
    onClick: () => {},
  }}
  cancelButton={{
    label: 'Cancel',
    status: BUTTON_STATUS.WHITE,
    size: BUTTON_SIZE.LG,
    onClick: () => {},
  }}
  >
  <Button
    label="Log out"
    status={BUTTON_STATUS.WHITE}
    icon={{
      iconType: ICONS.LOGOUT,
      status: STATUS.BLACK,
      size: SIZE.LG,
    }}
  />
  </ConfirmModal>
*/

interface ConfirmModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
  title?: string;
  description?: string;
  icon: {
    iconType: IconType;
    status: STATUS;
    size: SIZE;
  };
  confirmButton: ButtonProps;
  cancelButton: ButtonProps;
  asChild?: boolean;
}

export default function ConfirmModal(props: ConfirmModalProps) {
  // Props
  const {
    children,
    title,
    open,
    onOpenChange,
    description,
    cancelButton,
    confirmButton,
    icon,
    asChild = false,
  } = props;

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      {asChild && <ModalTrigger asChild>{children}</ModalTrigger>}

      <ModalContent className="sm:max-w-[400px]">
        <ModalHeader>
          <div
            className={cn(
              `flex max-h-[48px] max-w-[48px] items-center justify-center rounded-full border-8 p-4`,
              {
                'border-danger-50 bg-danger-100':
                  icon?.status === STATUS.DANGER,
                'border-success-50 bg-success-100':
                  icon?.status === STATUS.SUCCESS,
                'border-warning-50 bg-warning-100':
                  icon?.status === STATUS.WARNING,
                'border-info-50 bg-info-100': icon?.status === STATUS.INFO,
                'border-black bg-white': icon?.status === STATUS.BLACK,
              }
            )}
          >
            <Icon
              icon={icon?.iconType}
              status={icon?.status}
              size={icon?.size}
            />
          </div>
        </ModalHeader>
        <div className="mb-4 flex flex-col gap-1">
          <Text
            element="h1"
            status={TEXT_STATUS.BLACK}
            size={FONT_SIZE.LG}
            weight={WEIGHT.SEMIBOLD}
          >
            {title}
          </Text>
          <Text
            element="p"
            status={TEXT_STATUS.GRAY}
            size={FONT_SIZE.SM}
            weight={WEIGHT.REGULAR}
          >
            {description}
          </Text>
        </div>
        <ModalFooter className="flex gap-3">
          <DialogClose asChild>
            <Button {...cancelButton} className="flex-1" />
          </DialogClose>
          <Button type="submit" className="flex-1" {...confirmButton} />
        </ModalFooter>

        <DialogClose
          asChild
          onClick={() => onOpenChange && onOpenChange(false)}
        >
          <div className="focus-visible:ring-primary-100 absolute right-4 top-4 cursor-pointer rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-offset-1 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <Button
              icon={{
                iconType: ICONS.X,
                size: SIZE.LG,
                status: STATUS.GRAY,
              }}
              status={BUTTON_STATUS.TERTIARY}
              size={BUTTON_SIZE.LG}
              variant="ghost"
            />
          </div>
        </DialogClose>
      </ModalContent>
    </Modal>
  );
}
