import fs from 'fs';

import { NextRequest, NextResponse } from 'next/server';

import works from '../../works.json';

export const GET = async (
  req: NextRequest,
  context: { params: { id_or_link: string } }
) => {
  const { id_or_link } = context.params;

  const work = works.find((work: any) => {
    return work.id === id_or_link || work.href === id_or_link;
  });

  if (!work) {
    return NextResponse.json(
      {
        success: false,
        message: 'Work not found.',
      },
      { status: 404 }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message: 'Work found.',
      data: work,
    },
    { status: 200 }
  );
};
