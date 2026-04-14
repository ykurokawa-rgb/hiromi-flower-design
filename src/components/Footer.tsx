import Link from 'next/link'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-surface-alt pt-12 pb-6 text-center">
      <div className="mx-auto max-w-[1080px] px-6">
        {/* Logo */}
        <div className="mb-4 font-display text-lg font-semibold text-text-main">
          <span className="text-primary">✿</span> {SITE_NAME}
        </div>

        {/* Nav */}
        <nav className="mb-6 flex flex-wrap justify-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-sub transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm text-text-sub transition-colors duration-300 hover:text-primary"
          >
            お問い合わせ
          </Link>
        </nav>

        {/* Copyright */}
        <p className="text-xs text-text-sub">
          &copy; {new Date().getFullYear()} {SITE_NAME} All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
