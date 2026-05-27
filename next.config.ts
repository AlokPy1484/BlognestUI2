import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "devwithalok.com"
      },
      {
        protocol: "https",
        hostname: "img.icons8.com"
      }
    ]
  }
};

export default nextConfig;
