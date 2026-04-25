'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { NAV_LINKS, SITE_NAME, LINE_URL } from '@/lib/constants'
import { trackLineClick } from '@/lib/ga'

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
    document.body.style.overflow = !menuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-[12px] transition-shadow duration-300 ${
          scrolled ? 'shadow-soft' : ''
        }`}
        style={{ background: 'rgba(250, 249, 245, 0.92)' }}
      >
        <div className="mx-auto flex h-[72px] max-w-[1080px] items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="font-display text-lg font-semibold text-text-main whitespace-nowrap">
            <span className="text-primary">✿</span> {SITE_NAME}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-sm text-text-main after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-sm after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  pathname === link.href ? 'after:w-full' : 'after:w-0'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLineClick('header')}
              aria-label="LINEで友だち追加"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#06C755] px-5 py-2.5 text-sm font-medium text-white shadow-[0_4px_16px_rgba(6,199,85,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#05b34d]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              友だち追加
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              体験に遊びに行く
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="relative flex h-9 w-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            <span
              className={`block h-[2px] w-[22px] rounded-sm bg-text-main transition-all duration-300 ${
                menuOpen ? 'translate-y-0 rotate-45' : '-translate-y-[7px]'
              }`}
            />
            <span
              className={`absolute block h-[2px] w-[22px] rounded-sm bg-text-main transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[2px] w-[22px] rounded-sm bg-text-main transition-all duration-300 ${
                menuOpen ? '-translate-y-0 -rotate-45' : 'translate-y-[7px]'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <nav
          className="fixed inset-0 top-[72px] z-40 flex flex-col items-center gap-6 pt-10 backdrop-blur-[12px] animate-in fade-in duration-300"
          style={{ background: 'rgba(250, 249, 245, 0.97)' }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-lg text-text-main"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackLineClick('header_mobile')
              closeMenu()
            }}
            aria-label="LINEで友だち追加"
            className="inline-flex items-center gap-2 rounded-full bg-[#06C755] px-8 py-3 font-display text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINE友だち追加
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-primary px-8 py-3 font-display text-white"
            onClick={closeMenu}
          >
            体験に遊びに行く
          </Link>
        </nav>
      )}
    </>
  )
}
