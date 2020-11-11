<template>
    <div class="entity-fraction">
        
            <div ref="numerator" class="entity-fraction__numerator">
                <MathEnities v-bind:expression="num" />
            </div>

            <div class="entity-fraction__hr" />

            <div ref="denominator" class="entity-fraction__denominator">
                <MathEnities v-bind:expression="den" />
            </div>

    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityFraction',
        props: {
            numerator: Object,
            denominator: Object
        },
        data: function(){
            return {
                num : this.numerator,
                den : this.denominator,
            }
        },
        mounted: function(){

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
        align-items: center;
        box-sizing: border-box;
    }

    .entity-fraction__numerator {
        text-align: center;
        position: relative;
        box-sizing: border-box;
        padding: 0 $grid-1;
        max-height: 35px;
        display: flex;
        align-items: flex-end;

        .math-entities {
            max-height: auto;
        }

        .entity-fraction {
            padding: 5px 0;
        }
        
    }

    .entity-fraction__denominator {
        text-align: center;
        position: relative;
        box-sizing: border-box;
        padding: 0 $grid-1;
        max-height: 35px;
        display: flex;
        align-items: flex-start;
        
        .math-entities {
            max-height: auto;
        }

        .entity-fraction {
            padding: 5px 0;
        }
        
    }

    .entity-fraction__hr {
        height: 3px;
        background-color: $color-entity;
        width: 100%;
    }

    
</style>