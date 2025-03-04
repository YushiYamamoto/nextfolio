import nextI18nConfig from './next-i18next.config.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: 'build', // Changes the build output directory to `./dist/`.
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  ...nextI18nConfig.i18n,
}

export default nextConfig