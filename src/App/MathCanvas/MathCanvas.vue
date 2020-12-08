<template>
  <div class="math-canvas">
    <MathCanvasPivot>
      <div v-on:keydown.capture="keydown" ref="canvas">
        <MathEntity v-bind:into="expression" />
      </div>
    </MathCanvasPivot>
  </div>
</template>

<script>
import MathCanvasPivot from './Pivot/Pivot.vue';
import domtoimage from '/@fn/domToImage/domToImage.js';
import MathEntity from '/@components/MathEntity/MathEntity.vue';

import test from './test.js';

export default {
  name: 'MathCanvas',
  components: {
    MathCanvasPivot,
    MathEntity: window.MathEntity
  },
  data: function () {
    return {
      keyboard: {
        keys: [],
      },
      expression: test,
    };
  },
  methods: {
    keydown: function (evt) {
      if (evt.repeat) {
        evt.preventDefault();
        return;
      }
      // console.log('down', evt.key);
      if (evt.key.startsWith('Arrow')) {
        this.$refs.canvas.contentEditable = true;
        this.$refs.canvas.focus();
      } else {
        this.keyboard.keys.push(evt.key);
        const el = window.getSelection().anchorNode.parentNode;

        if (el.contentEditable) {
          this.$refs.canvas.contentEditable = false;
          el.focus();
        }
      }
    },
    renderToImage: function (format) {
      format = format || 'png';
      const _this = this;
      _this.$refs.canvas.classList.add('theme_export');

      if ( format == 'png') {
        domtoimage.toPng(this.$refs.canvas).then(save);
      } else if (format == 'jpg') {
        domtoimage.toJpeg(this.$refs.canvas, { quality: 0.95, bgcolor: '#ffffff' }).then(save);
      } else if (format == 'svg') {
        domtoimage.toSvg(this.$refs.canvas).then(save);
      }

      function save(dataUrl){
          _this.$refs.canvas.classList.remove('theme_export');
          let link = document.createElement('a');
          link.download = `math.${format}`;
          link.href = dataUrl;
          link.click();
      }
    },
  },
};
</script>

<style lang="scss">
.math-canvas {
  font-family: $font-family-sans;
  font-size: 32px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  touch-action: auto; 

  &::selection {
    .app_theme_light & {
      background-color: rgba($color-primary_theme_light, 0.6);
    }

    .app_theme_dark & {
      background-color: rgba($color-primary_theme_dark, 0.6);
    }
  }

  @include media("<=phone") {
    touch-action: manipulation;
    overflow: auto;
  } 

}
</style>
