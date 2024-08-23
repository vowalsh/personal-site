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
        'sans': ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        'mono': ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      backgroundColor: {
        'header': 'rgba(0, 0, 0, 0.8)',
      },
      textColor: {
        'header': '#FFFFFF',
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '@font-face': [
          {
            fontFamily: 'SF Pro Display',
            src: 'url("/font/SF-Pro-Display-Regular.otf") format("opentype")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'SF Pro Display',
            src: 'url("/font/SF-Pro-Display-Bold.otf") format("opentype")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'SF Pro Text',
            src: 'url("/font/SF-Pro-Text-Regular.otf") format("opentype")',
            fontWeight: '400',
            fontStyle: 'normal',
          },
          {
            fontFamily: 'SF Pro Text',
            src: 'url("/font/SF-Pro-Text-Bold.otf") format("opentype")',
            fontWeight: '700',
            fontStyle: 'normal',
          },
        ],
      });
    },
  ],
}