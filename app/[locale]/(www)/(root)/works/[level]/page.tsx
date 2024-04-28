'use client';

// Libs
import Link from 'next/link';

import { useI18n } from '@locales/client';
import { motion } from 'framer-motion';

import Container from '@components/container';
// Components
import PageInfo from '@components/page-info';
import WorkItem from '@components/work-item';

// Data
import { juniorProjects, midProjects } from '../../../../../../data';

import '@styles/_works-page.scss';

interface IWorkPageProps {
  params: { level: string };
}

export default function WorkPage(props: IWorkPageProps) {
  // Destructuring props
  const { params } = props;

  // Destructuring params
  const { level } = params;

  // Locale
  const t = useI18n() as any;

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

        <div className="levels">
          <Link
            href={'/works/all'}
            className={`level ${level === 'all' ? 'active' : ''}`}
          >
            All
          </Link>
          <Link
            href={'/works/mid'}
            className={`level ${level === 'mid' ? 'active' : ''}`}
          >
            Mid
          </Link>
          <Link
            href={'/works/junior'}
            className={`level ${level === 'junior' ? 'active' : ''}`}
          >
            Junior
          </Link>
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
          {level === 'junior' &&
            juniorProjects.map((project, index) => (
              <WorkItem key={index} project={project} />
            ))}
          {level === 'mid' &&
            midProjects.map((project, index) => (
              <WorkItem key={index} project={project} />
            ))}
          {level === 'all' &&
            [...midProjects, ...juniorProjects].map((project, index) => (
              <WorkItem key={index} project={project} />
            ))}
        </motion.div>
      </Container>
    </motion.div>
  );
}
