import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAF5] px-6 text-center">
      <span className="text-8xl font-900 text-[#1A1A2E]/10">404</span>
      <h1 className="mt-4 text-3xl font-800 text-[#1A1A2E]">페이지를 찾을 수 없습니다</h1>
      <p className="mt-2 text-[#5A5A6E] font-300">존재하지 않는 페이지이거나 이동되었을 수 있습니다.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1A1A2E] px-6 py-3 text-sm font-600 text-white transition-all hover:bg-[#C8102E]"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        홈으로 가기
      </Link>
    </div>
  )
}
