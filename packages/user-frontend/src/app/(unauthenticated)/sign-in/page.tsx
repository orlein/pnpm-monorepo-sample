/**
 * v0 by Vercel.
 * @see https://v0.dev/t/i1SFK3KUq5G
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@sample/components';
import { Label } from '@sample/components';
import { Input } from '@sample/components';
import Link from 'next/link';
import { Button } from '@sample/components';

export default async function SignInPage() {
  return (
    <Card className="mx-auto max-w-sm border-0">
      <CardHeader>
        <CardTitle className="text-2xl">로그인</CardTitle>
        <CardDescription>
          유저 아이디와 비밀번호를 입력해주세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="userId">유저 아이디</Label>
              <Link
                href="/find-user-id"
                className="ml-auto inline-block text-sm underline"
                prefetch={false}
              >
                아이디를 잊으셨나요?
              </Link>
            </div>
            <Input id="userId" type="userId" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">비밀번호</Label>
              <Link
                href="/find-password"
                className="ml-auto inline-block text-sm underline"
                prefetch={false}
              >
                비밀번호를 잊으셨나요?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            로그인
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          계정이 없으신가요?{' '}
          <Link href="/sign-up" className="underline" prefetch={false}>
            회원가입
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
