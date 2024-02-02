import Container from "@components/container";
import Header from "@layouts/header";
import ClientLayout from "@layouts/client-layout";

// Fonts
import { fonts } from "@fonts/fonts";

export const metadata = {
    title: "Ali Karagoz | Full Stack Developer",
    description: "Full Stack Developer",
};

// Styles
import "swiper/css/bundle";
import "./globals.scss";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="dark">
            <body className={fonts.inter.className}>
                <ClientLayout>
                    <Container>
                        {children}
                    </Container>
                </ClientLayout>
            </body>
        </html>
    );
}