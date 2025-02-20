/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: 'build', // Changes the build output directory to `./dist/`.
    images: {
      unoptimized: true,
    },
    reactStrictMode: false
  }
   
  export default nextConfig