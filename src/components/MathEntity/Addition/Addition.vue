<template>
    <div class="entity-inline entity-addition">
        <EntityString value="+"/>
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityAddition',
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
        }
    }
</script>

<style lang="scss">
    @import '../MathEntity.scss';

    .entity-addition {
        display: inline-block;
        padding: 0 .3em;
        box-sizing: border-box;
    }
</style>
