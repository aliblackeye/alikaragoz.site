import { useChangeLocale, useCurrentLocale, useI18n } from "@locales/client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { CgMenuRight, CgMenuLeft } from "react-icons/cg";
import { FiMoon } from "react-icons/fi";

import "@styles/_panel-header.scss";

interface IHeaderProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (isCollapsed: boolean) => void;
}

export default function Header(props: IHeaderProps) {
  // Destructuring props
  const { isSidebarCollapsed, setIsSidebarCollapsed } = props;

  // Locales
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale() as any;
  const t = useI18n() as any;

  // States
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChangeLocale = () => {
    if (locale === "en") {
      changeLocale("tr");
    }
    if (locale === "tr") {
      changeLocale("en");
    }
  };

  // Effects
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
    if (!darkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="panel-header">
      <div className="header-left">
        <div
          className="menu-trigger"
          onClick={() => {
            setIsSidebarCollapsed(!isSidebarCollapsed);
          }}
        >
          {!isSidebarCollapsed ? (
            <CgMenuLeft size={18} />
          ) : (
            <CgMenuRight size={18} />
          )}
        </div>
      </div>

      <div className="header-right">
        <div className="language-switch" onClick={handleChangeLocale}>
          <Image
            src={`/images/${locale}.png`}
            alt="flag"
            width={1920}
            height={1920}
          />
        </div>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className="dark-mode-wrapper"
        >
          {darkMode ? <FiMoon size={18} /> : <BsSunFill size={18} />}
        </div>
      </div>
    </header>
  );
}
