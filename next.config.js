module.exports = {
  images: {
    domains: ['static.wixstatic.com', 'res.cloudinary.com'],


  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    return config
  },
}
