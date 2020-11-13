<template>
    <div 
        class="entity-abs" 
        v-bind:class="{'entity-abs_inline' : !isFractionInside}">

        <template v-if="isFractionInside">
            <span class="entity-abs__base">&zwj;</span>
            <div class="entity-abs__left">
                <EntityString 
                        class="entity-invisible" 
                        value="|" />
            </div>

            <MathEnities 
                class="entity-abs__center" 
                v-bind:into="into.expression" />

            <div class="entity-abs__right">
                <EntityString 
                        class="entity-invisible" 
                        value="|" />
            </div>
        </template>

        <template v-else>
            <EntityString value="|" />
            <MathEnities 
                class="entity-abs__center" 
                v-bind:into="into.expression" />
            <EntityString value="|" />
        </template>

    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'Entityabs',
        props: {
            into: Object
        },
        computed: {
            isFractionInside: function () {

                function testExpression(expression) {
                    let level = 0;

                    for (let e of expression) {
                        if (e.type == 'fraction') {
                            level += testExpression(e.numerator);
                            level += testExpression(e.denominator);
                            level++;
                            break;
                        }
                    }
                    return level;
                }

                return (testExpression(this.into.expression) > 1);
            }
        },
        components: {
            MathEnities: defineAsyncComponent(() => import('../../MathEntities/MathEntities.vue')),
            EntityString: defineAsyncComponent(() => import('../String/String.vue'))
        }
    }
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-abs {
        display: inline-flex;
        align-items: baseline;
    }

    .entity-abs__base {
        user-select: none;
    }

    .entity-abs_inline {
        align-items: center;
    }

    .entity-abs__left,
    .entity-abs__right {
        display: flex;
        flex-direction: column;
        align-self: stretch;
        width: 2px;
        background-color: $color-entity;
    }

    .entity-abs__left-center,
    .entity-abs__right-center {
        flex-grow: 1;
        position: relative;
        display: flex;
        align-items: center;
    }

    .entity-abs__left-top,
    .entity-abs__left-bottom,
    .entity-abs__right-top,
    .entity-abs__right-bottom {
        height: $grid-3;
        position: relative;
    }

    .entity-abs__center {
        margin: 0 $grid-1;
    }

    .entity-abs_inline {
        .entity-abs__center {
            margin: 0;
        }
    }
</style>