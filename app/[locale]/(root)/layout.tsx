import type { Metadata } from 'next'
import { getI18n } from "@locales/server";

// Layouts
import { Providers } from "@layouts/providers";
import ClientLayout from "@layouts/client-layout";

export async function generateMetadata(): Promise<Metadata> {

  const t = await getI18n() as any;

  return {
    title: {
      template: 'Ali Karagoz | %s',
      default: t('GLOBAL.PAGE_TITLES.HOME'), // a default is required when creating a template
    }
  }
}

export default function RootLayout({ params: { locale }, children }: { params: { locale: string }, children: React.ReactNode }) {
  return (
    <Providers locale={locale}>
      <ClientLayout>
        {children}
      </ClientLayout>
    </Providers>
  );
}