'use client'

import { cultureItems } from '@/data/content'
import AnimatedReveal from './AnimatedReveal'

export default function CultureSection() {
  return (
    <section id="culture" className="relative bg-[#1A1A2E] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedReveal>
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-xs font-600 tracking-[0.2em] text-[#D4A843] uppercase">
              Culture
            </span>
            <h2 className="text-3xl font-800 text-white md:text-5xl">문화유산</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60 font-300 text-lg">
              오천년 역사 속에서 꽃피운 한국 문화의 깊이와 아름다움
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {cultureItems.map((item, i) => (
            <AnimatedReveal key={item.id} delay={i * 100}>
              <div className="group relative h-80 overflow-hidden rounded-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-700 text-white">{item.name}</h3>
                  <p className="mt-1 text-sm font-400 text-white/60">{item.nameEn}</p>
                  <p className="mt-3 text-sm font-300 text-white/70 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
