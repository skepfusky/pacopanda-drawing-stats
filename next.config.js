/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['d.furaffinity.net'],
  },
}

module.exports = nextConfig

const MDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

module.exports = MDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
})