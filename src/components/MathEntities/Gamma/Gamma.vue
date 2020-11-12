<template>
    <div class="entity-inline entity-gamma">
        <EntityString value="γ" />
    </div>
</template>

<script>
    export default {
        name: 'EntityGamma',
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

    .entity-gamma {
        
    }
</style>