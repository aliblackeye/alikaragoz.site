'use client';

import { I18nProviderClient } from '@locales/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function Providers({
  children,
  locale,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <I18nProviderClient locale={locale} /* fallback={<p>Loading...</p>} */>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </I18nProviderClient>
  );
}
