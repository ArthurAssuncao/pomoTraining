const withPlugins = require ('next-compose-plugins');

const withImages = require ('next-images');

const nextConfig = {
  webpack: function (config) {
    config.module.rules.push ({
      test: /\.(eot|woff|woff2|ttf|mp3)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
};

module.exports = withPlugins ([[withImages]], nextConfig);
