'use client';

// Libs
import { useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { socials } from '@db/user-details.json';
import { useChangeLocale, useCurrentLocale, useI18n } from '@locales/client';
import {
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { BsSunFill } from 'react-icons/bs';
import { FiMoon } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

// Components
import Container from '@components/container';

// Styles
import './styles.scss';

import { useTheme } from 'next-themes';

export default function Header() {
  // Theme
  const { theme, setTheme } = useTheme();

  // Variables
  const links = useMemo(() => {
    return [
      {
        href: '/',
        label: 'home',
      },
      {
        href: '/works/all',
        label: 'works',
      },

      {
        href: '/about',
        label: 'about',
      },
    ];
  }, []);

  // Locales
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale() as any;
  const t = useI18n() as any;

  // Ref
  const navRef = useRef(null);

  // States
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Functions
  const handleHamburgerMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      navRef.current.classList.remove('show-menu');
    }
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      navRef.current.classList.add('show-menu');
    }
  };

  const handleChangeLocale = () => {
    if (locale === 'en') {
      changeLocale('tr');
    }
    if (locale === 'tr') {
      changeLocale('en');
    }
  };

  return (
    <header className="header">
      <Container>
        <nav ref={navRef}>
          <div className="header-left">
            {links.map((link, index) => (
              <Link href={link.href} key={index} className="nav-link">
                {t(
                  `PAGE_TITLES.${link.label.toLocaleUpperCase()}`
                ).toLocaleLowerCase()}
              </Link>
            ))}
          </div>
          <ul className="header-right">
            <div className="language-switch" onClick={handleChangeLocale}>
              <Image
                src={`/images/${locale}.png`}
                alt="flag"
                width={1920}
                height={1920}
              />
            </div>
            <div
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="dark-mode-wrapper"
            >
              {theme === 'dark' ? (
                <FiMoon size={18} />
              ) : (
                <BsSunFill size={18} />
              )}
            </div>
            <div className="socials">
              {socials.map((social, index) => (
                <Link href={social.href} key={index} target="_blank">
                  {social.label === 'instagram' && (
                    <AiOutlineInstagram size={18} />
                  )}
                  {social.label === 'github' && <AiOutlineGithub size={18} />}
                  {social.label === 'linkedin' && (
                    <AiOutlineLinkedin size={18} />
                  )}
                  {social.label === 'youtube' && <AiOutlineYoutube size={18} />}
                </Link>
              ))}
            </div>
            <div className="menu-icon" onClick={handleHamburgerMenu}>
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
