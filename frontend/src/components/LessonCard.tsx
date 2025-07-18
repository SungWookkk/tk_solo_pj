// src/components/TaekwondoLesson/LessonCard.tsx

import React from "react";

// 카드에 들어갈 데이터 타입 정의: 제목과 선택적 설명
interface LessonCardProps {
  title: string;
  description?: string;
}

// 제목과 설명을 보여주는 카드 UI
export default function LessonCard({ title, description }: LessonCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      )}
    </div>
  );
}
