import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          pumpkin: '#E07B12',
          burnt: '#D35400',
          anthracite: '#2D2D2D',
          cream: '#FAF8F5',
          light: '#F5F5F5',
          medium: '#B8B8B8',
          text: '#555555'
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        accent: ['var(--font-accent)', 'sans-serif']
      },
      boxShadow: {
        soft: '0 15px 35px -25px rgba(0,0,0,0.35)',
        card: '0 20px 45px -30px rgba(0,0,0,0.35)'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
      }
    }
  },
  plugins: []
};

export default config;
