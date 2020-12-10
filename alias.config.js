const path = require('path');

module.exports = function () {
  return {
    '/@/': path.resolve(__dirname, './src'),
    '/@components/': path.resolve(__dirname, './src/components'),
    '/@assets/': path.resolve(__dirname, './src/assets'),
    '/@css/': path.resolve(__dirname, './src/css'),
    '/@fn/': path.resolve(__dirname, './src/fn'),
    '/@app/': path.resolve(__dirname, './src/App'),
  }
}    