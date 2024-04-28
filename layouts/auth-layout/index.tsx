'use client';

import { useEffect } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import '@styles/_panel-layout.scss';

interface IPanelLayoutProps {
  children: React.ReactNode;
}

export default function PanelLayout(props: IPanelLayoutProps) {
  // Destructuring props
  const { children } = props;

  const pathname = usePathname();
  const router = useRouter();

  // Effects
  useEffect(() => {
    // Token işlemleri
    const tokenFromStorage = localStorage.getItem('token');

    if (!tokenFromStorage && pathname !== '/panel-login') {
      router.push('/panel-login');
    } else if (tokenFromStorage && pathname === '/panel-login') {
      router.push('/panel/dashboard');
    }
  }, [pathname, router]);

  return <>{children}</>;
}
