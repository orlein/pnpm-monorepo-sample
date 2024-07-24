/**
 * v0 by Vercel.
 * @see https://v0.dev/t/i1SFK3KUq5G
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@sample/components';
import Link from 'next/link';
import SignInForm from './form';

export default async function SignInPage() {
  return (
    <Card className="mx-auto max-w-sm min-w-[24rem] border-0">
      <CardHeader>
        <CardTitle className="text-2xl">로그인</CardTitle>
        <CardDescription>
          유저 아이디와 비밀번호를 입력해주세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignInForm />
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
