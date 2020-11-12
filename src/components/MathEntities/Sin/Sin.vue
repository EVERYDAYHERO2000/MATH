<template>
    <div class="entity-inline entity-sin">
        <EntityString value="sin" />
        <EntityParentheses v-bind:expression="expression" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntitySin',
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

    .entity-sin {
        display: inline-flex;
        align-items: center;
    }

</style>