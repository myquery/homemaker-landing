const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
      },
      {
        protocol: "https",
        hostname: "myhomemakr.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
