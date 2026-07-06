'use client'

import { useEffect, useState } from 'react'
import { navItems } from '@/data/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#"
          className={`flex items-center gap-2 text-lg font-900 tracking-tight transition-colors duration-500 ${
            scrolled ? 'text-[#1A1A2E]' : 'text-white'
          }`}
        >
          <span className="text-xl">🇰🇷</span>
          <span>대한구석</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.href)}
              className={`text-sm font-500 tracking-wide transition-colors duration-300 hover:opacity-70 ${
                scrolled ? 'text-[#1A1A2E]' : 'text-white/90'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 p-2"
          aria-label="메뉴 열기"
        >
          <div className={`w-6 h-px transition-all duration-300 ${scrolled ? 'bg-[#1A1A2E]' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'}`} />
          <div className={`w-6 h-px mt-1.5 transition-all duration-300 ${scrolled ? 'bg-[#1A1A2E]' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-px mt-1.5 transition-all duration-300 ${scrolled ? 'bg-[#1A1A2E]' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white/95 backdrop-blur-lg transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNav(item.href)}
            className="text-2xl font-700 text-[#1A1A2E] tracking-wide transition-colors hover:text-[#C8102E]"
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  )
}
