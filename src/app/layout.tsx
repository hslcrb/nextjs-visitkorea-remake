import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대한구석 | 대한민국 구석구석 여행 가이드",
  description: "대한민국 구석구석의 숨은 매력을 발견하는 프리미엄 여행 가이드. 한국 정부 공식 관광 정보를 기반으로 한 여행 추천 서비스입니다.",
  keywords: ["한국여행", "대한민국구석구석", "관광", "여행추천", "Korea Travel"],
  openGraph: {
    title: "대한구석 | 대한민국 구석구석 여행 가이드",
    description: "대한민국 구석구석의 숨은 매력을 발견하는 프리미엄 여행 가이드",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
