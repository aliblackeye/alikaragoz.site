'use client';

import { useEffect, useState } from 'react';

import '@styles/_panel-layout.scss';

import { usePathname, useRouter } from 'next/navigation';

import Header from '@layouts/panel-layout/_partials/header';
// Components
import Sidebar from '@layouts/panel-layout/_partials/sidebar';

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
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Effects
  useEffect(() => {
    // Token işlemleri
    const tokenFromStorage = localStorage.getItem('token');
    setToken(tokenFromStorage);

    if (!tokenFromStorage && pathname !== '/panel-login') {
      router.push('/panel-login');
    } else if (tokenFromStorage && pathname === '/panel-login') {
      router.push('/panel/dashboard');
    }
  }, [pathname, router]);

  if (!token) {
    return <>{children}</>;
  }

  return (
    <div className="panel-layout">
      <Sidebar collapsed={isSidebarCollapsed} />
      <div className="panel-header-and-content">
        <Header
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
        />
        <main className="panel-content bg-background">{children}</main>
      </div>
    </div>
  );
}
