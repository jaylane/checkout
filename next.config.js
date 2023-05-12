/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      unoptimized: true,
    },
    experimental: {
      appDir: true,
    },
    output: "standalone",
  };

module.exports = nextConfig
