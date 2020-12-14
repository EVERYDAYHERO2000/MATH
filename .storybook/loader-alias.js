const path = require('path');
const alias = require('../alias.config.js')();


module.exports = function (source) {
  
  for (let a in alias){
    source = source.split(a).join(alias[a] + '/');
  }

  return source;
};
