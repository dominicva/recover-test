import Container from '../Container';
import { FlexCol } from '../Flex';
import Button from '../buttons/Button';
import Input from '../form/Input';
import FormControl from '../form/FormControl';
import Link from 'next/link';
import type { AuthFormProps } from '@/types';

export default function AuthForm({
  legendText,
  passwordAutoComplete,
  helperText,
  buttonText,
  helperLinkText,
  linkText,
  linkPath,
  onSubmit,
}: AuthFormProps) {
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <fieldset>
          <FlexCol className="gap-6">
            <legend className="mb-6 text-center">{legendText}</legend>
            <FlexCol>
              <FormControl>
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="e.g. 'Sssshhh'"
                  autoComplete="username"
                />
              </FormControl>
            </FlexCol>
            <FlexCol>
              <FormControl>
                <label htmlFor="password">Password</label>
                <Input
                  id="password"
                  type="password"
                  placeholder="e.g. 'Sssshhh'"
                  autoComplete={passwordAutoComplete}
                />
                {passwordAutoComplete === 'current-password' ? (
                  <p>
                    Forgotten your password?{' '}
                    <Link
                      href="/reset-password"
                      className="font-bold text-secondary underline-offset-4 hover:underline"
                    >
                      {helperLinkText}
                    </Link>
                  </p>
                ) : null}
              </FormControl>
            </FlexCol>
          </FlexCol>
        </fieldset>
        <Button
          type="submit"
          size="large"
          className="mx-auto mt-8 block w-11/12"
        >
          {buttonText}
        </Button>
      </form>
      <p className="mt-4">
        {helperText}{' '}
        <Link
          href={linkPath}
          className="font-bold text-secondary underline-offset-4 hover:underline"
        >
          {linkText}
        </Link>
      </p>
    </Container>
  );
}
