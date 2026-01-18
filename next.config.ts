import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dublin-moving-guide',
  images: {
    unoptimized: true,
  },
  // Trailing slash for better static hosting
  trailingSlash: true,
};

export default nextConfig;
