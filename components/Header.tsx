'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
        isScrolled
          ? 'bg-creme-100/95 backdrop-blur-md shadow-elegant py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-editorial flex items-center justify-between" aria-label="Hauptnavigation">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Zeitlos Gute Produkte - Startseite"
        >
          {/* Logomark */}
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div
              className={`absolute inset-0 border-2 transition-all duration-500 ease-out-expo ${
                isScrolled ? 'border-navy-900' : 'border-navy-900'
              } group-hover:border-cognac-600`}
            />
            <span
              className={`font-serif text-xl font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-navy-900' : 'text-navy-900'
              } group-hover:text-cognac-600`}
            >
              Z
            </span>
          </div>

          {/* Wordmark - hidden on mobile */}
          <div className="hidden sm:block">
            <span
              className={`font-serif text-lg tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-navy-900' : 'text-navy-900'
              }`}
            >
              Zeitlos
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/#produkte"
            className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-cognac-600 ${
              isScrolled ? 'text-navy-700' : 'text-navy-800'
            }`}
          >
            Produkte
          </Link>

          <Link
            href="/#newsletter"
            className={`hidden sm:block text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-cognac-600 ${
              isScrolled ? 'text-navy-700' : 'text-navy-800'
            }`}
          >
            Newsletter
          </Link>
        </div>
      </nav>
    </header>
  )
}
