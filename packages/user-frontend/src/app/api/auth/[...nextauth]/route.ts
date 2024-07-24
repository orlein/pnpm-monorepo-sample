import { hashPassword } from '@/app/api/server-util';
import { prisma } from '@/lib/prisma';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        userId: { label: 'User ID', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.userId || !credentials?.password) {
          return null;
        }

        const hashedPassword = await hashPassword(credentials.password);

        const user = await prisma.user.findUnique({
          where: {
            userId: credentials.userId,
            password: hashedPassword,
          },
        });

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    signIn: async ({ user }) => {
      return true;
    },
    session: async ({ session, user }) => {
      return session;
    },
    redirect: async ({ url, baseUrl }) => {
      return baseUrl;
    },
  },
  pages: {
    signIn: '/sign-in',
    signOut: '/sign-out',
  },
  secret: 'secret',
});

export { handler as GET, handler as POST };
