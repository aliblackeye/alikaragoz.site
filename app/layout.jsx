import Container from "@/components/Container";
import Header from "@/components/Header";
import ClientLayout from "./ClientLayout";

import { Inter } from "next/font/google";

// Styles
import "./globals.scss";
import "swiper/css/bundle";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ali Karagoz | Software Developer",
  description: "Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className={inter.className}>
        <ClientLayout>
          <Container>
            <Header />
            {children}
          </Container>
        </ClientLayout>
      </body>
    </html>
  );
}
