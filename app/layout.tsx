// Fonts
import { fonts } from "@fonts/fonts";

// Styles
import "swiper/css/bundle";
import "@styles/globals.scss";

export const metadata = {
  title: "Ali Karagoz | Full Stack Developer",
  description: "Full Stack Developer",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body className={`${fonts.satoshi.className}`}>{children}</body>
    </html>
  );
}
