const svgPlugin = require('vite-plugin-svg');

module.exports = {
    root: '.',
    base: './',
    assetsDir: 'bin',
    plugins: [
        svgPlugin(),
    ],
}
