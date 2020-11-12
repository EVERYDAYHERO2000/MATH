<template>
    <div class="entity-inline entity-cot">
        <EntityString value="cot" />
        <EntityParentheses v-bind:expression="expression" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityCot',
        props: {
            expression: Object
        },
        components: {
            EntityParentheses: defineAsyncComponent(() => import('../Parentheses/Parentheses.vue')),
            EntityString: defineAsyncComponent(() => import('../String/String.vue')),
        }     
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-cot {
        display: inline-flex;
        align-items: center;
    }

</style>