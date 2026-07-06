'use client'

import { foods } from '@/data/content'
import AnimatedReveal from './AnimatedReveal'

export default function FoodSection() {
  return (
    <section id="food" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedReveal>
          <div className="mb-16 text-center">
            <span className="mb-3 inline-block text-xs font-600 tracking-[0.2em] text-[#C8102E] uppercase">
              Korean Cuisine
            </span>
            <h2 className="text-3xl font-800 text-[#1A1A2E] md:text-5xl">한국의 맛</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#5A5A6E] font-300 text-lg">
              오랜 전통과 현대적 감각이 어우러진 한국 음식의 다채로운 세계
            </p>
          </div>
        </AnimatedReveal>

        <div className="space-y-20">
          {foods.map((item, i) => (
            <AnimatedReveal key={item.id} delay={i * 60}>
              <div className={`flex flex-col gap-8 md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1">
                  <div className="group relative h-72 overflow-hidden rounded-2xl md:h-96">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
                <div className="flex-1 md:px-8">
                  <span className="mb-2 inline-block text-xs font-600 tracking-wider text-[#C8102E] uppercase">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-700 text-[#1A1A2E] md:text-3xl">{item.name}</h3>
                  <p className="mt-1 text-sm font-400 text-[#8A8A9E]">{item.nameEn}</p>
                  <p className="mt-4 text-base font-300 text-[#5A5A6E] leading-relaxed">
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
