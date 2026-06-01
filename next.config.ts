import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow loading the dev server (and its HMR websocket) from these LAN origins,
  // not just localhost. Add your machine's IP / subnet here.
  allowedDevOrigins: ["192.168.178.76", "192.168.178.*"],
};

export default nextConfig;
