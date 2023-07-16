'use client';

import AuthForm from '@/components/form/AuthForm';

export default function SignupPage() {
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
        onSubmit={(e) => {}}
      />
    </>
  );
}
