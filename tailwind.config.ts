import { fontFamily } from 'tailwindcss/defaultTheme';

import type { Config } from 'tailwindcss';

// ? Renkleri dinamik olarak oluşturmak için kullanılan fonksiyon. CSS tanımları olmazsa renkler çalışmaz.
import { colorSchemaGenerator } from './common/utils/colorSchemaGenerator';

// ? Renkleri css'ten aldığımız için sabitleri kullanmamıza gerek kalmıyor.
/* import { COLORS } from './common/constants/colors'; */

const config = {
  darkMode: ['class'],

  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './templates/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1280px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            h1: {
              fontSize: '32px',
              fontWeight: '700',
            },
            h2: {
              fontSize: '28px',
              fontWeight: '600',
            },
            // Diğer özelleştirmeler...
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        // ? Renkleri css'ten aldığımız için sabitleri kullanmamıza gerek kalmıyor.
        /* ...COLORS, */
        white: 'hsl(var(--white))',
        black: 'hsl(var(--black))',
        shadow: 'hsl(var(--shadow))',
        ...colorSchemaGenerator(),
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

export default config;
