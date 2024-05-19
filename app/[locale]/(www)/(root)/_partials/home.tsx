'use client';

import { ReactNode } from 'react';

import Image from 'next/image';

import { useI18n } from '@locales/client';
import { motion } from 'framer-motion';

import Container from '@components/container';

import '@styles/_home-page.scss';

// Data
import { photo } from '../../../../../data';

interface IHome {
  workList?: ReactNode;
}
export default function Home(props: IHome) {
  // Props
  const { workList } = props;

  const t = useI18n() as any;

  return (
    <div>
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
                  loading="lazy"
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
        </Container>
      </motion.div>
      {workList}
    </div>
  );
}
