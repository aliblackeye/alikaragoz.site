import Button from "@components/button";
import { ModalProps, Modal as NextModal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

interface IModalProps extends ModalProps {
    isOpen: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
}

export default function Modal(props: IModalProps) {

    const { onOpenChange, size, onClose, header, children, footer, onCancel, onConfirm } = props;

    return (

        <NextModal
            size={size}
            onOpenChange={onOpenChange}
            {...props}
        >
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1">{header}</ModalHeader>
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        {footer ? footer :
                            <>
                                <Button label="cta.cancel" color="danger" variant="bordered" onPress={
                                    () => {
                                        onCancel && onCancel()
                                        onClose && onClose()

                                    }} />
                                <Button label="cta.confirm" color="primary" variant="solid" onPress={
                                    () => {
                                        onConfirm && onConfirm()
                                        onClose && onClose()
                                    }
                                } />
                            </>
                        }

                    </ModalFooter>
                </>
            </ModalContent>
        </NextModal>
    )
}
