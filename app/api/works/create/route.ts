import fs from 'fs';

import { NextRequest, NextResponse } from 'next/server';

import { v4 as uuidv4 } from 'uuid';

import works from '../works.json';

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const title = formData.get('title');
    const description = formData.get('description');
    const href = formData.get('href');
    const content = formData.get('content');
    const image = formData.get('image');
    const category = formData.get('category');

    if (!title || !description || !href || !content || !image || !category) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill out all fields.',
        },
        { status: 400 }
      );
    }

    const newWork = {
      id: uuidv4(),
      href: href,
      title: title,
      description: description,
      image: image || '',
      content: content,
      views: 0,
    };

    console.log(newWork);

    /* works.push(newWork); */

    fs.writeFileSync(
      './app/api/works/works.json',
      JSON.stringify(works, null, 2)
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Work created successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error,
      },
      { status: 500 }
    );
  }
};
