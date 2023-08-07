module.exports = {
  images: {
    domains: ["static.wixstatic.com", "res.cloudinary.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

// module.exports = {
//   // Webpack 5 is enabled by default
//   // You can still use webpack 4 while upgrading to the latest version of Next.js by adding the "webpack5: false" flag
//   webpack5: false,
// }
