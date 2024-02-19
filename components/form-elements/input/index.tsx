import { InputProps, Input as NextInput } from "@nextui-org/react";


// Locales
import { useI18n } from "@locales/client";

// Styles
import "@styles/_input.scss";

interface IInputProps extends InputProps {
    name: string;
}

export default function Input(props: IInputProps) {

    // Props
    const { name, label, placeholder, labelPlacement = "outside", errorMessage, className } = props;

    // Variables
    const t = useI18n() as any;

    return (
        <NextInput
            {...props}
            name={name}
            className={`pawder-input ${className}`}
            label={t(label)}
            errorMessage={t(errorMessage)}
            placeholder={t(placeholder)}
            labelPlacement={labelPlacement}
        />
    )
}
