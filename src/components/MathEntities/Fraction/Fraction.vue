<template>
    <div class="entity-fraction">
        <div class="entity-fraction__top">
            <span class="entity-fraction__base">&zwj;</span>
            <div ref="numerator" class="entity-fraction__numerator">
                <MathEntities v-bind:into="into.numerator" />
            </div>
        </div>

        <div class="entity-fraction__hr" contenteditable>
            <EntityString class="entity-invisible" value="/" />
        </div>

        <div ref="denominator" class="entity-fraction__denominator">
            <MathEntities v-bind:into="into.denominator" />
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: "EntityFraction",
        props: {
            into: Object
        },
        data: function(){
            return {
                value : null,
                numeratorValue : [],
                denominatorValue: []
            }
        },
        mounted: function () {
            this.calc(true)
        },
        components: {
            MathEntities: defineAsyncComponent(() =>
                import("../../MathEntities/MathEntities.vue")
            ),
            EntityString: defineAsyncComponent(() => import("../String/String.vue")),
        },
        methods: {
            calc: function (emit) {
                let result = null;
                if (this.numeratorValue.value && this.denominatorValue.value) {
                    result = this.value = this.numeratorValue.value / this.denominatorValue.value;
                    if (emit) this.$emit('calc', result);
                }
                return result;
            }
        }
    };
</script>

<style lang="scss">
    @import "../../../css/main.scss";
    @import "../MathEntities.scss";

    .entity-fraction {
        display: inline-flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        box-sizing: border-box;
    }

    .entity-fraction__top {
        display: flex;
        align-items: flex-end;
    }

    .entity-fraction__base {
        margin-bottom: -22px;
        user-select: none;
    }

    .entity-fraction__numerator {
        text-align: center;
        position: relative;
        box-sizing: border-box;
        padding: 0 $grid-1;
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
        text-align: right;

        .entity-invisible {
            margin: -8px;
            font-size: 16px;
        }
    }
</style>
