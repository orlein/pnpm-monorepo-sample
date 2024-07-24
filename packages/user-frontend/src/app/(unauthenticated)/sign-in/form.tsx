'use client';

import { UserSchema } from '@/prisma/generated/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  Label,
  Input,
  Button,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@sample/components';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import React from 'react';

const UserSignInSchema = UserSchema.pick({
  userId: true,
  password: true,
});

type UserSignIn = z.infer<typeof UserSignInSchema>;

export default function SignInForm() {
  const router = useRouter();
  const form = useForm<UserSignIn>({
    resolver: zodResolver(UserSignInSchema),
    defaultValues: {
      userId: '',
      password: '',
    },
  });

  React.useEffect(() => {
    const subscription = form.watch((values) => {
      form.clearErrors();
    });

    return () => {
      return subscription.unsubscribe();
    };
  }, [form, form.watch]);

  const handleSubmit: Parameters<typeof form.handleSubmit>[0] = async (
    values,
  ) => {
    const result = await signIn('credentials', {
      userId: values.userId,
      password: values.password,
      redirect: false,
    });
    if (!result?.ok) {
      form.setError('root', {
        type: 'manual',
        message:
          '유저 아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해주세요.',
      });
      return;
    }

    router.push('/');
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="grid gap-4"
        noValidate
      >
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <div className="flex items-center">
                <FormLabel htmlFor="userId">유저 아이디</FormLabel>
                <Link
                  href="/find-user-id"
                  className="ml-auto inline-block text-sm underline"
                  prefetch={false}
                  tabIndex={-1}
                >
                  아이디를 잊으셨나요?
                </Link>
              </div>
              <FormControl>
                <Input id="userId" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <div className="flex items-center">
                <FormLabel htmlFor="password">비밀번호</FormLabel>
                <Link
                  href="/find-password"
                  className="ml-auto inline-block text-sm underline"
                  prefetch={false}
                  tabIndex={-1}
                >
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
              <FormControl>
                <Input id="password" type="password" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.formState.errors.root && (
          <FormMessage className="overflow-hidden">
            {form.formState.errors.root.message}
          </FormMessage>
        )}
        <Button type="submit" className="w-full">
          로그인
        </Button>
      </form>
    </Form>
  );
}
