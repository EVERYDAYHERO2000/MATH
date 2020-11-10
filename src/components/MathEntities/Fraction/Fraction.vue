<template>
    <div ref="fraction" class="entity-fraction">
        <div class="entity-fraction__numerator">
            <MathEnities v-bind:value="num" />
        </div>
        <div class="entity-fraction__denominator">
            <MathEnities v-bind:value="den" />
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent } from "vue"

    export default {
        name: 'EntityFraction',
        props: {
            numerator: Object,
            denominator: Object
        },
        data: function(){
            return {
                num : this.numerator,
                den : this.denominator
            }
        },
        mounted: function(){
            let fraction = this.$refs.fraction;
            let fractionParent = this.$parent.$parent.$parent.$el;
            fractionParent.style.width = fraction.offsetWidth + 'px';
            
        },
        components: {
            MathEnities: defineAsyncComponent(() => import('../../MathEntities/MathEntities.vue'))
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-fraction {
        display: inline-flex;
        flex-direction: column;
        position: relative;
    }

    .entity-fraction__numerator {
        text-align: center;
        border-bottom: 3px solid $color-content;
        position: relative;

        .entity-fraction {
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }

    .entity-fraction__denominator {
        text-align: center;
        position: relative;

        .entity-fraction {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
</style>