[build]
  base = "/"
  publish = "nextfolio/.next"
  command = "npm run build"

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'nextfolio/.next', // Adjusted to match Netlify configuration
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
  // Uncomment if you want to export as a static site
  // output: 'export',
};

export default nextConfig;
