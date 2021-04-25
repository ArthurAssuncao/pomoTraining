const withPlugins = require ('next-compose-plugins');

const withImages = require ('next-images');

const nextConfig = {
  webpack: function (config) {
    config.module.rules.push ({
      test: /\.(eot|woff|woff2|ttf|mp3|svg)$/i,
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

module.exports = withPlugins (
  [
    [
      withImages ({
        ignorePath: ['svg'],
        fileExtensions: [
          'jpg',
          'jpeg',
          'png',
          'gif',
          'ico',
          'webp',
          'jp2',
          'avif',
        ],
        webpack (config, options) {
          config.module.rules.push ({
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            issuer: {
              test: /\.(jsx|tsx)?$/,
            },
            loader: '@svgr/webpack',
            options: {
              dimensions: false,
            },
          });
          // config.module.rules.push ({
          //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          //   loader: 'url-loader',
          //   options: {
          //     dimensions: false,
          //   },
          // });
          return config;
        },
      }),
    ],
  ],
  nextConfig
);
