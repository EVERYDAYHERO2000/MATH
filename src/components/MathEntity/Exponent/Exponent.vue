<template>
    <div class="entity-exponent">

        <MathEntity
            class="entity-exponent__base"
            v-bind:into="into.base" />
        <EntityString class="entity-invisible" value="^" />
        <MathEntity
            class="entity-exponent__exponent"
            v-bind:into="into.exponent" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityExponent',
        props: {
            into: Object
        },
        data: function(){
          return {
            out: this.into
          }
        },
        components: {
            MathEntity: defineAsyncComponent(() => import('../../MathEntity/MathEntity.vue')),
            EntityString: defineAsyncComponent(() => import('../String/String.vue'))
        }
    }
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntity.scss';

    .entity-exponent {

        .entity-invisible {
            font-size: 16px;
            transform: translate(-7px, 11px);
        }

    }

    .entity-exponent__base {

    }

    .entity-exponent__exponent {
        font-size: .9em;
        transform: scale(0.7) translateY(-$grid-2);
        margin-left: -2px;
    }

</style>
