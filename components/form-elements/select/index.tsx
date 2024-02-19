"use client";

// Libs
import { Select as NextSelect, SelectItem, SelectProps } from '@nextui-org/react'

import { useI18n } from '@locales/client';

// Styles
import '@styles/_select.scss';

export type SelectItemType = {
    key: string;
    value: string;
    label: string;
}


// children zorunlu olmamalı
type MergedSelectProps = Omit<SelectProps, 'children'>;

interface ISelectProps extends MergedSelectProps {
    items: SelectItemType[];
}



export default function Select(props: ISelectProps) {

    // Props
    const { items, label, placeholder, labelPlacement = "outside", errorMessage, className } = props;

    // Locales
    const t = useI18n() as any;

    return (
        <NextSelect
            {...props}
            label={t(`${label}`)}
            placeholder={t(`${placeholder}`)}
            labelPlacement={labelPlacement}
            errorMessage={t(errorMessage)}
            className={`pawder-select ${className}`}
        >
            {items?.map((item) => (
                <SelectItem key={item.key} value={item.value}>
                    {t(`${item.label}`)}
                </SelectItem>
            ))}
        </NextSelect>
    )
}
