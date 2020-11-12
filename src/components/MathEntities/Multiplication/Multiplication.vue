<template>
    <div class="entity-inline entity-multiplication">·</div>
</template>

<script>
    export default {
        name: 'EntityMultiplication',
        props: {
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-multiplication {
        display: inline-block;
        padding: 0 .3em;
        box-sizing: border-box;
    }

</style>