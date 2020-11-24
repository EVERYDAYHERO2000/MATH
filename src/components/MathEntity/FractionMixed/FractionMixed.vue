<template>
    <div class="entity-fraction-mixed">
        <EntityNumber
            v-on:calc="integerValue = $event"
            v-bind:into="into.integer" />
        <EntityFraction
            v-on:calc="this.fractionValue = $event"
            v-bind:into="into" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityFractionMixed',
        props: {
            into: Object
        },
        data: function(){
            return {
                integerValue: [],
                fractionValue : []
            }
        },
        components: {
            EntityNumber: defineAsyncComponent(() => import('../Number/Number.vue')),
            EntityFraction: defineAsyncComponent(() => import('../Fraction/Fraction.vue'))
        },
        methods: {
            calc: function(emit) {
                let result = (this.fractionValue) ? this.integerValue + this.fractionValue : this.integerValue;
                if (emit) this.$emit('calc', result);
                return result;
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntity.scss';

    .entity-fraction-mixed {
        display: inline-flex;
        align-items: center;
    }

</style>
