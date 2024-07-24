import Link from 'next/link';
import {
  Button,
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
  Label,
  Input,
} from '@sample/components';

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
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="userId">유저 아이디</Label>
            <Input id="userId" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            계정 생성
          </Button>
        </div>
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
