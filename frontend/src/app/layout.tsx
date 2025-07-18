// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "태권도 웹",
  description: "태권도 웹 애플리케이션",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          {/* 헤더 */}
          <header className="bg-white shadow-md h-16 flex items-center px-6">
            <h1 className="text-xl font-bold">태권도 웹</h1>
          </header>

          {/* 메인 콘텐츠 */}
          <main className="flex-1 container mx-auto px-6 py-8">
            {children}
          </main>

          {/* 푸터 */}
          <footer className="bg-gray-100 text-center py-4">
            <p className="text-sm text-gray-600">
              2025 태권도 웹.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
