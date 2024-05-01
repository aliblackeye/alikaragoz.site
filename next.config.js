/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-international', 'international-types'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Uncomment to set base path
  // basePath: '/base',
  // Uncomment to use Static Export
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        pathname: '/**',
        port: '3000',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
        port: '3000',
      },
    ],
  },
};

module.exports = nextConfig;
