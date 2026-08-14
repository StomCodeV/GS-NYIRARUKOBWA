'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Academics', href: '/academics' },
    { label: 'Staff', href: '/staff' },
    { label: 'Apply', href: '/apply' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-navy/90 backdrop-blur-md border-b border-white/10">
      <nav className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">
            G.S <span className="text-cyan">Nyirarukobwa</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-sm text-white/80 hover:text-cyan transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-navy/95 backdrop-blur-md border-t border-white/10">
          <ul className="container py-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block text-white/80 hover:text-cyan transition text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
