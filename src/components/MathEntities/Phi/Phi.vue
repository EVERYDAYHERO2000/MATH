<template>
    <div class="entity-inline entity-phi">
        <EntityString value="φ" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityPhi',
        props: {
        },
        components: {
            EntityString: defineAsyncComponent(() => import('../String/String.vue')),
        },
        mounted: function(){
            this.calc(true);
        },
        methods: {
            calc: function(emit) {
                let result = 1.618033988749894;
                if (emit) this.$emit('calc', result);
                return result;
            }
        }      
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-phi {
        
    }
</style>