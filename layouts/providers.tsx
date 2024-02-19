"use client";

import { I18nProviderClient } from "@locales/client";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({
  children,
  locale,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <I18nProviderClient locale={locale} /* fallback={<p>Loading...</p>} */>
      <NextUIProvider> {children}</NextUIProvider>
    </I18nProviderClient>
  );
}
