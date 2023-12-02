/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      aspectRatio: {
        thumbnail: '1.3',
      },
    },
    // colors: {
    //   dark: '#18181b',
    //   [#07b6D5]: '#07b6D5',
    //   darkGray: '#94849b',
    //   [#fdfff7]: '#fdfff7',
    //   lightGray: '#f2efea',
    // },
  },
  plugins: [require('daisyui')],
};
