<template>
    <div class="entity-parentheses" v-bind:class="{'entity-parentheses_inline' : !isFractionInside}">

        <template v-if="isFractionInside">
            <div class="entity-parentheses__left">
                <ParenthesesLeftTop preserveAspectRatio="none" viewBox="0 0 8 16" class="entity-parentheses__left-top" />
                <ParenthesesLeftCenter preserveAspectRatio="none" viewBox="0 0 8 3" class="entity-parentheses__left-center" />
                <ParenthesesLeftBottom preserveAspectRatio="none" viewBox="0 0 8 16" class="entity-parentheses__left-bottom" />
            </div>

            
                <MathEnities class="entity-parentheses__center" v-bind:expression="expression" />
        

            <div class="entity-parentheses__right">
                <ParenthesesRightTop preserveAspectRatio="none" viewBox="0 0 8 16" class="entity-parentheses__right-top" />
                <ParenthesesRightCenter preserveAspectRatio="none" viewBox="0 0 8 3" class="entity-parentheses__right-center" />
                <ParenthesesRightBottom preserveAspectRatio="none" viewBox="0 0 8 16" class="entity-parentheses__right-bottom" />
            </div>
        </template>

        <template v-else>
            (<MathEnities class="entity-parentheses__center" v-bind:expression="expression" />)
        </template>

    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    import { VueComponent as ParenthesesLeftTop } from './assets/parentheses_left_top.svg';
    import { VueComponent as ParenthesesLeftCenter } from './assets/parentheses_left_center.svg';
    import { VueComponent as ParenthesesLeftBottom } from './assets/parentheses_left_bottom.svg';
    import { VueComponent as ParenthesesRightTop } from './assets/parentheses_right_top.svg';
    import { VueComponent as ParenthesesRightCenter } from './assets/parentheses_right_center.svg';
    import { VueComponent as ParenthesesRightBottom } from './assets/parentheses_right_bottom.svg';

    export default {
        name: 'EntityParentheses',
        props: {
            expression: Object
        },
        computed: {
            isFractionInside: function(){

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

                return (testExpression(this.expression) > 1);
            }
        },
        components: {
            MathEnities: defineAsyncComponent(() => import('../../MathEntities/MathEntities.vue')),
            ParenthesesLeftTop,
            ParenthesesLeftCenter,
            ParenthesesLeftBottom,
            ParenthesesRightTop,
            ParenthesesRightCenter,
            ParenthesesRightBottom
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-parentheses {
        display: inline-flex;
    }

    .entity-parentheses_inline {
        align-items: center;
    }

    .entity-parentheses__left,
    .entity-parentheses__right {
        display: flex;
        flex-direction: column;
    }

    .entity-parentheses__left-center,
    .entity-parentheses__right-center {
        flex-grow: 1;
    }

    .entity-parentheses__left-top,
    .entity-parentheses__left-bottom,
    .entity-parentheses__right-top,
    .entity-parentheses__right-bottom {
        height: $grid-3;
    }

    .entity-parentheses__center {
        margin: $grid-2 $grid-1;
    }

</style>