<template>
    <div class="entity-inline entity-subtraction">−</div>
</template>

<script>
    export default {
        name: 'EntitySubtraction',
        props: {
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-subtraction {
        display: inline-block;
        padding: 0 .3em;
        box-sizing: border-box;
    }

</style>