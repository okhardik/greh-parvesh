/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export
  basePath: "/greh-parvesh", // Your GitHub repository name
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export if using Next/Image
  },
}

module.exports = nextConfig
