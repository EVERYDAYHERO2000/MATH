<template>
    <div class="entity-constant">
         <component :is="constName" v-bind:into="into" />
    </div>
</template>

<script>
    import { defineAsyncComponent } from "vue";

    export default {
        name: 'EntityConstant',
        props: {
            into: Object
        },
        computed: {
            constName: function(){
                let name = null;
                switch (this.into.name) {
                    case 'euler':
                        name = 'EntityE';
                        break;
                    case 'pi':
                        name = 'EntityPi';
                        break;
                    case 'phi':
                        name = 'EntityPhi';
                        break;
                    case 'tau':
                        name = 'EntityTau';
                        break;
                }
                return name;
            }
        },
        created: function(){

        },
        components: {
            EntityE: defineAsyncComponent(() => import('../ConstE/ConstE.vue')),
            EntityPi: defineAsyncComponent(() => import('../ConstPi/ConstPi.vue')),
            EntityTau: defineAsyncComponent(() => import('../ConstTau/ConstTau.vue')),
            EntityPhi: defineAsyncComponent(() => import('../ConstPhi/ConstPhi.vue')),
        }
    }
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntity.scss';

    .entity-constant {
        display: inline-flex;
        align-items: baseline;
        white-space: nowrap;
        color: $color-entity;


    }



</style>
