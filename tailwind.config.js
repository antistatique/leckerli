/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  important: true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: `var(--leckerli-primary, ${colors.emerald['600']})`,
          hover: `var(--leckerli-primary-hover, ${colors.emerald['700']})`,
          active: `var(--leckerli-primary-active, ${colors.emerald['900']})`,
        },
        foreground: `var(--leckerli-foreground, ${colors.black})`,
        background: `var(--leckerli-background, ${colors.white})`,
      },
      fontFamily: {
        primary: `var(--leckerli-font, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji")`
      },
      keyframes: {
        'slide-in-up': {
          '0%': { opacity: '0.4', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in-up': 'slide-in-up 0.4s ease-out',
      },
    },
  },
  plugins: [],
}

