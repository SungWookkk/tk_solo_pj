// src/app/docs/page.tsx
"use client";

import { RedocStandalone } from "redoc";

export default function DocsPage() {
  return (
    <div style={{ height: "100vh" }}>
      <RedocStandalone
        specUrl="/openapi.json"                    // 파일 경로
        options={{
          theme: {
            colors: { primary: { main: "#3182ce" }},
            typography: { fontSize: "14px" }
          },
          scrollYOffset: 64
        }}
      />
    </div>
  );
}
