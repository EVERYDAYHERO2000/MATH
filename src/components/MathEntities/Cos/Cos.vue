<template>
    <div class="entity-inline entity-cos">
        cos<EntityParentheses v-bind:expression="expression" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityCos',
        props: {
            expression: Object
        },
        components: {
            EntityParentheses: defineAsyncComponent(() => import('../Parentheses/Parentheses.vue'))
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