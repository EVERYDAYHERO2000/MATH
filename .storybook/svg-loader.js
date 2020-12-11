const path = require('path');
//const svgPlugin = require('vite-plugin-svg');
const { compileTemplate } = require('@vue/compiler-sfc');

function compileSvg(source, path, isBuild) {

    let { code } = compileTemplate({
      source,
      transformAssetUrls: false,
    });
  
    code = code.replace('export function render', 'function render');
    code += '\nconst VueComponent = { render };';
  
    if (!isBuild) {
      code += `\nVueComponent.__hmrId = ${JSON.stringify(path)};`;
    }
  
    code += `\nexport { VueComponent };`;

    return code;
  } 

module.exports = function (source) {
  
  source = compileSvg(source, '', false); 

  return source;
};
