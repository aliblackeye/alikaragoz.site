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
  const [logged, setLogged] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Effects
  useEffect(() => {
    // Token işlemleri
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');

    if (
      username === process.env.NEXT_PUBLIC_USERNAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      setLogged(true);

      if (pathname === '/panel-login') {
        router.push('/panel/dashboard');
      }
    } else if (
      username !== process.env.NEXT_PUBLIC_USERNAME &&
      password !== process.env.NEXT_PUBLIC_PASSWORD
    ) {
      router.push('/panel-login');
    }
  }, [pathname, router]);

  if (!logged) {
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
