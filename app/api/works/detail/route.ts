import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  return NextResponse.json({
    success: true,
    message: 'Hello, World!',
  });
};
