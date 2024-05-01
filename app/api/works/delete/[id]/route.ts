import fs from 'fs';

import { NextRequest, NextResponse } from 'next/server';

import works from '../../../../../db/works.json';

export const DELETE = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const { id } = context.params;

  const work = works.find((work) => work.id === id);
  if (!work) {
    return NextResponse.json({
      success: false,
      message: 'Work not found',
    });
  }

  works.splice(works.indexOf(work), 1);

  // update the works.json file
  fs.writeFileSync('app/api/works/works.json', JSON.stringify(works, null, 2));

  console.log('Deleting image...', work);
  fs.unlinkSync(`public${work.image}`);

  return NextResponse.json({
    success: true,
    message: 'Work deleted successfully',
  });
};
