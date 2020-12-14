module.exports = function (source) {

  source = source.replace(
    '<style lang="scss">',
    `<style lang="scss"> 
      @import "./src/css/main.scss";
    `,
  );

  return source;
};
