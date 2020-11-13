<template>
    <div class="math-entities">
        <template v-for="(item, index) in items">

            <template v-if="isFraction(item.type)" >
                <component
                    :key="item.id"
                    v-bind:data-id="item.id"
                    :is="entityName(item.type)"
                    v-bind:value="item.value || null"
                    v-bind:numerator="item.numerator"
                    v-bind:denominator="item.denominator" />
            </template>

            <template v-else-if="isFn(item.type)" >
                <component
                    :key="item.id"
                    v-bind:data-id="item.id"
                    :is="entityName(item.type)"
                    v-bind:expression="item.expression" />
            </template>

            <template v-else-if="isParentheses(item.type)" >
                <component
                    :key="item.id"
                    v-bind:data-id="item.id"
                    :is="entityName(item.type)"
                    v-bind:expression="item.expression" />
            </template>

            <template v-else-if="isRadical(item.type)" >
                <component
                    :key="item.id"
                    v-bind:data-id="item.id"
                    :is="entityName(item.type)"
                    v-bind:index="item.index"
                    v-bind:expression="item.expression" />
            </template>

            <template v-else-if="isExponent(item.type)" >
                <component
                    :key="item.id"
                    v-bind:data-id="item.id"
                    :is="entityName(item.type)"
                    v-bind:base="item.base"
                    v-bind:exponent="item.exponent" />
            </template>

            <template v-else >
                <component
                    :key="item.id"
                    v-bind:data-id="item.id"
                    :is="entityName(item.type)"
                    v-bind:value="item.value" />
            </template>

        </template>
    </div>
</template>

<script>
    import Enities from './entities.js';

    export default {
        name: 'MathEntities',
        props: {
            expression: Object
        },
        components: {
            ...Enities
        },
        mounted: function(){

        },
        data: function () {
            return {
                items: this.expression || []
            }
        },
        methods: {
            entityName : function(type) {
                return `Entity${type.charAt(0).toUpperCase() + type.slice(1)}`
            },
            entityType : function(type, test) {
                let isType = false;

                for (let t in test) {
                    if (type == test[t]){
                        isType = true;
                        break;
                    }
                }
                return isType;
            },
            isFraction : function(type) {
                return this.entityType(type, ['fraction', 'fractionMixed']);
            },
            isFn : function(type) {
                return this.entityType(type, ['cos', 'sin']);
            },
            isParentheses : function(type) {
                return this.entityType(type, ['parentheses', 'abs']);
            },
            isRadical : function(type) {
                return this.entityType(type, ['radical']);
            },
            isExponent : function(type) {
                return this.entityType(type, ['exponent']);
            }
        }
    }
</script>

<style lang="scss">
    @import '../../css/main.scss';
    @import './MathEntities.scss';

    .math-entities {
        display: inline-flex;
        align-items: baseline;
        white-space: nowrap;
        color: $color-entity;
    }

</style>
