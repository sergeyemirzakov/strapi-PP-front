/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://strapi-pp-back.herokuapp.com'],
  },
};

module.exports = nextConfig;
