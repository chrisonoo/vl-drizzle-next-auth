import type { Config } from 'tailwindcss';

export default {
  content: ['./src/app/**/*.{ts,tsx}', './src/content/**/*.mdx', './src/public/**/*.svg', './app/**/*.{ts,tsx}', './content/**/*.mdx', './public/**/*.svg'],
  theme: {},
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
