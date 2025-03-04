/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Outputs a Single-Page Application (SPA).
  // output: 'export',
  distDir: 'build', // Changes the build output directory to `./dist/`.
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
}

export default nextConfig
