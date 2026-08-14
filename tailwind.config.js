/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a1628',
        'royal-blue': '#1a3a6b',
        purple: '#4a2b7a',
        cyan: '#00d4ff',
        gold: '#c9a84c',
      },
    },
  },
  plugins: [],
}
