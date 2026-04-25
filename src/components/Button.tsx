'use client'

import Link from 'next/link'
import { trackTrialClick, trackLineClick } from '@/lib/ga'

type Variant = 'primary' | 'outline' | 'line'

type Props = {
  href: string
  variant?: Variant
  children: React.ReactNode
  className?: string
  trackLabel?: string
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-primary hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(224,138,130,0.35)]',
  outline:
    'border-[1.5px] border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5',
  line: 'bg-[#06C755] text-white shadow-[0_4px_16px_rgba(6,199,85,0.2)] hover:bg-[#05b34d] hover:-translate-y-0.5',
}

export function Button({ href, variant = 'primary', children, className = '', trackLabel }: Props) {
  const handleClick = () => {
    const label = trackLabel || href
    if (variant === 'line') {
      trackLineClick(label)
    } else if (href === '/contact' && variant === 'primary') {
      trackTrialClick(label)
    }
  }

  const isExternal = /^https?:\/\//.test(href)

  return (
    <Link
      href={href}
      onClick={handleClick}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-display text-sm font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
