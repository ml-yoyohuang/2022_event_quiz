const path = require('path');

const webpackConfig = require('../webpack/webpack.config');

module.exports = {
  stories: ['../../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    // '@storybook/addon-storysource', // https://www.npmjs.com/package/@storybook/addon-storysource
  ],
  webpackFinal(config, { configType }) {
    console.log('configType', configType);
    const DEV_MODE = configType === 'development';
    Object.assign(config.resolve.alias, webpackConfig.resolve.alias);
    config.module.rules.push(
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-plain-loader',
            options: {
              data: {
                DEV_MODE,
                APP_ENV: process.env.APP_ENV,
              },
            },
          },
        ],
      },
    );
    config.module.rules.push({
      test: /\.(styl|stylus)$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            plugins: () => [
              require('postcss-flexbugs-fixes'),
              require('autoprefixer')({
                flexbox: 'no-2009',
              }),
            ],
          },
        },
        {
          loader: 'stylus-loader',
          options: {
            paths: ['src/css/', 'src/assets/', 'src/'],
            sourceMap: true,
            define: {
              DEV_MODE,
            },
            preferPathResolver: 'webpack',
            import: [path.resolve('src/css/mixins/_index.styl')],
          },
        },
      ],
    });
    return config;
  },
};
