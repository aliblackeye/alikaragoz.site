// Fonts
import { fonts } from '@fonts/fonts';

import { Toaster } from '@components/ui/toaster';

// Styles
import 'swiper/css/bundle';
import '@styles/globals.scss';

import { ThemeProvider } from '@layouts/theme-provider';

export const metadata = {
  title: 'Ali Karagoz | Full Stack Developer',
  description: 'Full Stack Developer',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark min-h-screen font-sans antialiased">
      <body className={`${fonts.satoshi.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
