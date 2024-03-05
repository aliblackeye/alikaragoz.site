import Button from "@components/button";
import Popover, { IPopoverProps } from "@components/popover";
import { STATUS } from "@constants/status";
import { useI18n } from "@locales/client";

// omit content
type PopoverProps = Omit<IPopoverProps, "content">;

interface IPopconfirmProps extends PopoverProps {
  label: string;
  onCancel: () => void;
  onConfirm: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

export default function Popconfirm(props: IPopconfirmProps) {
  // Props
  const {
    confirmLabel,
    cancelLabel,
    children,
    onCancel,
    onConfirm,
    label,
    ...others
  } = props;

  const t = useI18n() as any;

  return (
    <Popover
      {...others}
      content={
        <div className="delete-popover p-2">
          <h4 className="popover-title mb-2">{t(`${label}`)}</h4>
          <div className="flex gap-2 justify-end">
            <Button
              size="sm"
              status={STATUS.DANGER}
              label={cancelLabel || t("FORM_ELEMENTS.CTA.CANCEL")}
              onClick={() => {
                onCancel();
              }}
            />
            <Button
              size="sm"
              label={confirmLabel || t("FORM_ELEMENTS.CTA.CONFIRM")}
              status={STATUS.SUCCESS}
              onClick={() => {
                onConfirm();
              }}
            />
          </div>
        </div>
      }
      placement="top"
    >
      {children}
    </Popover>
  );
}
