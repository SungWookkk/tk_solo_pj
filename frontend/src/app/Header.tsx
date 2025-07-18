// src/app/Header.tsx
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { label: "대회 일정/신청", href: "/competitions" },
  { label: "신청 현황",       href: "/status"       },
  { label: "커뮤니티",        href: "/community"    },
  { label: "공지사항",        href: "/notice"       },
];

export default function Header() {
  const pathname = usePathname();               // 현재 URL 경로를 가져옴

  return (
    <header
      className="bg-white shadow-md h-16 flex items-center px-6"
      /*  이런 형식
        bg-white: 배경 흰색
        shadow-md: 중간 크기 그림자
        h-16: 높이 4rem(64px)
        flex items-center: 수직 중앙 정렬된 flex 컨테이너
        px-6: 좌우 패딩 1.5rem
      */
    >
        <Link
        href="/"                                     // 클릭 시 루트(메인) 페이지로 이동
        className="text-xl font-bold"                // text-xl: 폰트 크기, font-bold: 굵게
      >
        태권도 웹
      </Link>
      <div className="flex-1 flex justify-center">
        <nav className="nav-menu flex space-x-8">
          {navItems.map((item) => (

            <Link
              key={item.href}                    // React 리스트용 key
              href={item.href}                   // 이동 URL
              className={`
                inline-flex items-center h-full px-2
                text-gray-700 hover:text-blue-600
                ${pathname === item.href ? "font-bold" : "font-normal"} 
                /* 현재 페이지만 font-bold 적용 */
              `}
            >
              {item.label}                      {/* 메뉴 텍스트 */}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
