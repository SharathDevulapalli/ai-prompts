import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Libre Franklin"', 'ui-sans-serif', 'system-ui'],
        body: ['"Merriweather"', 'ui-serif', 'Georgia']
      },
      colors: {
        ink: {
          DEFAULT: '#1c1b1a',
          subtle: '#3b3a39'
        },
        parchment: '#fdf8f2',
        accent: {
          amber: '#d97706',
          rose: '#f43f5e'
        }
      },
      maxWidth: {
        prose: '65ch',
        magazine: '90ch'
      },
      screens: {
        'print-xl': '1440px'
      }
    }
  },
  plugins: []
};

export default config;
