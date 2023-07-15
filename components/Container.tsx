import type { BaseComponentProps } from '@/types';

export default function SectionContainer({
  as: Component = 'div',
  className,
  children,
}: BaseComponentProps) {
  return (
    <Component className={`mx-auto max-w-5xl p-6 ${className ?? ''}`.trim()}>
      {children}
    </Component>
  );
}
