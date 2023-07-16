'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import AuthForm from '@/components/form/AuthForm';
import { FormEvent } from 'react';

export default function SignupPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
    });
  };
  return (
    <>
      <h2 className="text-center text-2xl">Sign up</h2>
      <AuthForm
        legendText="Just a few things to get started"
        passwordAutoComplete="new-password"
        helperText="Already have an account?"
        buttonText="Sign up"
        linkText="Login"
        linkPath="/login"
        onSubmit={handleSubmit}
      />
    </>
  );
}
