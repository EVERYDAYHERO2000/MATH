<template>
    <div class="math-canvas">
        <MathCanvasPivot>
            <div style="padding: 120px 60px;" v-on:keydown.capture="keydown" ref="canvas">
                <MathEnities v-bind:into="expression" />
            </div>
        </MathCanvasPivot>
    </div>
</template>

<script>
    import { defineAsyncComponent } from "vue";
    import MathCanvasPivot from './__pivot.vue';
    import domtoimage from '../../fn/domToImage/domToImage.js';

    import test from './test.js';
    /*
    import mathParser from '../../fn/mathParser/mathParser.js'

    const testParser = mathParser('e^x+\\frac{2}{3}x-4sin\\left(x+2\\right)', {latex:true});
    console.log('e^x+\\frac{2}{3}x-4sin\\left(x+2\\right)', testParser)
    */

    export default {
        name: 'MathCanvas',
        components: {
            MathCanvasPivot,
            MathEnities: defineAsyncComponent(() => import('../MathEntities/MathEntities.vue'))
        },
        data: function () {
            return {
                keyboard: {
                    keys: [],
                    charCode: null,
                    boo: ''
                },
                expression: test
            }
        },
        methods: {
            keydown: function (evt) {
              this.keyboard.keys.push(evt.key);
              this.keyboard.charCode = evt.charCode;
              console.log('parent', evt.key);

              if (evt.key.startsWith('Arrow')) {
                this.$refs.canvas.contentEditable = true;
              } else {
                const el = window.getSelection().anchorNode.parentNode;

                if (el.contentEditable) {
                  this.$refs.canvas.contentEditable = false;
                  el.focus();
                }
              }
            },
            renderToPng: function () {
                domtoimage
                    .toPng(this.$refs.canvas)
                    .then(function (dataUrl) {
                        let link = document.createElement('a');
                        link.download = 'my-image-name.png';
                        link.href = dataUrl;
                        link.click();
                    });
            }
        }
    }

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

        &::selection {
            background-color: rgba($color-primary, 0.6);
        }
    }
</style>
