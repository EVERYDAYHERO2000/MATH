<template>
    <div class="entity-inline entity-multiplication">
        <EntityString value="·" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityMultiplication',
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
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-multiplication {
        display: inline-block;
        padding: 0 .3em;
        box-sizing: border-box;
    }

</style>