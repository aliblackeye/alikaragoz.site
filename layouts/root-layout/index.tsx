'use client';

// Libs
import Image from 'next/image';

// Layouts
import Footer from '@layouts/root-layout/_partials/footer';
import Header from '@layouts/root-layout/_partials/header';

import '@styles/_root-layout.scss';

interface IClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout(props: IClientLayoutProps) {
  // Props
  const { children } = props;

  return (
    <>
      <Header />
      <div className="top-bg">
        <Image src={'/images/top.png'} alt="top" width={1920} height={1080} />
      </div>
      {children}
      <div className="bottom-bg">
        <Image
          src={'/images/bottom.png'}
          alt="bottom"
          width={1920}
          height={1080}
        />
        <Footer />
      </div>
    </>
  );
}
