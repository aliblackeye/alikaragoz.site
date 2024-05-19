'use client';

// Libs
import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

// Styles
import '@styles/_work-item.scss';

import { usePathname } from 'next/navigation';

// Interfaces
interface IWorkItemProps {
  project: any;
  useAnimation?: boolean;
}

export default function WorkItem(props: IWorkItemProps) {
  // Destructuring props
  const { project, useAnimation } = props;

  // Params
  const pathname = usePathname();

  return (
    <motion.div
      className="work-item gradient-hover"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      initial={useAnimation ? 'hidden' : undefined}
      animate={useAnimation ? 'visible' : undefined}
    >
      <Link
        href={`${pathname.includes('works') ? '/work/' : 'work/'}${project.href}`}
      >
        <div className="image">
          <Image
            src={`${project?.image}`}
            alt="work"
            width={1920}
            height={1080}
          />
        </div>
        <div className="title-and-description">
          <div className="title">{project?.title}</div>
          <div className="description">{project?.description}</div>
        </div>
      </Link>
    </motion.div>
  );
}
