import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/iris_saloon_demo",
  assetPrefix: "/iris_saloon_demo/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
