"use client";

import { useI18n } from "@locales/client";
import {
  Popover as NextPopover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";

interface IPopoverProps {
  children: any;
  content: any;
  placement?: "bottom" | "left" | "right" | "top";
}

export default function Popover(props: IPopoverProps) {
  // Props
  const { children, content, placement = "left" } = props;

  const t = useI18n() as any;

  return (
    <NextPopover {...props} placement={placement}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        {typeof content === "string" ? t(content) : content}
      </PopoverContent>
    </NextPopover>
  );
}
