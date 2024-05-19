import fs from 'fs';

import { NextRequest, NextResponse } from 'next/server';

import works from '@db/works.json';

export const DELETE = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  try {
    const { id } = context.params;

    const work = works.find((work) => work.id === id);
    if (!work) {
      return NextResponse.json({
        success: false,
        message: 'Work not found',
      });
    }

    works.splice(works.indexOf(work), 1);

    // db/works.json dosyasına güncel verileri yaz
    await fs.promises.writeFile(
      './db/works.json',
      JSON.stringify(works, null, 2)
    );

    // public upload altındaki dosyayı sil
    if (work.image) {
      await fs.promises.unlink(`./public${work.image}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Work deleted successfully',
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
};
