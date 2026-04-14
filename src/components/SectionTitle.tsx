type Props = {
  title: string
  subtitle?: string
  className?: string
}

export function SectionTitle({ title, subtitle, className = '' }: Props) {
  return (
    <div className={`fade-in ${className}`}>
      <h2 className="relative mb-2 text-center font-display text-2xl font-medium text-text-main md:text-3xl">
        {title}
        <span className="mx-auto mt-2 block h-[3px] w-12 rounded-sm bg-primary" />
      </h2>
      {subtitle && (
        <p className="mb-10 text-center text-sm text-text-sub md:text-base">{subtitle}</p>
      )}
    </div>
  )
}
