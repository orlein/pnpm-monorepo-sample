import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { AsideNav } from './aside-nav';
import { HeaderBar } from './header-bar';

export default async function InsideLayout(props: PropsWithChildren) {
  const session = await getServerSession();

  if (!session) {
    redirect('/sign-in');
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <AsideNav />
      <HeaderBar />
      <main className="sm:ml-14">{props.children}</main>
    </div>
  );
}
