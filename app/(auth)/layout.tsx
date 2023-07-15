import Container from '@/components/Container';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
}
