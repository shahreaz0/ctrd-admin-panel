/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "dist",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
  },
};

module.exports = nextConfig;
