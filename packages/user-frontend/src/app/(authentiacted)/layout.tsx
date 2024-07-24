import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default async function InsideLayout(props: PropsWithChildren) {
  const session = await getServerSession();

  if (!session) {
    redirect('/sign-in');
  }

  return (
    <div>
      <p>Inside Layout</p>
      {props.children}
    </div>
  );
}
