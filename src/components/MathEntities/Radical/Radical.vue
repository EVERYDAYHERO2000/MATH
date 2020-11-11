<template>
    <div class="entity-radical">
        <div class="entity-radical__left">
            {{index}}
        </div>
        <div class="entity-radical__center">
            <Line preserveAspectRatio="none" viewBox="0 0 5 5" />
        </div>
        <div class="entity-radical__right">
            <Line preserveAspectRatio="none" viewBox="0 0 5 5" />
        </div>
        <div class="entity-radical__expression">
            <div class="entity-radical__hr" />
            <MathEnities v-bind:expression="expression" />
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    import { VueComponent as Line } from './assets/line.svg';

    export default {
        name: 'EntityRadical',
        props: {
            expression: Object,
            index: Number
        },
        components: {
            MathEnities: defineAsyncComponent(() => import('../../MathEntities/MathEntities.vue')),
            Line
        }
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-radical {
        display: flex;
        padding-top: $grid-1;
        padding-bottom: $grid-1;

    }

    .entity-radical__left,
    .entity-radical__center,
    .entity-radical__right {
        & > svg {
            vector-effect: non-scaling-stroke;

            path {
                vector-effect: non-scaling-stroke;
                stroke: $color-entity;
            }
        }
    }

    .entity-radical__left {
        font-size: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .entity-radical__center {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        svg {
            height: 40%;
            width: $grid-1;

            path {
                stroke-width: 3px;
            }

        }
    }

    .entity-radical__right {
        margin-top: -3px;

        svg {
            height: 100%;
            width: $grid-2;
            transform: scaleX(-1);

            path {
                stroke-width: 2px;
            }

        }
    }

    .entity-radical__expression {

        & > .math-entities {
            padding: 0 $grid-1;
        }

        .entity-radical__hr {
            height: 3px;
            width: 100%;
            margin-top: -3px;
            background-color: $color-entity;
        }
    }
</style>