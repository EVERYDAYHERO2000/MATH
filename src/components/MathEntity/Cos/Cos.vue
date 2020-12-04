<template>
    <div class="entity-inline entity-cos">
        <EntityString value="cos" />
        <MathEntity v-bind:into="into.expression" />
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
            MathEntity: defineAsyncComponent(() => import('../../MathEntity/MathEntity.vue')),
            EntityString: defineAsyncComponent(() => import('../String/String.vue')),
        }
    }
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntity.scss';

    .entity-cos {
        display: inline-flex;
        align-items: center;
    }

</style>
