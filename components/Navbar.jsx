'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

const links = [
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Journal' },
    { href: '/store', label: 'Shop' },
    { href: '/contact', label: 'Contact' },
]

  return (
    <nav className="flex justify-between items-center px-8 py-7 relative z-50">
      <Link
        href="/"
        style={{ fontFamily: 'var(--font-display)', color: '#FF6B00' }}
        className="text-xl tracking-[0.3em] hover:opacity-70 transition-opacity"
      >
        BB
    </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="nav-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-[#F0EEE8] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-px bg-[#F0EEE8] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-px bg-[#F0EEE8] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-[#1e1e1c] px-8 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}