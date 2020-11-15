<template>
    <div class="entity-sum">
        <template v-for="(item, index) in into.terms">
            <EntitySumTerm 
                
                v-bind:firstChild="(index == 0)"
                v-bind:into="item" />
        </template> 
    </div>
</template>

<script>
    import { defineAsyncComponent } from "vue";

    export default {
        name: 'EntitySum',
        props: {
            into: Object
        },
        created: function(){

        },
        components: {
            EntitySumTerm: defineAsyncComponent(() => import('../SumTerm/SumTerm.vue'))
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-sum {
        display: inline-flex;
        align-items: baseline;
        white-space: nowrap;
        color: $color-entity;

    
    }

    

</style>


