/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // Next.js app 폴더
    "./pages/**/*.{js,ts,jsx,tsx}",    // pages 폴더
    "./components/**/*.{js,ts,jsx,tsx}"// components 폴더
  ],
  theme: {
    extend: {}, // 커스텀 테마를 여기에 추가
  },
  plugins: [], // Tailwind 플러그인(예: forms)을 추가할 때 여기에
};
