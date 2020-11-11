<template>
    <div class="entity-fraction-mixed">
        <EntityNumber v-bind:value="value" />
        <EntityFraction v-bind:numerator="numerator" v-bind:denominator="denominator" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityFractionMixed',
        props: {
            value: Number,
            numerator: Object,
            denominator: Object,
        },
        components: {
            EntityNumber: defineAsyncComponent(() => import('../Number/Number.vue')),
            EntityFraction: defineAsyncComponent(() => import('../Fraction/Fraction.vue'))
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-fraction-mixed {
        display: inline-flex;
        align-items: center;
    }

</style>