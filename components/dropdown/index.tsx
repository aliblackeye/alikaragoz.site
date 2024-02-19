import { STATUS } from "@interfaces/status";
import { Dropdown as NextDropdown, DropdownTrigger, DropdownMenu, DropdownItem, Selection, } from "@nextui-org/react";

type DropdownItemType = {
    content: string;
    key: string;
    className?: string;
    color?: STATUS;
    href?: string;
    onClick?: () => void;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    shortcut?: string;
}

interface IDropdownProps {
    children: React.ReactNode;
    hoverStatus?: STATUS;
    items: DropdownItemType[];
    selectionMode?: "single" | "multiple" | "none";
    selectedKeys?: string[];
    onSelectionChange?: (keys: Selection) => void;
    onAction?: (key: string) => void;
    disabledKeys?: string[];
}

export default function Dropdown(props: IDropdownProps) {

    // Props
    const { children, hoverStatus = STATUS.primary, items, selectionMode, selectedKeys, onSelectionChange, onAction, disabledKeys, } = props;

    return (
        <NextDropdown>
            <DropdownTrigger>
                {children}
            </DropdownTrigger>
            <DropdownMenu
                disabledKeys={disabledKeys}
                selectionMode={selectionMode}
                selectedKeys={selectedKeys || []}
                onSelectionChange={onSelectionChange}
                aria-label="Dropdown Menu"
                color={hoverStatus as any}
                variant={"bordered"}
                onAction={onAction as any}
            >
                {items.map((item, index) => (
                    <DropdownItem
                        onClick={item.onClick}
                        key={index}
                        href={item.href}
                        className={item.className}
                        startContent={item.startContent}
                        endContent={item.endContent}
                        shortcut={item.shortcut}
                        color={item.color as any}>
                        {item.content}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </NextDropdown>
    )
}
