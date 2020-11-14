<template>
    <div class="entity-product-factor">
        <component v-if="!firstChild" :is="signEntity" />
        <MathEnities v-bind:into="into.expression" />
    </div>
</template>

<script>
    import { defineAsyncComponent } from "vue";

    export default {
        name: 'EntityProductFactor',
        props: {
            into: Object,
            firstChild: Boolean
        },
        computed: {
            signEntity: function(){
                let entityName = null;

                switch (this.into.action) {
                    case 'divide':
                        entityName = 'entityDivision';
                        break;
                    case 'multiply':
                        entityName = 'entityMultiplication';
                        break;    
                }
                
                return entityName;
            }
        },
        created: function(){
            
        },
        components: {
            MathEnities: defineAsyncComponent(() => import('../MathEntities.vue')),
            EntityMultiplication: defineAsyncComponent(() => import('../Multiplication/Multiplication.vue')),
            EntityDivision: defineAsyncComponent(() => import('../Division/Division.vue')),
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-product-factor {

    }    

</style>