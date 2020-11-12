<template>
    <div class="entity-exponent">
        
        <MathEntities 
            class="entity-exponent__base" 
            v-bind:expression="base" />
        <EntityString class="entity-invisible" value="^" />
        <MathEntities 
            class="entity-exponent__exponent" 
            v-bind:expression="exponent" />
    </div>
</template>

<script>
    import { defineAsyncComponent, resolveComponent } from "vue";

    export default {
        name: 'EntityExponent',
        props: {
            base: Object,
            exponent: Object
        },
        components: {
            MathEntities: defineAsyncComponent(() => import('../../MathEntities/MathEntities.vue')),
            EntityString: defineAsyncComponent(() => import('../String/String.vue'))
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

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