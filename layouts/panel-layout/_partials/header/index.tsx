import Image from 'next/image';

import { useChangeLocale, useCurrentLocale, useI18n } from '@locales/client';
import { useTheme } from 'next-themes';
import { BsSunFill } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';
import { FiMoon } from 'react-icons/fi';

import '@styles/_panel-header.scss';

interface IHeaderProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (isCollapsed: boolean) => void;
}

export default function Header(props: IHeaderProps) {
  // Props
  const { isSidebarCollapsed, setIsSidebarCollapsed } = props;

  // Theme
  const { theme, setTheme } = useTheme();

  // Locales
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale() as any;
  const t = useI18n() as any;

  const handleChangeLocale = () => {
    if (locale === 'en') {
      changeLocale('tr');
    }
    if (locale === 'tr') {
      changeLocale('en');
    }
  };

  return (
    <header className="panel-header bg-background">
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
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="dark-mode-wrapper"
        >
          {theme === 'dark' ? <FiMoon size={18} /> : <BsSunFill size={18} />}
        </div>
      </div>
    </header>
  );
}
