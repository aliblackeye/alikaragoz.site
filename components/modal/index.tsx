import { useI18n } from '@locales/client';
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Modal as NextModal,
} from '@nextui-org/react';

import STATUS from '@constants/status';

import Button from '@components/button';

interface IModalProps extends ModalProps {
  isOpen: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  onClose?: () => void;
  confirmText?: string;
  cancelText?: string;
  confirmStatus?: STATUS;
}

export default function Modal(props: IModalProps) {
  const {
    size,
    onClose,
    header,
    children,
    footer,
    onCancel,
    onConfirm,
    confirmText = 'FORM_ELEMENTS.CTA.CONFIRM',
    cancelText = 'FORM_ELEMENTS.CTA.CANCEL',
    confirmStatus = STATUS.PRIMARY,
    placement = 'center',
    title,
  } = props;

  const t = useI18n() as any;

  return (
    <NextModal
      {...props}
      size={size}
      onOpenChange={() => {
        onCancel && onCancel();
        onClose && onClose();
      }}
      placement={placement}
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col">
            <h1>{t(title)}</h1>
            {header && <div>{header}</div>}
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            {footer ? (
              footer
            ) : (
              <>
                <Button
                  label={cancelText}
                  status={STATUS.DANGER}
                  variant="light"
                  onPress={() => {
                    onCancel && onCancel();
                    onClose && onClose();
                  }}
                />
                <Button
                  label={confirmText}
                  status={confirmStatus}
                  variant="solid"
                  onPress={() => {
                    onConfirm && onConfirm();
                  }}
                />
              </>
            )}
          </ModalFooter>
        </>
      </ModalContent>
    </NextModal>
  );
}
