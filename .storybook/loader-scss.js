const sass = require('node-sass');

module.exports = function (source) {

  source = source.replace(/<style [\w"=]+>([^*]+)<\/style>/gi, function(a,b){
    return `
    <style lang="scss"> 
    @import "./src/css/main.scss";
    ${b}
    </style>
    `  
  });

  return source;
};
