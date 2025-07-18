// src/components/TaekwondoLesson/index.tsx

import React from "react";
import LessonCard from "./LessonCard";
import LessonList from "./LessonList";

// 부모 컴포넌트: LessonList 안에 여러 LessonCard 렌더링
export default function TaekwondoLesson() {
  // 예시 데이터
  const lessons = [
    { title: "Taeguk 1", description: "기초 동작 연습" },
    { title: "Taeguk 2", description: "중급 동작 연습" },
    { title: "Koryo", description: "고급 동작 연습" },
    { title: "Koryo", description: "고급 동작 연습" },
    { title: "Koryo", description: "고급 동작 연습" },
  ];

  return (
    <section>
      {/* 섹션 제목 */}
      <h2 className="text-2xl font-bold mb-4">품새 수련</h2>

      {/* LessonList 그리드 안에 카드 반복 출력 */}
      <LessonList>
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.title}
            title={lesson.title}
            description={lesson.description}
          />
        ))}
      </LessonList>
    </section>
  );
}
