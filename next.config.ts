import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages serves from /roast-and-ritual/ for project repos
  basePath: '/roast-and-ritual',
  images: {
    unoptimized: true,
  },
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
