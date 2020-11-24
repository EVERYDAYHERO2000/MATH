<template>
    <div class="entity-inline entity-gamma">
        <EntityString value="γ" />
    </div>
</template>

<script>
    export default {
        name: 'EntityGamma',
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
                let result = this.out.value = 0.577215664901532;
                if (emit) this.$emit('calc', this.out);
                return result;
            }
        }
    }
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntity.scss';

    .entity-gamma {

    }
</style>
