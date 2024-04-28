import { Providers } from '@layouts/providers';

export const metadata = {
  title: {
    template: 'Ali Karagöz | %s',
    default: 'Home', // a default is required when creating a template
  },
};

export default function AppLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return <Providers locale={locale}>{children}</Providers>;
}
