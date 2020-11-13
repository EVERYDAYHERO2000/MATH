<template>
    <div class="entity-inline entity-gamma">
        <EntityString value="γ" />
    </div>
</template>

<script>
    export default {
        name: 'EntityGamma',
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
                let result = 0.577215664901532;
                if (emit) this.$emit('calc', result);
                return result;
            }
        }      
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-gamma {
        
    }
</style>