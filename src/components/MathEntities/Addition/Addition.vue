<template>
    <div class="entity-addition">+</div>
</template>

<script>
    export default {
        name: 'EntityAddition',
        props: {
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-addition {
        display: inline-block;
        padding: 0 $grid-1;
        box-sizing: border-box;
    }
</style>