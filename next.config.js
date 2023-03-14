/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  swcMinify: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
};
