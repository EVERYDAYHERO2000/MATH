<template>
    <div class="entity-inline entity-pi">
        <EntityString value="π" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityPi',
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
                let result = this.out.value = 3.141592653589793;
                if (emit) this.$emit('calc', this.out);
                return result;
            }
        }
    }
</script>

<style lang="scss">
    @import '../MathEntity.scss';

    .entity-pi {

    }
</style>
