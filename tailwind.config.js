/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",         // ✅ Include root-level index.html
    "./src/**/*.{html,js}"  // ✅ Include all HTML/JS in src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}