import { prisma } from '@/lib/prisma';
import { UserCreateInputSchema } from '@/prisma/generated/zod';
import { pbkdf2 } from 'node:crypto';

async function hashPassword(password: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    pbkdf2(password, 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
      if (err) {
        reject(err);
      }
      resolve(derivedKey.toString('hex'));
    });
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const parseResult = UserCreateInputSchema.safeParse({
      email: formData.get('email'),
      password: formData.get('password'),
      name: formData.get('name'),
      userId: formData.get('userId'),
    });

    if (!parseResult.success) {
      return new Response(JSON.stringify(parseResult.error), {
        status: 400,
      });
    }

    const hashedPassword = await hashPassword(parseResult.data.password);

    const newUser = await prisma.user.create({
      data: {
        ...parseResult.data,
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify(newUser), {
      status: 201,
    });
  } catch (error) {
    return new Response('Internal Server Error', {
      status: 500,
    });
  }
}
