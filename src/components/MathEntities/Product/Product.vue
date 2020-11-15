<template>
    <div class="entity-product">

        <template v-for="(item, index) in into.factors">
            <EntityProductFactor 
                v-bind:firstChild="(index == 0)"
                v-bind:into="item" />
        </template> 
         
    </div>
</template>

<script>
    import { defineAsyncComponent } from "vue";

    export default {
        name: 'EntityProduct',
        props: {
            into: Object
        },
        created: function(){

        },
        components: {
            EntityProductFactor: defineAsyncComponent(() => import('../ProductFactor/ProductFactor.vue'))
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-product {
        display: inline-flex;
        align-items: baseline;
        white-space: nowrap;
        color: $color-entity;

        & .entity-product-factor:first-child {
            
            .entity-addition {
                display: none;
            }

        }
    }

    

</style>