'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { heroSlides } from '@/data/content'

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const len = heroSlides.length

  const goTo = useCallback((index: number) => {
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % len)
  }, [len])

  useEffect(() => {
    if (isPaused) return
    intervalRef.current = setInterval(next, 5500)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, next])

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: i === current ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 8s ease-out',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl">
          <div className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-500 tracking-widest uppercase backdrop-blur-sm">
            대한민국 구석구석
          </div>
          <h2 className="mb-6 text-4xl font-800 leading-tight tracking-tight md:text-6xl lg:text-7xl whitespace-pre-line">
            {heroSlides[current].title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-300 text-white/80 md:text-xl">
            {heroSlides[current].subtitle}
          </p>
        </div>

        <div className="absolute bottom-12 flex items-center gap-3">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current
                  ? 'w-10 bg-white'
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`${i + 1}번 슬라이드로 이동`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-6">
        <div className="flex flex-col items-center gap-1 text-white/50 text-xs font-300 animate-bounce">
          <span>SCROLL</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="rotate-90">
            <path d="M1 4L6 9L11 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
