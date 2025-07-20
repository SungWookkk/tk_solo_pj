// src/components/HideOnDocs.tsx
"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function HideOnDocs({ children }: { children: ReactNode }) {
  const path = usePathname();           // 현재 경로 가져오기
  if (path.startsWith("/docs")) return null;
  return <>{children}</>;
}
