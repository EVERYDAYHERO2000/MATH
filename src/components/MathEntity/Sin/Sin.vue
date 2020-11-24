<template>
    <div class="entity-inline entity-sin">
        <EntityString value="sin" />
        <MathEntity v-bind:into="into.expression" />
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
            MathEntity: defineAsyncComponent(() => import('../MathEntity.vue')),
            EntityString: defineAsyncComponent(() => import('../String/String.vue')),
        }
    }
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntity.scss';

    .entity-sin {
        display: inline-flex;
        align-items: center;
    }

</style>
