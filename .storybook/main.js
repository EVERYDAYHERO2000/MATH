const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|vue)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: path.resolve('.storybook/svg-loader.js'),
        },
      ],
    });

    config.module.rules.push({
      test: /\.vue$/,
      use: [
        {
          loader: path.resolve('.storybook/alias-loader.js'),
          options: {
            
          }
        },
      ],
    });

    config.resolve.extensions.push('.js', '.vue', '.ts', '.tsx');

    return config;
  },
};
