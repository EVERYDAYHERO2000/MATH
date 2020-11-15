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
                let sign = '';
                switch (this.into.sign) {
                    case 'minus':
                        sign = '-';
                        break;
                    case 'plus':
                        sign = '';
                        break;
                    case 'plus-minus':
                        sign = '±'; 
                        break;
                    case 'minus-plus':
                        sign = '∓';
                        break;            
                }
                return sign;
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