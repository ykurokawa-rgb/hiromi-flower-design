import Link from 'next/link'

type Variant = 'primary' | 'outline' | 'line'

type Props = {
  href: string
  variant?: Variant
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-primary hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(224,138,130,0.35)]',
  outline:
    'border-[1.5px] border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5',
  line: 'bg-[#06C755] text-white shadow-[0_4px_16px_rgba(6,199,85,0.2)] hover:bg-[#05b34d] hover:-translate-y-0.5',
}

export function Button({ href, variant = 'primary', children, className = '' }: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-display text-sm font-medium transition-all duration-300 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
