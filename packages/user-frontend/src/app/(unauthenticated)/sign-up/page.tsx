import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@sample/components';
import Link from 'next/link';
import SignUpForm from './form';

export default async function SignUpPage() {
  return (
    <Card className="mx-auto max-w-sm border-0">
      <CardHeader>
        <CardTitle className="text-xl">회원 가입</CardTitle>
        <CardDescription>
          회원 가입을 위해 아래 정보를 입력해주세요.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
        <div className="mt-4 text-center text-sm">
          이미 계정이 있으시다면{' '}
          <Link href="/sign-in" className="underline">
            로그인
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
