<template>
    <div class="entity-fraction">
        <div class="entity-fraction__top">
            <span class="entity-fraction__base">&zwj;</span>
            <div ref="numerator" class="entity-fraction__numerator">
                <MathEntity v-bind:into="into.numerator" />
            </div>
        </div>

        <div class="entity-fraction__hr" contenteditable>
            <EntityString class="entity-invisible" value="/" />
        </div>

        <div ref="denominator" class="entity-fraction__denominator">
            <MathEntity v-bind:into="into.denominator" />
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
            
        },
        components: {
            MathEntity: defineAsyncComponent(() =>
                import("../../MathEntity/MathEntity.vue")
            ),
            EntityString: defineAsyncComponent(() => import("../String/String.vue")),
        },
        methods: {
            
        }
    };
</script>

<style lang="scss">
    @import "../MathEntity.scss";

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
        width: 100%;
        text-align: right;

        .entity-invisible {
            margin: -8px;
            font-size: 16px;
        }

        .app_theme_light &, & {
            background-color: $color-entity_theme_light;
        }

        .app_theme_dark & {
            background-color: $color-entity_theme_dark;
        }

        .theme_export & {
            background-color: $color-entity_theme_light!important;
        }    
    }
</style>
