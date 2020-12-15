const sass = require('node-sass');

module.exports = function (source) {

  source = source.replace(/<style [\w"=]+>([^*]+)<\/style>/gi, function(a,b){

    let result = sass.renderSync({
      data: '@import "./src/css/main.scss";\n' + b
    }).css.toString(); 

    return `<style> ${result} </style>`;

  });

  return source;
};
