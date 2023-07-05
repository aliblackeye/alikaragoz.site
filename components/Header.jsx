"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineClose,
} from "react-icons/ai";
import { BsSunFill } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const links = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/work",
    label: "work",
  },
  {
    href: "/story",
    label: "story",
  },
  {
    href: "/about",
    label: "about",
  },
  {
    href: "/links",
    label: "links",
  },
];

const socials = [
  {
    href: "https://www.instagram.com/aliblackeye/",
    label: "instagram",
  },
  {
    href: "https://www.github.com/aliblackeye/",
    label: "github",
  },
  {
    href: "https://www.linkedin.com/in/aliblackeye/",
    label: "linkedin",
  },
  {
    href: "https://www.youtube.com/aliblackeye/",
    label: "youtube",
  },
];

export default function Header() {
  const [theme, setTheme] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", JSON.stringify("light"));
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    }
  };

  const handleHamburgerMenu = () => {
    const nav = document.querySelector(".navbar");
    if (isMenuOpen) {
      setIsMenuOpen(false);
      nav.classList.remove("show-menu");
    }
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      nav.classList.add("show-menu");
    }
  };

  useEffect(() => {
    const storageTheme = JSON.parse(localStorage.getItem("theme"));
    setTheme(storageTheme);
  }, []);

  return (
    <header>
      <nav className="navbar flex relative justify-end md:!opacity-100 md:!visible  md:justify-between items-start md:items-center text-white bg-white/5 drop-shadow-md border border-zinc-900 rounded-xl p-3 mb-16">
        <div className="header-left gap-6 md:!opacity-100 md:!visible !hidden md:!flex md:!justify-start">
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="hover:text-gray-400"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <ul className="socials gap-4 flex">
          <div
            onClick={handleDarkMode}
            className="dark-mode-wrapper cursor-pointer"
          >
            {theme === "dark" ? <FiMoon size={18} /> : <BsSunFill size={18} />}
          </div>
          {socials.map((social, index) => (
            <Link
              href={social.href}
              key={index}
              target="_blank"
            >
              {social.label === "instagram" && <AiOutlineInstagram size={18} />}
              {social.label === "github" && <AiOutlineGithub size={18} />}
              {social.label === "linkedin" && <AiOutlineLinkedin size={18} />}
              {social.label === "youtube" && <AiOutlineYoutube size={18} />}
            </Link>
          ))}
          <div
            className="menu-icon  cursor-pointer flex md:hidden active"
            onClick={handleHamburgerMenu}
          >
            {isMenuOpen ? (
              <AiOutlineClose size={18} />
            ) : (
              <HiOutlineMenuAlt3 size={18} />
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}
