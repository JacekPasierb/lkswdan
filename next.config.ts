import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: ["cdn.example.com", "images.unsplash.com"],
  },
};

export default nextConfig;
