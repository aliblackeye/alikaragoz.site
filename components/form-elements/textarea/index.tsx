"use client"

// Libs
import { Textarea as NextTextarea, TextAreaProps } from "@nextui-org/react";

// Locales
import { useI18n } from "@locales/client";

interface ITextAreaProps extends TextAreaProps {
    name: string;
}

export default function Textarea(props: ITextAreaProps) {

    // Props
    const { label, placeholder, labelPlacement = "outside", errorMessage } = props;

    // Locales
    const t = useI18n() as any;
    return (
        <NextTextarea
            {...props}
            labelPlacement={labelPlacement}
            label={t(label)}
            placeholder={t(placeholder)}
            errorMessage={t(errorMessage)}
        />
    )
}
