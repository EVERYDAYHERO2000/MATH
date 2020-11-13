<template>
    <div class="entity-inline entity-e">
        <EntityString value="e" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityE',
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
                let result = 2.718281828459045;
                if (emit) this.$emit('calc', result);
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