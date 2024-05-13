const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.OUTPUT || undefined,
  env: {
    OUTPUT: process.env.OUTPUT,
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
    API_URL: process.env.API_URL || 'http://localhost:3000',
    BAIDU: process.env.BAIDU,
    GOOGLE: process.env.GOOGLE,
    YANDEX: process.env.YANDEX,
    FACEBOOK: process.env.FACEBOOK,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
