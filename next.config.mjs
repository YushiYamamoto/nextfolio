[build]
  base = "/"
  publish = "nextfolio/.next"
  command = "npm run build"

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next', // 出力ディレクトリを明示的に指定
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
  // Uncomment if you want to export as a static site
  // output: 'export',
};

export default nextConfig;
