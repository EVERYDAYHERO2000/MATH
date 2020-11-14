<template>
    <div class="entity-signed">
            <span>{{sign}}</span>
            <EntityNumber 
                v-bind:into="into.expression" />
    </div>
</template>

<script>
    import { defineAsyncComponent } from "vue";

    export default {
        name: 'EntitySigned',
        props: {
            into: Object
        },
        computed: {
            sign: function(){
                return (this.into.sign == 'minus') ? '-' : null;
            }
        },
        created: function(){

        },
        components: {
            EntityNumber: defineAsyncComponent(() => import('../Number/Number.vue'))
        }    
    }    
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntities.scss';

    .entity-signed {
        
    }

</style>