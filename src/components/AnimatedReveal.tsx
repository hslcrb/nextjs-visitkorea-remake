'use client'

import type { ReactNode } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface AnimatedRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedReveal({ children, className = '', delay = 0 }: AnimatedRevealProps) {
  const { ref, isInView } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        isInView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
