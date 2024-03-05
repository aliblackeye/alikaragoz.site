import { NextRequest, NextResponse } from 'next/server';

import fs from 'fs';

import works from '../../works.json';

export const DELETE = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const { id } = context.params;
  const index = works.findIndex((work) => work.id === id);
  works.splice(index, 1);

  // update the works.json file
  fs.writeFileSync('app/api/works/works.json', JSON.stringify(works, null, 2));

  return NextResponse.json({
    success: true,
    message: 'Work deleted successfully',
  });
};
