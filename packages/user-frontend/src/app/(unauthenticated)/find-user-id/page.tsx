import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Label,
  Input,
  Button,
} from '@sample/components';
import Link from 'next/link';

export default async function FindUserIdPage() {
  return (
    <Card className="mx-auto max-w-sm border-0">
      <CardHeader>
        <CardTitle className="text-2xl">아이디 찾기</CardTitle>
        <CardDescription>가입하신 이메일을 입력해주세요.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="Email" required />
          </div>
          <Button type="submit" className="w-full">
            아이디 찾기
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          계정이 있으신가요?
          <Link href="/sign-in" className="underline">
            로그인
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
