interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: JSX.Element | JSX.Element[]
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={`h-screen w-screen flex flex-col ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}
