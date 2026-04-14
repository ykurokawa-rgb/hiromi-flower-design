type Props = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: Props) {
  return (
    <div
      className={`rounded-[14px] bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover ${className}`}
    >
      {children}
    </div>
  )
}
