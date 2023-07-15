'use client';

import Container from '../Container';
import { FlexCol } from '../Flex';
import Button from '../buttons/Button';

export default function Signup() {
  return (
    <Container>
      <form>
        <fieldset>
          <FlexCol className="gap-8">
            <legend className="text-center">
              Just a few things to get started
            </legend>
            <FlexCol>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. 'stonecold@sober.com'"
                autoComplete="username"
              />
            </FlexCol>
            <FlexCol>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="e.g. 'Sssshhh'"
                autoComplete="new-password"
              />
            </FlexCol>
          </FlexCol>
        </fieldset>
        <Button type="submit" className="mt-8">
          Sign up
        </Button>
      </form>
    </Container>
  );
}
