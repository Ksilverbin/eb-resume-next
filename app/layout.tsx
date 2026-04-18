import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: "김은빈 | Frontend Developer",
  description: "김은빈 프론트엔드 개발자 이력서",
  openGraph: {
    title: '김은빈 | Frontend Developer',
    description: '사용자 경험을 코드로 설계하는 4년 차 프론트엔드 개발자 김은빈입니다.',
    url: 'https://about-eb.vercel.app/',
    siteName: '김은빈 이력서',
    images: [
      {
        url: 'https://about-eb.vercel.app/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
