/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'terminal-black': '#000000',
        'terminal-white': '#FFFFFF',
      },
      fontFamily: {
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      backgroundColor: {
        'header': 'rgba(0, 0, 0, 0.8)',
      },
      textColor: {
        'header': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
