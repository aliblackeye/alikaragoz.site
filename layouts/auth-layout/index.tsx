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
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');

    if (
      username === process.env.NEXT_PUBLIC_USERNAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
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

  return <>{children}</>;
}
