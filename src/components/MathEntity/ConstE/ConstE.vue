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
        methods: {
        
        }
    }
</script>

<style lang="scss">
    @import '../MathEntity.scss';

    .entity-e {
        font-style: italic;
    }

</style>
