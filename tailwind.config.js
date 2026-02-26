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
        'slide-in-left': {
          '0%': { opacity: '0.4', transform: 'translateX(-2rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-in-left': 'slide-in-left 0.6s ease-out',
      },
    },
  },
  plugins: [],
}

