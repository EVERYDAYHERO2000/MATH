<template>
    <div class="entity-inline entity-addition">
        <EntityString value="+"/>
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";
    
    export default {
        name: 'EntityAddition',
        props: {
        },
        components: {
            EntityString: defineAsyncComponent(() => import('../String/String.vue')),
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-addition {
        display: inline-block;
        padding: 0 .3em;
        box-sizing: border-box;
    }
</style>