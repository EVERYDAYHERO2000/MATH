<template>
    <EntityString class="entity-inline entity-phi" value="φ" />
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityPhi',
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

    .entity-phi {
        
    }
</style>