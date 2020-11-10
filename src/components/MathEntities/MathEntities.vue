<template>
    <div class="math-entities">
        <template v-for="(item, index) in items">

            <template v-if="entityType(item.type, ['fraction'])" >
                <component 
                    :key="index"
                    :is="entityName(item.type)" 
                    v-bind:numerator="item.numerator" 
                    v-bind:denominator="item.denominator" />
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
            value: Object
        },
        components: {
            ...Enities
        },
        mounted: function(){
            
        },
        data: function () {
            return {
                items: this.value
            }
        },
        methods: {
            entityName : function(type) {
                return `Entity${type.charAt(0).toUpperCase() + type.slice(1)}`
            },
            entityType : function(type, test) {
                let isType = false;

                for (let t in test) {
                    isType = (type == test[t]);  
                }

                return isType;
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