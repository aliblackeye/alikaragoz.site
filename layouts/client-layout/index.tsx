"use client";

// Libs
import { useEffect } from "react";
import Image from "next/image";

// Layouts
import Footer from "@layouts/footer";

import "./styles.scss";
import Header from "@layouts/header";

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
        <Image src={"/top.png"} alt="top" width={1} height={1} />

      </div>
      {children}
      <div className="bottom-bg">
        <Image src={"/bottom.png"} alt="bottom" width={1} height={1} />
        <Footer />
      </div>
    </>
  );
}
