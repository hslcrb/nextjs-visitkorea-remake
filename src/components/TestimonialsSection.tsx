'use client'

import { useState } from 'react'
import { testimonials } from '@/data/content'
import AnimatedReveal from './AnimatedReveal'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="gallery" className="bg-[#FAFAF5] px-6 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <AnimatedReveal>
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-xs font-600 tracking-[0.2em] text-[#C8102E] uppercase">
              Reviews
            </span>
            <h2 className="text-3xl font-800 text-[#1A1A2E] md:text-5xl">여행자의 이야기</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#5A5A6E] font-300 text-lg">
              대한민국을 다녀간 여행자들의 생생한 후기
            </p>
          </div>
        </AnimatedReveal>

        <div className="relative">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${active * 100}%)` }}>
            {testimonials.map((t) => (
              <div key={t.id} className="w-full shrink-0 px-4">
                <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-sm md:p-12">
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg key={i} className={`h-5 w-5 ${i < t.rating ? 'text-[#D4A843]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg font-300 text-[#5A5A6E] leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1A2E] text-sm font-700 text-white">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-600 text-[#1A1A2E]">{t.name}</p>
                      <p className="text-xs font-400 text-[#8A8A9E]">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === active ? 'w-8 bg-[#C8102E]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`${i + 1}번째 리뷰`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
