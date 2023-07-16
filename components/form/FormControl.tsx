import { FlexCol } from '../Flex';

export default function FormControl({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FlexCol className="gap-2">{children}</FlexCol>;
}
