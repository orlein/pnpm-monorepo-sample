'use client';

import {
  UserSignUpSchema,
  useSignUpMutation,
  type UserSignUp,
} from '@/lib/services/user';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@sample/components';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function SignUpForm() {
  const router = useRouter();
  const [signUp, { isLoading }] = useSignUpMutation();
  const form = useForm<UserSignUp>({
    resolver: zodResolver(UserSignUpSchema),
    defaultValues: {
      userId: '',
      email: '',
      password: '',
    },
  });

  const handleSubmit: Parameters<typeof form.handleSubmit>[0] = async (
    values,
  ) => {
    await signUp(values).unwrap();
    router.push('/sign-in');
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
            <FormItem>
              <FormLabel htmlFor="userId">유저 아이디</FormLabel>
              <FormControl>
                <Input id="userId" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">이메일</FormLabel>
              <FormControl>
                <Input id="email" type="email" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="password">비밀번호</FormLabel>
              <FormControl>
                <Input id="password" type="password" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          계정 생성
        </Button>
      </form>
    </Form>
  );
}
