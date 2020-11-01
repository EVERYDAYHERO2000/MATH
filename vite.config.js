const svgPlugin = require('vite-plugin-svg');

module.exports = {
    root: process.cwd(),
    base: './',
    outDir: 'dist',
    assetsDir: '../bin',
    plugins: [
        svgPlugin(),
    ],
}
