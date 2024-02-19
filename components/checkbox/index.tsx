"use client"

// Libs
import { Checkbox as NextCheckbox, CheckboxProps } from "@nextui-org/checkbox";

// Locales
import { useI18n } from "@locales/client";
import { useRef } from "react";

// Interfaces
interface ICheckboxProps extends CheckboxProps {
    label: string | React.ReactNode;
    name: string;
    onChange?: (e: any) => void;
    isTranslated?: boolean;
    checked?: boolean;
}

export default function Checkbox(props: ICheckboxProps) {

    // Props
    const { label, name, onChange, isTranslated, checked } = props;
    const ref = useRef<any>(null);



    // Variables
    const t = useI18n() as any;



    return (
        <>
            <NextCheckbox {...props} checked={checked} ref={ref} name={name}   >
                {isTranslated ? label : t(label)}
            </NextCheckbox>
        </>

    )
}
