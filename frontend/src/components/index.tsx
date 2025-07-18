// src/components/TaekwondoLesson/index.tsx

import React from "react";
import LessonCard from "./LessonCard";
import LessonList from "./LessonList";

// 부모 컴포넌트: LessonList 안에 여러 LessonCard 렌더링
export default function TaekwondoLesson() {
  // 하드 데이터
  const lessons = [
    { title: "Taeguk 1", description: "기초 동작 연습" },
    { title: "Taeguk 2", description: "중급 동작 연습" },
    { title: "Koryo", description: "고급 동작 연습" },
    { title: "Koryo", description: "고급 동작 연습" },
    { title: "Koryo", description: "고급 동작 연습" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">품새 수련</h2>
      <LessonList>
        {lessons.map((lesson, idx) => (
          <LessonCard
            key={`${lesson.title}-${idx}`}
            title={lesson.title}
            description={lesson.description}
          />
        ))}
      </LessonList>
    </section>
  );
}