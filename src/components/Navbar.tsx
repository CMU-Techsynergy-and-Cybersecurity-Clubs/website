'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navLinks } from '@/lib/nav'
import { sharedClubConfig } from '@/lib/sharedConfig'
import { useTheme } from '@/components/ThemeProvider'
import { useLayout } from '@/components/LayoutProvider'
import LayoutToggle from '@/components/LayoutToggle'
import ClassicNavbar from '@/components/ClassicNavbar'

const iconButton = 'rounded-full p-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-white'

export default function Navbar() {
  const { layout } = useLayout()

  return (
    <header className="sticky top-0 z-50 h-20 pointer-events-none">
      {layout === 'classic' ? (
        <div className="pointer-events-auto">
          <ClassicNavbar />
        </div>
      ) : (
        <PillNavbar />
      )}
    </header>
  )
}

function PillNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === ''
    return pathname?.startsWith(href) ?? false
  }

  return (
    <>
      <nav
        aria-label="Primary"
        className="pointer-events-auto mx-auto mt-4 w-[calc(100%-2rem)] max-w-5xl rounded-full border border-white/10 bg-gray-950/70 text-white shadow-2xl shadow-black/30 backdrop-blur-xl supports-[backdrop-filter]:bg-gray-950/55"
      >
        <div className="flex h-12 items-center justify-between pl-5 pr-2">
          <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" aria-hidden="true" />
            Tech Clubs @ CMU
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href) ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LayoutToggle className={iconButton} />
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <a
              href={sharedClubConfig.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex h-9 items-center rounded-full bg-white px-4 text-sm font-semibold text-gray-950 transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Join Discord
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <LayoutToggle className={iconButton} />
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="pointer-events-auto mx-auto mt-2 w-[calc(100%-2rem)] max-w-5xl rounded-3xl border border-white/10 bg-gray-950/85 p-3 text-white shadow-2xl backdrop-blur-xl md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-200 ${
                isActive(link.href) ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={sharedClubConfig.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex h-12 items-center justify-center rounded-2xl bg-white text-base font-semibold text-gray-950"
          >
            Join Discord
          </a>
        </div>
      )}
    </>
  )
}

function ThemeToggle({ theme, onToggle }: { theme: 'light' | 'dark'; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="rounded-full p-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
    >
      <svg className="hidden h-5 w-5 dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
      <svg className="h-5 w-5 dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
      </svg>
    </button>
  )
}
