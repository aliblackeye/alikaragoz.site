"use client";

import { useI18n } from "@locales/client";
import {
  Popover as NextPopover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

export interface IPopoverProps {
  children: any;
  content: any;
  placement?: "bottom" | "left" | "right" | "top";
  showArrow?: boolean;
  backdrop?: "opaque" | "blur" | "transparent";
  isOpen: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function Popover(props: IPopoverProps) {
  // Props
  const {
    children,
    content,
    placement = "left",
    showArrow = true,
    backdrop = "opaque",
    isOpen,
    onOpenChange,
  } = props;

  const t = useI18n() as any;

  return (
    <NextPopover
      isOpen={isOpen}
      placement={placement}
      showArrow={showArrow}
      backdrop={backdrop}
      onOpenChange={onOpenChange}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        {typeof content === "string" ? t(content) : content}
      </PopoverContent>
    </NextPopover>
  );
}
