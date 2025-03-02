/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myhomemakr.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
