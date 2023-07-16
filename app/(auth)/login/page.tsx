'use client';

import AuthForm from '@/components/form/AuthForm';

export default function LoginPage() {
  return (
    <>
      <h2 className="text-center text-2xl">Login</h2>
      <AuthForm
        legendText="Enter your credentials to login"
        passwordAutoComplete="current-password"
        helperLinkText="Reset it"
        helperText="Don't have an account?"
        buttonText="Login"
        linkText="Sign up"
        linkPath="/signup"
        onSubmit={(e) => {}}
      />
    </>
  );
}
