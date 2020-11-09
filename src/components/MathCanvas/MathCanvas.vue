<template>
    <div class="math-canvas">
        <MathCanvasPivot v-on:click="renderToPng">
            <div ref="canvas">
                y = f(x) = 2a + 3x π

                <component :is="entity" v-bind:val="value" v-on:isempty="entity='entityEmpty'"
                    v-on:isnumber="onIsNumber">
                </component>
            </div>
        </MathCanvasPivot>
    </div>
</template>

<script>
    import MathCanvasPivot from './__pivot.vue';
    import Enities from './entities.js';
    import domtoimage from '../../fn/domToImage/domToImage.js';


    export default {
        name: 'MathCanvas',
        components: {
            MathCanvasPivot,
            ...Enities
        },
        created: function () {
            console.log('Refs parent', this.$refs);
            // this.focus();
        },
        data: function () {
            return {
                entity: 'entityEmpty',
                value: null
            }
        },
        methods: {
            onIsNumber: function (evt) {
                this.entity = 'entityNumber';
                this.value = evt;
            },
            renderToPng: function () {

                domtoimage.toPng(this.$refs.canvas)
                    .then(function (dataUrl) {
                        var link = document.createElement('a');
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