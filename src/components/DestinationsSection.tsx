'use client'

import { destinations } from '@/data/content'
import AnimatedReveal from './AnimatedReveal'

export default function DestinationsSection() {
  return (
    <section id="destinations" className="bg-[#FAFAF5] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedReveal>
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-xs font-600 tracking-[0.2em] text-[#C8102E] uppercase">
              Destinations
            </span>
            <h2 className="text-3xl font-800 text-[#1A1A2E] md:text-5xl">추천 여행지</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#5A5A6E] font-300 text-lg">
              역사, 자연, 문화가 살아 숨 쉬는 대한민국의 매력적인 여행지를 소개합니다
            </p>
          </div>
        </AnimatedReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((item, i) => (
            <AnimatedReveal key={item.id} delay={i * 80}>
              <a href={`/destinations/${item.id}`} className="group relative block overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-600 text-[#1A1A2E]">
                    {item.tag}
                  </span>
                  <span className="absolute bottom-4 left-4 text-sm font-500 text-white/80">
                    {item.location}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-700 text-[#1A1A2E]">{item.name}</h3>
                  <p className="mt-1 text-sm font-400 text-[#5A5A6E]">{item.nameEn}</p>
                  <p className="mt-3 text-sm font-300 text-[#5A5A6E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </a>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
