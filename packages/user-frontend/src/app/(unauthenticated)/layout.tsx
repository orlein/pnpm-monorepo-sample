import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default async function Layout({ children }: PropsWithChildren) {
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }

  return (
    <main className="flex flex-1 justify-center items-center h-screen">
      {children}
    </main>
  );
}
