<template>
    <div class="entity-inline entity-csc">
        <EntityString value="csc" />
        <EntityParentheses v-bind:into="into" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityCsc',
        props: {
            into: Object
        },
        components: {
            EntityParentheses: defineAsyncComponent(() => import('../Parentheses/Parentheses.vue')),
            EntityString: defineAsyncComponent(() => import('../String/String.vue')),
        }
    }
</script>

<style lang="scss">
    @import '../MathEntity.scss';

    .entity-csc {
        display: inline-flex;
        align-items: center;
    }

</style>
