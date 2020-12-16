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
                let result = this.out.value = 1.618033988749894;
                if (emit) this.$emit('calc', this.out);
                return result;
            }
        }
    }
</script>

<style lang="scss">
    @import '../MathEntity.scss';

    .entity-phi {

    }
</style>
