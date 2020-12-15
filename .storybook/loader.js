const loaderAlias = require('./loader-alias.js');
const loaderSVG = require('./loader-svg.js');
const loaderSCSS = require('./loader-scss.js');


module.exports = function (source) {

  const res = this.resourcePath;
  
  source = loaderAlias(source);
  source = loaderSVG(source, res);  
  source = loaderSCSS(source);  


  return source;
};
