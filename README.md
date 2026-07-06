# 🇰🇷 대한구석 — 대한민국 구석구석 여행 가이드

> 한국 정부 공식 관광 정보를 기반으로 한 프리미엄 SPA 여행 가이드 웹앱.
> Next.js 16 App Router + Tailwind CSS v4로 리메이크.

## 미리보기

`npm run dev`로 로컬 실행 후 `http://localhost:3000`에서 확인 가능합니다.

## 주요 기능

### 페이지 구성

| 경로 | 설명 |
|------|------|
| `/` | 메인 랜딩 페이지 — 히어로 캐러셀, 여행지/음식/문화 섹션, 통계, 리뷰 |
| `/destinations/[id]` | 개별 여행지 상세 페이지 |

### 섹션

- **히어로 캐러셀** — 풀스크린 크로스페이드 자동재생 (5.5초 간격, 호버 시 일시정지)
- **추천 여행지** — 8개 명소 카드 그리드 (호버 확대 효과, 개별 페이지 링크)
- **통계** — IntersectionObserver 기반 애니메이션 카운터
- **한국의 맛** — 12가지 음식 좌우 교차 레이아웃
- **문화유산** — 8가지 문화 다크 테마 갤러리
- **여행자 리뷰** — 슬라이딩 testimonial 캐러셀
- **개별 여행지 페이지** — 히어로 + 역사/볼거리/갤러리/여행정보/주변관광지

### 기술 스택

| 기술 | 버전 |
|------|------|
| Next.js | 16.2.10 |
| React | 19.2.4 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| 번들러 | Turbopack |

### 디자인 시스템

- **폰트**: Presentation (Freesentation) — 100~900 전 웨이트 CDN 로딩, `font-display: swap`
- **컬러**:
  - Primary: `#1A1A2E` (딥 네이비)
  - Accent: `#C8102E` (코리안 레드)
  - Gold: `#D4A843`
  - Background: `#FAFAF5` (웜 화이트)
- **애니메이션**: IntersectionObserver + CSS transition, `will-change: transform` GPU 가속

### 최적화

- 정적 생성 (Static Generation) — 모든 페이지 빌드 타임에 프리렌더
- `prefers-reduced-motion` 대응
- `font-display: swap` — 폰트 로딩 중 FOIT 방지
- `loading="lazy"` 이미지 지연 로딩
- 반응형 디자인 (모바일/태블릿/데스크톱)
- 최소 JS 번들 — Framer Motion 등 외부 애니메이션 라이브러리 미사용

### SEO

- 한국어 메타데이터 (`lang="ko"`)
- 각 페이지별 동적 `generateMetadata`
- OpenGraph 태그
- 한글 키워드

## 설치 및 실행

```bash
npm install
npm run dev
```

## 빌드

```bash
npm run build
```

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css              # Presentation @font-face + Tailwind v4 테마
│   ├── layout.tsx               # 루트 레이아웃, 한국어 메타데이터
│   ├── page.tsx                 # 메인 SPA 페이지
│   ├── not-found.tsx            # 404 페이지
│   └── destinations/[id]/
│       ├── page.tsx             # 동적 라우트 (generateStaticParams + generateMetadata)
│       └── DestinationClient.tsx # 여행지 상세 페이지 클라이언트 컴포넌트
├── components/
│   ├── Header.tsx               # 스크롤 감지 투명→백색 네비게이션
│   ├── Hero.tsx                 # 크로스페이드 캐러셀 히어로
│   ├── AnimatedReveal.tsx       # IntersectionObserver 스크롤 리빌 래퍼
│   ├── DestinationsSection.tsx  # 여행지 카드 그리드
│   ├── CounterSection.tsx       # 애니메이션 통계 카운터
│   ├── FoodSection.tsx          # 음식 교차 레이아웃
│   ├── CultureSection.tsx       # 문화 다크 갤러리
│   ├── TestimonialsSection.tsx  # 리뷰 슬라이더
│   ├── Footer.tsx               # 4컬럼 풋터
│   └── BackToTop.tsx            # 맨 위로 가기 버튼
├── data/
│   └── content.ts               # 모든 정적 콘텐츠 (8 여행지, 12 음식, 8 문화, 통계, 리뷰)
└── hooks/
    └── useIntersectionObserver.ts # 커스텀 IntersectionObserver 훅
```

## 라이선스

MIT
