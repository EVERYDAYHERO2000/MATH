<template>
  <div class="math-canvas">
    <MathCanvasPivot>
      <div style="padding: 120px 60px;" v-on:keydown.capture="keydown" ref="canvas">
        <MathEntity v-bind:into="expression" />
      </div>
    </MathCanvasPivot>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import MathCanvasPivot from './Pivot/Pivot.vue';
import domtoimage from '/@fn/domToImage/domToImage.js';

import test from './test2.js';

export default {
  name: 'MathCanvas',
  components: {
    MathCanvasPivot,
    MathEntity: defineAsyncComponent(() => import('/@components/MathEntity/MathEntity.vue')),
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
    renderToPng: function () {
      domtoimage.toPng(this.$refs.canvas).then(function (dataUrl) {
        let link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../css/main.scss';

.math-canvas {
  font-family: $font-family-sans;
  font-size: 32px;
  padding: 100px;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::selection {
    .app_theme_light & {
      background-color: rgba($color-primary_theme-light, 0.6);
    }

    .app_theme_dark & {
      background-color: rgba($color-primary_theme-dark, 0.6);
    }
  }
}
</style>
