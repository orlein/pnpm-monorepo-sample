import { hashPassword } from '@/app/api/server-util';
import { prisma } from '@/lib/prisma';
import { UserCreateInputSchema } from '@/prisma/generated/zod';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parseResult = UserCreateInputSchema.safeParse(body);

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
    return new Response(null, {
      status: 500,
    });
  }
}
