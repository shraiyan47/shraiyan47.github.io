/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
  allowedDevOrigins: [
    'http://192.168.0.108:3000',
    'http://192.168.0.110:3000',
    'http://localhost:3000',
  ],
  httpAgentOptions: {
    keepAlive: true,
  },

}

export default nextConfig

