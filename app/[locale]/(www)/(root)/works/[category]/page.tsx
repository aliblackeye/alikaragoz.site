'use client';

// Libs
import { useMemo } from 'react';

import Link from 'next/link';

import { useI18n } from '@locales/client';
import { motion } from 'framer-motion';

import Container from '@components/container';
import PageInfo from '@components/page-info';

import '@styles/_works-page.scss';

import data from '@db/works.json';

import WorkItem from '@components/work-item';

interface IWorkPageProps {
  params: { category: string };
}

export default function WorkPage(props: IWorkPageProps) {
  // Destructuring props
  const { params } = props;

  // Destructuring params
  const { category } = params;

  // Locale
  const t = useI18n() as any;

  // Variables
  const categories = useMemo(() => {
    return [
      'all',
      ...data.reduce((acc, item) => {
        if (!acc.includes(item.category)) {
          acc.push(item.category.toLowerCase());
        }

        return acc;
      }, []),
    ];
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="works-page"
    >
      <Container className="works-page-container">
        <PageInfo
          title={t(`PAGE_CONTENTS.WORKS.TITLE`)}
          description={t(`PAGE_CONTENTS.WORKS.DESCRIPTION`)}
        />

        <div className="categories">
          {categories?.map((categoryName, index) => (
            <Link
              key={index}
              href={'/works/' + categoryName}
              className={`category ${category === categoryName ? 'active' : ''}`}
            >
              {t(`COMPONENTS.WORKS.TITLES.${categoryName.toUpperCase()}`)}
            </Link>
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 1, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                staggerChildren: 0.2,
                bounce: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="visible"
          className="works-list"
        >
          {(category === 'all'
            ? data
            : data?.filter((item) => item.category.toLowerCase() === category)
          ).map((project, index) => (
            <WorkItem key={index} project={project} />
          ))}
        </motion.div>
      </Container>
    </motion.div>
  );
}
