import fs from 'fs';

// writeFile işlemini promisify ediyoruz
import { NextRequest, NextResponse } from 'next/server';

import { v4 as uuidv4 } from 'uuid';

import works from '../../../../db/works.json';

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

    let uploadedImage = '';

    // eğer image dosyası varsa
    if (image) {
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
    }

    const newWork = {
      id: uuidv4(),
      href: href,
      title: title,
      description: description,
      image: uploadedImage || '',
      category: category,
      content: content,
      views: 0,
    };

    // dosyaya yazma işlemi bitene kadar bekliyoruz
    await new Promise<void>((resolve, reject) => {
      works.push(newWork as any);

      fs.writeFile(
        '../../../../db/works.json',
        JSON.stringify(works),
        (err) => {
          if (err) {
            return reject(err);
          }

          resolve();
        }
      );
    });

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
        message: "Couldn't create work.",
      },
      { status: 500 }
    );
  }
};
