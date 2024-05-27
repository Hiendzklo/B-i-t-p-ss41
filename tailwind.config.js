/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '50': '200px', // 200px tương ứng với w-50
      },
      height: {
        '50': '200px', // 200px tương ứng với h-50
      },
    },
  },
  plugins: [],
}
