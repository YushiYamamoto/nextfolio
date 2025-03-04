/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的サイト生成を有効化
  images: {
    unoptimized: true, // 静的サイト生成のために画像の最適化を無効化
  },
  // 静的サイト生成のため、i18nは無効化
  // i18n: {
  //   defaultLocale: 'ja',
  //   locales: ['ja', 'en'],
  // },
  
  // 警告を抑制するための設定
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
