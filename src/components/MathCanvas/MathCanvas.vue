<template>
    <div class="math-canvas">
        y = f(x) = 2a + 3x π
    </div>
</template>

<script>
    export default {
        name: 'MathCanvas',
        props: {
        }    
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    .math-canvas {
        font-family: $font-family-sans;
        font-size: 32px;
        padding: $grid-5;
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        height: 100%;

        &::selection {
            background-color: rgba($color-primary,0.6);
        }
    }
</style>