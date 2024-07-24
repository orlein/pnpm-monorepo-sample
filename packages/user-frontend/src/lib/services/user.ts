import { User, UserSchema } from '@/prisma/generated/zod';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { z } from 'zod';

export const UserSignUpSchema = UserSchema.pick({
  email: true,
  userId: true,
  password: true,
}).extend({
  email: UserSchema.shape.email.email('이메일 형식이 아닙니다.'),
  password: UserSchema.shape.password.min(
    8,
    '비밀번호는 8자 이상이어야 합니다.',
  ),
});

export type UserSignUp = z.infer<typeof UserSignUpSchema>;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    signUp: builder.mutation<User, UserSignUp>({
      query: (body) => ({
        url: '/api/auth/register',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useSignUpMutation } = userApi;
