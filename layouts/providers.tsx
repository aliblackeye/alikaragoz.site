'use client';

import { useState } from 'react';

import { I18nProviderClient } from '@locales/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function Providers({
  children,
  locale,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <I18nProviderClient locale={locale} /* fallback={<p>Loading...</p>} */>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </I18nProviderClient>
  );
}
