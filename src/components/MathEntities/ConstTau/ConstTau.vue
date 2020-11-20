<template>
    <div class="entity-inline entity-tau">
        <EntityString value="τ" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityTau',
        props: {
            into: Object
        },
        data: function(){
          return {
            out: this.into
          }
        },
        components: {
            EntityString: defineAsyncComponent(() => import('../String/String.vue')),
        },
        mounted: function(){
            this.calc(true);
        },
        methods: {
            calc: function(emit) {
                let result = this.out.value = 6.283185307179586;
                if (emit) this.$emit('calc', this.out);
                return result;
            }
        }     
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-tau {
        
    }
</style>