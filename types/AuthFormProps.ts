export type AuthFormProps = {
  legendText: string;
  passwordAutoComplete: 'current-password' | 'new-password';
  helperText: 'Already have an account?' | "Don't have an account?";
  buttonText: 'Login' | 'Sign up';
  helperLinkText?: 'Reset it';
  linkText: 'Login' | 'Sign up';
  linkPath: '/login' | '/signup';
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
