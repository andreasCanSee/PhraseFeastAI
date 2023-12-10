/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        mainBrown: '#551100',
        mainYellow: '#FFD268',
        secondaryYellow: '#F6AF36',
        mainOrange: '#F06927',
      }
    },
  },
  plugins: [],
}

