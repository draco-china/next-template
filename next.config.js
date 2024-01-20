const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

const { MODE } = process.env;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: MODE || undefined,
};

module.exports = withPWA(nextConfig);
