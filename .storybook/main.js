const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|vue)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(vue|js)$/,
      use: [
        {
          loader: path.resolve('.storybook/loader.js'),
        },
      ],
      include: path.resolve(__dirname, '../src/'),
    });

    config.resolve.extensions.push('.js', '.vue', '.ts', '.tsx');

    return config;
  },
};
