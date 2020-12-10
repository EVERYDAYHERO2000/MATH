const path = require('path');
const alias = require('../alias.config.js')();


module.exports = function (source) {
  
  for (let a in alias){
    source = source.split(a).join(alias[a] + '/');
  }

  source = source.replace(
    '<style lang="scss">',
    '<style lang="scss"> @import "./src/css/main.scss";',
  );

  return source;
};
