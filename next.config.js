module.exports = {
  images: {
    domains: ['static.wixstatic.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
}
