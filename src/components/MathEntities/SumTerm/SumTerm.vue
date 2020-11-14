<template>
    <div class="entity-sum-term">
        <component v-if="!firstChild" :is="signEntity" />
        <MathEntities v-bind:into="into.expression" />
    </div>
</template>

<script>
    import { defineAsyncComponent } from "vue";

    export default {
        name: 'EntitySumTerm',
        props: {
            into: Object,
            firstChild: Boolean
        },
        computed: {
            signEntity: function(){
                let entityName = null;

                switch (this.into.action) {
                    case 'minus':
                        entityName = 'entitySubtraction';
                        break;
                    case 'plus':
                        entityName = 'entityAddition';
                        break;    
                }
                
                return entityName;
            }
        },
        created: function(){
    
        },
        components: {
            MathEntities: defineAsyncComponent(() => import('../MathEntities.vue')),
            EntityAddition: defineAsyncComponent(() => import('../Addition/Addition.vue')),
            EntitySubtraction: defineAsyncComponent(() => import('../Subtraction/Subtraction.vue')),
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-sum-term {

    }    

</style>