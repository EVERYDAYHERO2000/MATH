const path = require('path');
const { compileTemplate } = require('@vue/compiler-sfc');
const { readFileSync } = require('fs');

function compileSvg(source, path, isBuild, name) {

    let { code } = compileTemplate({
      source,
      transformAssetUrls: false,
    });
  
    code = code.replace('export function render', `function render_${name}`);
    code = code.replace(/_hoisted_/gi, `_hoisted_${name}_`);
    
    code += `\nconst ${name} = { render : render_${name} };`;
  
    if (!isBuild) {
      code += `\n${name}.__hmrId = ${JSON.stringify(path)};`;
    }

    return code;
  } 

module.exports = function (source, res) { 
  
  source = source.replace(/(import {?([^{}'"]*)}? from ['"]([^'"]*.svg)['"];?)/gi, function(a,b,c,d){

        let name = (c.includes('as')) ? c.split('as')[1].trim() : c.trim();

        let path = (d.includes('./')) ? res.replace(/\/+[\w]+\.vue/, d.replace('.','')) : d;

        const code = readFileSync(path, 'utf8');

        return compileSvg(code, path, false, name);

  });  

  return source;
};
