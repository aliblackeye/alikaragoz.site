import { COLORS } from '../constants/colors';

export const colorSchemaGenerator = () => {
  const schema: any = {};
  for (const color in COLORS) {
    if (color === 'white' || color === 'black') continue;

    schema[color] = {
      900: `hsl(var(--${color}-900))`,
      800: `hsl(var(--${color}-800))`,
      700: `hsl(var(--${color}-700))`,
      600: `hsl(var(--${color}-600))`,
      500: `hsl(var(--${color}-500))`,
      400: `hsl(var(--${color}-400))`,
      300: `hsl(var(--${color}-300))`,
      200: `hsl(var(--${color}-200))`,
      100: `hsl(var(--${color}-100))`,
      50: `hsl(var(--${color}-50))`,
      25: `hsl(var(--${color}-25))`,
    };
  }

  return schema;
};
