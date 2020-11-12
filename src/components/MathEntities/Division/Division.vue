<template>
    <div class="entity-inline entity-division">
        <EntityString value=":" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityDivision',
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

    .entity-division {
        display: inline-block;
        padding: 0 .3em;
        box-sizing: border-box;
    }    

</style>