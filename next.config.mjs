/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // If your repo is shraiyan47.github.io/portfolio, set this to '/portfolio'
  // If it is just shraiyan47.github.io, you can delete the line below
  basePath: '/your-repo-name', 
}

export default nextConfig