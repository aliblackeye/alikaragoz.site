import fs from 'fs';

import { NextRequest, NextResponse } from 'next/server';

import works from '@db/works.json';
import { v4 as uuidv4 } from 'uuid';

export const PUT = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  try {
    const { id } = context.params;
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

    let uploadedImage = '';
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

    // eğer image dosyası varsa
    if (image) {
      if (typeof image !== 'string') {
        const imageFile = image as File;
        const imageExtension = imageFile.name
          .split('.')
          .pop()
          .toLocaleLowerCase();

        if (!['jpg', 'jpeg', 'png'].includes(imageExtension)) {
          return NextResponse.json(
            {
              success: false,
              message: 'Please upload a valid image file.',
            },
            { status: 400 }
          );
        }

        const imagePath = `./public/upload/${uuidv4()}.${imageExtension}`;
        const imageData = await imageFile.arrayBuffer(); // Dosya içeriğine erişme

        fs.writeFileSync(imagePath, Buffer.from(imageData)); // Dosyayı belirtilen dizine kaydetme

        uploadedImage = imagePath.replace('./public', '');
      } else {
        uploadedImage = image as string;
      }
    }

    const newWork = {
      id,
      href,
      title,
      description,
      image: uploadedImage || '',
      category,
      content,
      views: works[index].views,
    };

    works[index] = newWork as any;

    // update the works.json file
    return NextResponse.json(
      {
        success: true,
        message: 'Work updated.',
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
};
