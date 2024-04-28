'use client';

// Libs
import { useEffect } from 'react';

import Image from 'next/image';

import { useI18n } from '@locales/client';
import { motion } from 'framer-motion';

// Components
import Container from '@components/container';
import Works from '@components/works';

// Data
import { juniorProjects, midProjects, photo } from '../../../../data';

import '@styles/_home-page.scss';

export default function Home() {
  // Locale
  const t = useI18n() as any;

  useEffect(() => {}, []);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="home-page"
    >
      <Container className="home-page-container">
        <div className="profile-wrapper">
          <div className="profile-wrapper-top">
            <div className="profile-image">
              <Image
                src={`${photo}`}
                alt={t('PAGE_CONTENTS.HOME.TITLE')}
                width={1920}
                height={1080}
              />
            </div>
            <div className="name-and-bio">
              <h1 className="profile-name">
                {t('PAGE_CONTENTS.HOME.FULLNAME')}
              </h1>
              <span className="profile-bio">
                {t('PAGE_CONTENTS.HOME.TITLE')}
              </span>
            </div>
          </div>
          <p className="profile-description">
            {t('PAGE_CONTENTS.HOME.DESCRIPTION')}
          </p>
        </div>

        <Works
          title={t('COMPONENTS.WORKS.TITLES.MID_WORKS')}
          workItems={midProjects}
          href="/works/mid"
        />
        <Works
          title={t('COMPONENTS.WORKS.TITLES.JUNIOR_WORKS')}
          workItems={juniorProjects}
          href="/works/junior"
        />
      </Container>
    </motion.div>
  );
}
