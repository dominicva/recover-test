export function FlexRow({
  as: Component = 'div',
  children,
  className,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Component className={`flex flex-row ${className ?? ''}`.trim()}>
      {children}
    </Component>
  );
}

export function FlexCol({
  as: Component = 'div',
  children,
  className,
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Component className={`flex flex-col ${className ?? ''}`.trim()}>
      {children}
    </Component>
  );
}
