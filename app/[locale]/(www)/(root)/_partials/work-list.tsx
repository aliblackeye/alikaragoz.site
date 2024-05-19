import { getWorks } from '@actions/get-works';
import { getI18n } from '@locales/server';

import Container from '@components/container';
import Works from '@components/works';

export async function WorkList() {
  // Locale
  const t = (await getI18n()) as any;
  const works = await getWorks();

  return (
    <Container>
      <div className="all-works">
        {works?.map((work, index) => {
          return (
            <Works
              key={index}
              title={`${work.category === 'Personal' || work.category === 'Company' ? `${t(`COMPONENTS.WORKS.TITLES.${work.category.toUpperCase()}`)}` : work.category.toUpperCase()} ${t(`COMPONENTS.WORKS.TITLES.WORKS`)}`}
              workItems={work.items}
              href={`/works/${work.href}`}
            />
          );
        })}
      </div>
    </Container>
  );
}
