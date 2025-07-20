// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import HideOnDocs from "@/components/HideonDocs";

export const metadata: Metadata = {
  title: "태권도 웹",
  description: "태권도 웹 애플리케이션",
};

export default function RootLayout({
  children,                                    // 페이지별 실제 콘텐츠
}: {
  children: React.ReactNode;                  // 자식 타입 선언
}) {
  // 서버 컴포넌트이므로 usePathname 못 씁니다
  return (
    <html lang="ko">
      <body
        className="antialiased"
      >
        <div className="flex flex-col min-h-screen">
          {/* 헤더: 클라이언트 컴포넌트로 분리 */}
          <HideOnDocs>
           <Header />
        </HideOnDocs>

          {/* 메인 콘텐츠 */}
          <main className="flex-1 container mx-auto px-6 py-8">
            {children}
          </main>

          {/* 푸터 */}
         <HideOnDocs>
           <footer className="bg-gray-100 text-center py-4">
             <p className="text-sm text-gray-600">2025 태권도 웹.</p>
           </footer>
         </HideOnDocs>
        </div>
      </body>
    </html>
  );
}
