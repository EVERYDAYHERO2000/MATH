<template>
    <div class="entity-inline entity-e">
        <EntityString v-bind:into="{value:'e'}" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityE',
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
                let result = this.out.value = 2.718281828459045;
                if (emit) this.$emit('calc', this.out);
                return result;
            }
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-e {
        font-style: italic;
    }

</style>