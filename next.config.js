module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }
    return config;
  },
};

// Cannot read property '__H' of undefined
// https://github.com/preactjs/next-plugin-preact/issues/61#issuecomment-1167028288
