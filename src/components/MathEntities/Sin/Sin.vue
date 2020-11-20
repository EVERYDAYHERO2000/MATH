<template>
    <div class="entity-inline entity-sin">
        <EntityString value="sin" />
        <MathEntities v-bind:into="into.expression" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntitySin',
        props: {
            into: Object
        },
        created: function(){
            
        },
        components: {
            MathEntities: defineAsyncComponent(() => import('../MathEntities.vue')),
            EntityString: defineAsyncComponent(() => import('../String/String.vue')),
        }     
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-sin {
        display: inline-flex;
        align-items: center;
    }

</style>