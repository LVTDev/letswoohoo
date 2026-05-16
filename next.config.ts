import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "o5qiahlghji2exja.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],  }
};

export default nextConfig;
