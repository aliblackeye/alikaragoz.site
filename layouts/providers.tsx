'use client'

import { I18nProviderClient } from '@locales/client';


export function Providers({ children, locale }: { locale: string, children: React.ReactNode }) {
    return (
        <I18nProviderClient locale={locale} /* fallback={<p>Loading...</p>} */>
            {children}
        </I18nProviderClient>
    )
}

