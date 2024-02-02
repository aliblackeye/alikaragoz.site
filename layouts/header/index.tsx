"use client";

// Libs
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Icons
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

// Data
import { links, socials } from "../../data";

// Styles
import "./styles.scss";
import Container from "@components/container";

export default function Header() {

  // Ref
  const navRef = useRef(null);

  // States
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Functions
  const handleHamburgerMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      navRef.current.classList.remove("show-menu");
    }
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      navRef.current.classList.add("show-menu");
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
    <header className="header">
      <Container >
        <nav ref={navRef}>
          <div className="header-left">
            {links.map((link, index) => (
              <Link href={link.href} key={index} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>
          <ul className="header-right">
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="dark-mode-wrapper"
            >
              {darkMode ? <FiMoon size={18} /> : <BsSunFill size={18} />}
            </div>
            {socials.map((social, index) => (
              <Link href={social.href} key={index} target="_blank">
                {social.label === "instagram" && <AiOutlineInstagram size={18} />}
                {social.label === "github" && <AiOutlineGithub size={18} />}
                {social.label === "linkedin" && <AiOutlineLinkedin size={18} />}
                {social.label === "youtube" && <AiOutlineYoutube size={18} />}
              </Link>
            ))}
            <div
              className="menu-icon"
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
      </Container>
    </header>
  );
}
