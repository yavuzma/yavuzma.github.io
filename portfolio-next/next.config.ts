import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Export each route as a folder with index.html so /work/kcs and /work/kcs/ both resolve on GitHub Pages.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
