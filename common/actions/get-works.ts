'use server';

import fs from 'fs';

export async function getWorks() {
  const data = fs.readFileSync('./db/works.json', 'utf8');

  // category fieldları aynı olanları birleştir
  const works = JSON.parse(data).reduce((acc, item) => {
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
