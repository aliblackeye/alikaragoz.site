"use client";

// Libs
import { useEffect } from "react";
import Image from "next/image";

// Layouts
import Footer from "@layouts/root-layout/_partials/footer";

import "@styles/_root-layout.scss";
import Header from "@layouts/root-layout/_partials/header";

interface IClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout(props: IClientLayoutProps) {
  // Destructuring props
  const { children } = props;

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      document.documentElement.classList.add(theme);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="top-bg">
        <Image src={"/images/top.png"} alt="top" width={1920} height={1080} />
      </div>
      {children}
      <div className="bottom-bg">
        <Image
          src={"/images/bottom.png"}
          alt="bottom"
          width={1920}
          height={1080}
        />
        <Footer />
      </div>
    </>
  );
}
