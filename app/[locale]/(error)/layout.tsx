// Layouts
import { getI18n } from '@locales/server';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const t = (await getI18n()) as any;

  return {
    title: {
      template: 'Ali Karagoz | %s',
      default: t('NOT_FOUND.TITLE'), // a default is required when creating a template
    },
  };
}

export default function ErrorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
