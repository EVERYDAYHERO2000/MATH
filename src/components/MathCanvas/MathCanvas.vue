<template>
    <div class="math-canvas">
        <MathCanvasPivot>
            <div ref="canvas">
                <MathEnities v-bind:value="value" />
            </div>
        </MathCanvasPivot>
    </div>
</template>

<script>
    import MathCanvasPivot from './__pivot.vue';
    import MathEnities from '../MathEntities/MathEntities.vue';
    import domtoimage from '../../fn/domToImage/domToImage.js';

    import test from './test.js';

    export default {
        name: 'MathCanvas',
        components: {
            MathCanvasPivot,
            MathEnities
        },
        data: function () {
            return {
                keyboard: {
                    key: null,
                    charCode: null
                },
                value: test
            }
        },
        created: function(){
            document.addEventListener('keypress', this.keypress)
        },
        methods: {
            keypress: function (event) {
                if (event.target.classList.contains('entity')) {
                    this.keyboard.key = event.key;
                    this.keyboard.charCode = event.charCode;
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