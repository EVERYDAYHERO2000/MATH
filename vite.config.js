const svgPlugin = require('vite-plugin-svg');
const alias = require('./alias.config.js');

module.exports = {
  root: process.cwd(),
  base: '/',
  outDir: './dist',
  assetsDir: 'bin',
  alias: alias(),
  plugins: [
    svgPlugin(),
  ],
  cssPreprocessOptions: {
    scss: {
      additionalData: function(css,file){
        let importMain = `@import "./src/css/main.scss";`;
        let resultCSS = '';

        if (!file.includes('/main.css')) resultCSS += importMain;

        resultCSS += css;

        return resultCSS;
      },
    }
  },  
}
