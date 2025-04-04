import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/*",
        search: "",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
