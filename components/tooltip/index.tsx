"use client";
import { ReactNode } from "react";
import { Tooltip as NextTooltip } from "@nextui-org/react";
import { useI18n } from "@locales/client";

interface ITooltipProps {
  children: any;
  showArrow?: boolean;
  content: ReactNode | string;
}

export default function Tooltip(props: ITooltipProps) {
  // Props
  const { children, showArrow = true, content } = props;

  const t = useI18n() as any;

  return (
    <NextTooltip
      {...props}
      showArrow={showArrow}
      content={typeof content === "string" ? t(content) : content}
    >
      {children}
    </NextTooltip>
  );
}
