import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.1.25:3000", // add your IP if accessing from another device
  ],
};

export default nextConfig;
