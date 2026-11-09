import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  redirects: async () => [
    {
      source: "/marketing-experiencial",
      destination: "/agencia-btl",
      permanent: true,
    },
    {
      source: "/marketing-experiencial/:path*",
      destination: "/agencia-btl/:path*",
      permanent: true,
    },
    {
      source: "/experiential-marketing",
      destination: "/experiential-marketing-agency",
      permanent: true,
    },
    {
      source: "/experiential-marketing/:path*",
      destination: "/experiential-marketing-agency/:path*",
      permanent: true,
    },
  ],
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
