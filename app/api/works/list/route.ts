import { NextRequest, NextResponse } from 'next/server';

import works from '../works.json';

export const GET = async (req: NextRequest) => {
  return NextResponse.json({
    success: true,
    message: 'Hello, World!',
    data: works,
  });
};
