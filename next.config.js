const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "c2.staticflickr.com",
        // port: '',
        // pathname: '/my-bucket/**',
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        // port: '',
        // pathname: '/my-bucket/**',
      },
    ],
  },
};
