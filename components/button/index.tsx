"use client";

// Libs
import { useRouter } from "next/navigation";

// Next UI
import { Button as NextButton, ButtonProps } from "@nextui-org/button";

// Interfaces
import { STATUS } from "@interfaces/status";

// Locales
import { useI18n } from "@locales/client";

import "@styles/_button.scss";

interface IButtonProps extends ButtonProps {
  label: string;
  status?: STATUS;
}

export default function Button(props: IButtonProps) {
  // Props
  const { status = STATUS.primary, label, className, href, onClick } = props;

  // Variables
  const router = useRouter();

  const t = useI18n() as any;

  return (
    <NextButton
      {...props}
      radius="full"
      onClick={(e) => {
        if (href) {
          router.push(href);
          return;
        }
        onClick && onClick(e);
      }}
      className={`pawder-button ${className}`}
      color={status as any}
    >
      {t(label)}
    </NextButton>
  );
}
