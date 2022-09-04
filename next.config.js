/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['s3-ap-southeast-1.amazonaws.com', 'thingproxy.freeboard.io'],
  },
  crossOrigin: 'anonymous',
};

module.exports = nextConfig;
