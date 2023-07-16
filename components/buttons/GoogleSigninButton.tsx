'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Button from './Button';

export default function GoogleSigninButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? '/';

  return (
    <Button
      intent="secondary"
      size="large"
      onClick={() => signIn('google', { callbackUrl })}
      className="mx-auto block w-11/12"
    >
      Continue with Google
    </Button>
  );
}
