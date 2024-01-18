/** @type {import('next').NextConfig} */
const { MODE } = process.env;

const nextConfig = {
  output: MODE || undefined,
};

module.exports = nextConfig;
