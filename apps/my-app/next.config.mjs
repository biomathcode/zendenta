/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ceaseless-marten-488.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
