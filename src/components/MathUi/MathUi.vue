<template>
    <div class="math-ui"></div>
</template>

<script>
    export default {
        name: 'MathUi',
        props: {
        }
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';

    .math-ui {
        font-family: $font-family-sans-serif;
        position: absolute;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
</style>