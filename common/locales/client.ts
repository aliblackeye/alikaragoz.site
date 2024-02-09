"use client"

import { createI18nClient } from 'next-international/client';

export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, defineLocale, useCurrentLocale } =
  createI18nClient(
    {
      en: async () => {
        /* await new Promise(resolve => setTimeout(resolve, 0)); */
        return import('./dictionaries/en');
      },
      tr: async () => {
        /* await new Promise(resolve => setTimeout(resolve, 0)); */
        return import('./dictionaries/tr');
      },
    },
    {
      // Uncomment to set base path
      // basePath: '/base',
      // Uncomment to use custom segment name
      // segmentName: 'locale',
      // Uncomment to set fallback locale
      // fallbackLocale: en,
    },
  );
