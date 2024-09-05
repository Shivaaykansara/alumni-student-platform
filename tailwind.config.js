/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    animation: {
      'spin-slow': 'spin 10s linear infinite',
      'move': 'move 3s ease-in-out infinite',
    },
    keyframes: {
      move: {
        '0%, 100%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(20px)' },
      },
    },
  },
};
export const plugins = [];
