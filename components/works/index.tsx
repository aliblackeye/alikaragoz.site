'use client';

// Libs
import Link from 'next/link';

import { useI18n } from '@locales/client';
// Icons
import { BsFillCaretRightFill } from 'react-icons/bs';

// Components
import WorkItem from '@components/work-item';

// Interfaces
interface IWorksProps {
  title: string;
  href: string;
  workItems: any;
}

export default function Works(props: IWorksProps) {
  // Destructuring props
  const { title = 'Current Work', href = '/current-work', workItems } = props;
  // Locales
  const t = useI18n() as any;

  return (
    <div className="works-wrapper">
      <div className="works-header">
        <h1 className="works-title ">{title}</h1>
        <Link href={href} className="see-all-link">
          <span className="see-all-text">{t('COMPONENTS.WORKS.SEE_ALL')}</span>
          <BsFillCaretRightFill size={10} color="#393f8f" />
        </Link>
      </div>
      {/* WORKS LIST */}
      <div className="works-list">
        {/* WORK ITEMS */}
        {workItems?.slice(0, 3)?.map((workItem, index) => {
          return <WorkItem project={workItem} key={index} useAnimation />;
        })}
      </div>
    </div>
  );
}
