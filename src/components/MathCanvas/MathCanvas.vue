<template>
    <div class="math-canvas">
        y = f(x) = 2a + 3x π

        <component :is="entity" v-bind:val="value"
          v-on:isempty="entity='empty'"
          v-on:isnumber="onIsNumber">
        </component>
    </div>
</template>

<script>
    import Empty from '../MathEntities/Empty/Empty.vue';
    import Number from '../MathEntities/Number/Number.vue';

    export default {
        name: 'MathCanvas',
        components: {
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
        font-size: 72px;
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>
