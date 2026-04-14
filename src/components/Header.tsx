'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

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
