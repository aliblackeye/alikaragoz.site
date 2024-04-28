import { getI18n } from '@locales/server';

import type { Metadata } from 'next';

// Components
import AuthLayout from '@layouts/auth-layout';

export async function generateMetadata(): Promise<Metadata> {
  const t = (await getI18n()) as any;

  return {
    title: {
      template: 'Ali Karagoz | %s',
      default: t('PAGE_TITLES.HOME'), // a default is required when creating a template
    },
  };
}

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
