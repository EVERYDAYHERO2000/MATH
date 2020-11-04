<template>
    <div class="math-canvas">
        <MathCanvasPivot>

                y = f(x) = 2a + 3x π

                <component :is="entity" v-bind:val="value"
                v-on:isempty="entity='empty'"
                v-on:isnumber="onIsNumber">
                </component>

        </MathCanvasPivot>
    </div>
</template>

<script>
    import MathCanvasPivot from './__pivot.vue';
    import Empty from '../MathEntities/Empty/Empty.vue';
    import Number from '../MathEntities/Number/Number.vue';

    export default {
        name: 'MathCanvas',
        components: {
            MathCanvasPivot,
            Empty,
            Number
        },
        created: function () {
          console.log('Refs parent', this.$refs);
          // this.focus();
        },
        data: function() {
            return {
                entity: 'empty',
                value: null
            }
        },
        methods: {
          onIsNumber: function (evt) {
            this.entity = 'number';
            this.value = evt;
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
            background-color: rgba($color-primary,0.6);
        }
    }
</style>
