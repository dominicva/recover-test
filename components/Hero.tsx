import Link from 'next/link';
import { FlexCol } from './Flex';
import Button from './buttons/Button';
import Container from './Container';

export default function Hero() {
  return (
    <section className="h-screen bg-off-white lg:py-48">
      <Container className="py-12 sm:py-20">
        <FlexCol as="hgroup" className="mb-10 gap-6 text-off-black lg:gap-8">
          <h2 className="max-w-[20rem] text-4xl font-semibold lg:max-w-[32rem] lg:text-6xl">
            Get a helping hand with your recovery
          </h2>
          <p className="max-w-xl text-lg lg:text-xl">
            Journal and receive gentle advice from your AI recovery helper.
            Visualize and celebrate your progress.
          </p>
        </FlexCol>
        <Link href="/signup">
          <Button
            intent="primary"
            size="large"
            className="mx-auto block w-11/12 sm:mx-0 sm:max-w-[160px]"
          >
            <span className="text-lg">Sign up</span>
          </Button>
        </Link>
      </Container>
    </section>
  );
}
