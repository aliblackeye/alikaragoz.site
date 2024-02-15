"use client";

import { useEffect, useState } from "react";

import "@styles/_panel-layout.scss";
import { usePathname, useRouter } from "next/navigation";

// Components
import Sidebar from "@layouts/panel-layout/_partials/sidebar";
import Header from "@layouts/panel-layout/_partials/header";

interface IPanelLayoutProps {
  children: React.ReactNode;
}

export default function PanelLayout(props: IPanelLayoutProps) {
  // Destructuring props
  const { children } = props;

  const pathname = usePathname();
  const router = useRouter();

  // States
  const [token, setToken] = useState(null);

  // Effects
  useEffect(() => {
    // Tema işlemleri
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.classList.add(theme);
    }

    // Token işlemleri
    const tokenFromStorage = localStorage.getItem("token");
    setToken(tokenFromStorage);

    if (!tokenFromStorage && pathname !== "/panel-login") {
      router.push("/panel-login");
    } else if (tokenFromStorage && pathname === "/panel-login") {
      router.push("/panel/dashboard");
    }
  }, [pathname, router]);

  if (!token) {
    return <>{children}</>;
  }

  // Token yoksa, çocukları doğrudan render edin

  return (
    <div className="panel-layout">
      <Sidebar />
      <div className="panel-header-and-content">
        <Header />
        <main className="panel-content">{children}</main>
      </div>
    </div>
  );
}
