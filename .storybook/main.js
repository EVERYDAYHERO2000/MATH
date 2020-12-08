const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|vue)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {

    config.resolve.alias = {
      ...config.resolve.alias,
      '/@/': path.resolve(__dirname, '../src'),
      '/@components/': path.resolve(__dirname, '../src/components'),
      '/@assets/': path.resolve(__dirname, '../src/assets'),
      '/@css/': path.resolve(__dirname, '../src/css'),
      '/@fn/': path.resolve(__dirname, '../src/fn'),
      '/@app/': path.resolve(__dirname, '../src/App'),
    };
    
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    
    config.resolve.extensions.push(".js", ".vue", ".ts", ".tsx");

    
    return config;
  },
};
