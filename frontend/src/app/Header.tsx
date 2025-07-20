// src/app/Header.tsx
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";
import {useState} from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
     <header
      className="bg-white shadow-md h-16 flex items-center px-6">

        <Link
        href="/"
        className="text-xl font-bold"
      >
        태권도 웹
      </Link>
      <div className="flex-1 flex justify-center">
        <nav className="nav-menu flex space-x-8">
          {navItems.map((item) => {
            // 현재 경로와 비교해 활성화된 메뉴만 굵게
            const weightClass =
              pathname === item.href ? "font-bold" : "font-normal";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  inline-flex items-center h-full px-2
                  text-gray-700 hover:text-blue-600
                  ${weightClass}
                `}
              >
                {item.label} {/* 메뉴 텍스트 */}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 아바타 및 드롭다운 */}
      <div className="relative ml-auto mr-4">
        <img
          src="/avatar.svg"
          alt="User Avatar"
          className="w-8 h-8 rounded-full cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          // 클릭할 때마다 메뉴 open/close 토글
        />

        {menuOpen && (
          // menuOpen이 true일 때만 드롭다운 렌더링
          <div
            className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-10"
          >
            {/* 로그인 링크 */}
            <Link
              href="/auth/login"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
              // 클릭 후 메뉴 닫기
            >
              로그인
            </Link>

            {/* 회원가입 링크 */}
            <Link
              href="/auth/register"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              회원가입
            </Link>
          </div>
        )}
        </div>
    </header>
  );
}
