<template>
    <div class="entity-inline entity-cos">
        <EntityString value="cos" />
        <MathEntities v-bind:into="into" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityCos',
        props: {
            into: Object
        },
        components: {
            MathEnities: defineAsyncComponent(() => import('../../MathEntities/MathEntities.vue')),
            EntityString: defineAsyncComponent(() => import('../String/String.vue')),
        }     
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-cos {
        display: inline-flex;
        align-items: center;
    }

</style>