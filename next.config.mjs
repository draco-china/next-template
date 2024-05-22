import nextPWA from 'next-pwa';

const splitIndex = Object.keys(process.env).findIndex((key) => key === '__NEXT_PROCESSED_ENV');
const env = Object.fromEntries(
  Object.entries(process.env)
    .slice(splitIndex + 1)
    .map(([key, value]) => [key, value]),
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env,
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

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

export default withPWA(nextConfig);
