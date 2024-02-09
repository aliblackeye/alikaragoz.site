// Layouts
import { Providers } from "@layouts/providers";


import type { Metadata } from 'next'
import { getI18n } from "@locales/server";
export async function generateMetadata(): Promise<Metadata> {

    const t = await getI18n() as any;

    return {
        title: {
            template: 'Pawder | %s',
            default: t('GLOBAL.NOT_FOUND.TITLE'), // a default is required when creating a template
        }
    }
}

export default function ErrorLayout({ params: { locale }, children }: { params: { locale: string }, children: React.ReactNode }) {
    return (
        <Providers locale={locale}>
            {children}
        </Providers>
    );
}
