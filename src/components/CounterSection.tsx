'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '@/data/content'
import AnimatedReveal from './AnimatedReveal'

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              clearInterval(timer)
              setCount(value)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center">
      <span className="text-3xl font-900 text-[#D4A843] md:text-4xl lg:text-5xl tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
    </div>
  )
}

export default function CounterSection() {
  return (
    <section className="bg-[#1A1A2E] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <AnimatedReveal>
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block text-xs font-600 tracking-[0.2em] text-[#D4A843] uppercase">
              Korea in Numbers
            </span>
            <h2 className="text-3xl font-800 text-white md:text-4xl">대한민국 여행의 모든 것</h2>
          </div>
        </AnimatedReveal>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <AnimatedReveal key={s.label} delay={i * 80}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-center text-xs font-400 text-white/60">{s.label}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
