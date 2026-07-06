'use client'

import { useEffect, useState } from "react"
import type { Destination } from "@/data/content"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AnimatedReveal from "@/components/AnimatedReveal"
import BackToTop from "@/components/BackToTop"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={`h-4 w-4 ${i < Math.round(rating) ? 'text-[#D4A843]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-600 text-[#5A5A6E]">{rating.toFixed(1)}</span>
    </div>
  )
}

export default function DestinationClient({ dest }: { dest: Destination }) {
  const [activeImage, setActiveImage] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="relative h-[60vh] min-h-[400px] md:h-[70vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms]"
            style={{
              backgroundImage: `url(${dest.image})`,
              transform: scrolled ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="mx-auto max-w-7xl">
              <AnimatedReveal>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-600 text-white border border-white/20">
                    {dest.tag}
                  </span>
                  <span className="text-sm text-white/60">{dest.location}</span>
                  <StarRating rating={dest.rating} />
                  <span className="text-xs text-white/50">리뷰 {dest.reviewCount.toLocaleString()}개</span>
                </div>
                <h1 className="text-4xl font-900 text-white md:text-6xl lg:text-7xl tracking-tight">
                  {dest.name}
                </h1>
                <p className="mt-1 text-lg font-300 text-white/70 md:text-xl">{dest.nameEn}</p>
              </AnimatedReveal>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <AnimatedReveal>
                  <h2 className="text-2xl font-800 text-[#1A1A2E] mb-4">역사와 이야기</h2>
                  <p className="text-base font-300 text-[#5A5A6E] leading-relaxed whitespace-pre-line">
                    {dest.history}
                  </p>
                </AnimatedReveal>

                <AnimatedReveal delay={100}>
                  <h2 className="text-2xl font-800 text-[#1A1A2E] mt-12 mb-6">주요 볼거리</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {dest.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-xl bg-[#FAFAF5] p-4 transition-colors hover:bg-[#F0EEE5]">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C8102E] text-xs font-700 text-white">
                          {i + 1}
                        </span>
                        <p className="text-sm font-400 text-[#1A1A2E]">{h}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedReveal>

                <AnimatedReveal delay={150}>
                  <h2 className="text-2xl font-800 text-[#1A1A2E] mt-12 mb-6">갤러리</h2>
                  <div className="space-y-3">
                    <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                        style={{ backgroundImage: `url(${dest.gallery[activeImage]})` }}
                      />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {dest.gallery.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all duration-300 ${
                            i === activeImage ? 'ring-2 ring-[#C8102E] ring-offset-2' : 'opacity-60 hover:opacity-100'
                          }`}
                        >
                          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                        </button>
                      ))}
                    </div>
                  </div>
                </AnimatedReveal>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <AnimatedReveal delay={50}>
                    <div className="rounded-2xl border border-[#E8E4D8] bg-[#FAFAF5] p-6">
                      <h3 className="text-lg font-700 text-[#1A1A2E] mb-4">여행 정보</h3>
                      <div className="space-y-4">
                        <div>
                          <span className="text-xs font-600 text-[#C8102E] tracking-wider uppercase">Best Time</span>
                          <p className="mt-1 text-sm font-400 text-[#5A5A6E]">{dest.bestTime}</p>
                        </div>
                        <div>
                          <span className="text-xs font-600 text-[#C8102E] tracking-wider uppercase">How to Get</span>
                          <p className="mt-1 text-sm font-400 text-[#5A5A6E]">{dest.howToGet}</p>
                        </div>
                        <div>
                          <span className="text-xs font-600 text-[#C8102E] tracking-wider uppercase">날씨</span>
                          <p className="mt-1 text-sm font-400 text-[#5A5A6E]">{dest.weather}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedReveal>

                  <AnimatedReveal delay={80}>
                    <div className="rounded-2xl border border-[#E8E4D8] bg-[#FAFAF5] p-6">
                      <h3 className="text-lg font-700 text-[#1A1A2E] mb-4">Travel Tip</h3>
                      <p className="text-sm font-400 text-[#5A5A6E] leading-relaxed">{dest.tip}</p>
                    </div>
                  </AnimatedReveal>

                  {dest.nearby.length > 0 && (
                    <AnimatedReveal delay={120}>
                      <div className="rounded-2xl border border-[#E8E4D8] bg-[#FAFAF5] p-6">
                        <h3 className="text-lg font-700 text-[#1A1A2E] mb-4">주변 관광지</h3>
                        <div className="space-y-3">
                          {dest.nearby.map((n) => (
                            <a
                              key={n.id}
                              href={`/destinations/${n.id}`}
                              className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm font-500 text-[#1A1A2E] transition-all hover:bg-[#C8102E]/5 hover:text-[#C8102E] group"
                            >
                              <span>{n.name}</span>
                              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    </AnimatedReveal>
                  )}

                  <a
                    href="/"
                    className="flex items-center justify-center gap-2 rounded-xl bg-[#1A1A2E] px-6 py-3 text-sm font-600 text-white transition-all hover:bg-[#C8102E]"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    홈으로 돌아가기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
