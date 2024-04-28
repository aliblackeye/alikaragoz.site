import fs from 'fs';

import { NextRequest, NextResponse } from 'next/server';

import works from '../../works.json';

export const PUT = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const { id } = context.params;

  const body = await req.json();

  if (
    body?.title === '' ||
    body?.description === '' ||
    body?.href === '' ||
    body?.content === ''
  ) {
    return NextResponse.json(
      {
        success: false,
        message: 'Please fill out all fields.',
      },
      { status: 400 }
    );
  }

  const index = works.findIndex((work: any) => work.id === id);

  if (index === -1) {
    return NextResponse.json(
      {
        success: false,
        message: 'Work not found.',
      },
      { status: 404 }
    );
  }

  works[index] = {
    ...works[index],
    ...body,
  };

  fs.writeFileSync('app/api/works/works.json', JSON.stringify(works, null, 2));
  // update the works.json file
  return NextResponse.json(
    {
      success: true,
      message: 'Work updated.',
    },
    { status: 200 }
  );
};
