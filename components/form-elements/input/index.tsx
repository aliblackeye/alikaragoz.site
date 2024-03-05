// Locales
import { useI18n } from '@locales/client';
import { InputProps, Input as NextInput } from '@nextui-org/react';

// Styles
import '@styles/_input.scss';

interface IInputProps extends InputProps {
  name: string;
}

export default function Input(props: IInputProps) {
  // Props
  const {
    name,
    label,
    placeholder = ' ',
    labelPlacement = 'outside',
    errorMessage,
    className,
    size = 'sm',
    variant,
  } = props;

  // Variables
  const t = useI18n() as any;

  return (
    <NextInput
      {...props}
      name={name}
      className={`nextui-input ${className}`}
      label={t(label)}
      errorMessage={t(errorMessage)}
      placeholder={t(placeholder)}
      labelPlacement={labelPlacement}
      variant={variant}
      size={size}
    />
  );
}
