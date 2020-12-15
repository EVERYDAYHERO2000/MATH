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

function replaceImport(source) {
  const i = 'import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"';
  return i + '\n' + source.split(i).join('\n');
}  

module.exports = function (source, res) { 

  let isFileChange = false;
  
  source = source.replace(/(import {?([^{}'"]*)}? from ['"]([^'"]*.svg)['"];?)/gi, function(a,b,c,d){

        const name = (c.includes('as')) ? c.split('as')[1].trim() : c.trim();
        const path = (d.includes('./')) ? res.replace(/\/+[\w]+\.(vue|js)/, d.replace('.','')) : d;
        const code = readFileSync(path, 'utf8');

        isFileChange = true;

        return compileSvg(code, path, false, name);

  });  

  source = (isFileChange) ? replaceImport(source) : source;

  return source;
};
