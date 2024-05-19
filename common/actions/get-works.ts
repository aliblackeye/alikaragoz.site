'use server';

import data from '@db/works.json';

export async function getWorks() {
  // category fieldları aynı olanları birleştir
  const works = data.reduce((acc, item) => {
    const existing = acc.find((work) => work.category === item.category);
    if (existing) {
      existing.items.push(item);
    } else {
      acc.push({
        category: item.category,
        items: [item],
      });
    }
    return acc;
  }, []);

  return works;
}
