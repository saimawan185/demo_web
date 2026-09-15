import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/demo_web",
  assetPrefix: "/demo_web/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
