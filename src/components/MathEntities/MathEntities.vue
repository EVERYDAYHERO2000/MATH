<template>
    <div class="math-entities">
        <template v-for="(item, index) in items">

            <template v-if="isFraction(item.type)" >
                <component 
                    :key="index"
                    :is="entityName(item.type)" 
                    v-bind:numerator="item.numerator" 
                    v-bind:denominator="item.denominator" />
            </template>

            <template v-else-if="isFn(item.type)" >
                <component 
                    :key="index"
                    :is="entityName(item.type)" 
                    v-bind:expression="item.expression" />
            </template>
            
            <template v-else >
                <component 
                    :key="index"
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
                items: this.expression
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
            }
        }
    }    
</script>

<style lang="scss">
    @import '../../css/main.scss';
    @import './MathEntities.scss';

    .math-entities {
        display: inline-flex;
        align-items: center;
    }

</style>