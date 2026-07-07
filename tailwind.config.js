/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        purple: 'var(--color-purple)',
        highlight: 'var(--color-highlight)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        title: 'var(--font-family-title)',
        body: 'var(--font-family-body)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        'neon-primary': 'var(--shadow-neon-primary)',
        'neon-accent': 'var(--shadow-neon-accent)',
      }
    },
  },
  plugins: [],
}
