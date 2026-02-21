import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "img2.baidu.com", pathname: "/**" },
      { protocol: "https", hostname: "gips1.baidu.com", pathname: "/**" },
      { protocol: "https", hostname: "upload.wikimedia.org", pathname: "/**" },
    ],
  },
};

export default nextConfig;
