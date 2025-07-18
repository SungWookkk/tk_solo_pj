// src/components/TaekwondoLesson/LessonList.tsx

import React from "react";

//  LessonList 컴포넌트 Props 타입: 자식(카드들)을 children으로 받음
interface LessonListProps {
  children: React.ReactNode;
}

// LessonList 컴포넌트: 그리드 레이아웃으로 카드들을 배치
export default function LessonList({ children }: LessonListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}
