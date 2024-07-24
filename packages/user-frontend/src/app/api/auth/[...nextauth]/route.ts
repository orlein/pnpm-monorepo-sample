import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        userId: { label: "User ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.userId || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            userId: credentials.userId,
            password: credentials.password,
          },
        });

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  callbacks: {},
  pages: {
    newUser: "/auth/new-user",
  },
  secret: "secret",
});

export { handler as GET, handler as POST };
