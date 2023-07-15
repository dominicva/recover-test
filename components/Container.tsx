export interface SectionContainerProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export default function SectionContainer({
  as: Component = 'div',
  className,
  children,
}: SectionContainerProps) {
  return (
    <Component className={`mx-auto max-w-5xl p-6 ${className ?? ''}`.trim()}>
      {children}
    </Component>
  );
}
