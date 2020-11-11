<template>
    <div class="entity-inline entity-sin">
        sin<EntityParentheses v-bind:expression="expression" />
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
            EntityParentheses: defineAsyncComponent(() => import('../Parentheses/Parentheses.vue'))
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