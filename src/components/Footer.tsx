import { navItems } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-[#0D0D1A] px-6 py-16 text-white/60">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-lg font-900 text-white tracking-tight">
              <span className="text-xl">🇰🇷</span>
              <span>대한구석</span>
            </div>
            <p className="mt-4 max-w-md text-sm font-300 leading-relaxed">
              대한민국 구석구석의 숨은 매력을 발견하는 여행.
              한국 정부가 제공하는 공식 관광 정보를 바탕으로 한
              프리미엄 여행 가이드입니다.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-700 text-white tracking-wider uppercase">둘러보기</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-sm font-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-700 text-white tracking-wider uppercase">정보</h4>
            <ul className="space-y-3 text-sm font-300">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  고객센터
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs font-300">
          <p>© {new Date().getFullYear()} 대한구석. All rights reserved.</p>
          <p className="mt-1">
            본 사이트는 한국 관광 공식 정보를 기반으로 제작되었습니다.
          </p>
        </div>
      </div>
    </footer>
  )
}
