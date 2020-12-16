<template>
    <div class="entity-product-factor">
        <component v-if="!firstChild" :is="signEntity" />
        <MathEntity
            v-on:calc="calc($event, true)"
            v-bind:into="into.expression" />
    </div>
</template>

<script>
    import { defineAsyncComponent } from "vue";

    export default {
        name: 'EntityProductFactor',
        props: {
            into: Object,
            firstChild: Boolean
        },
        computed: {
            signEntity: function(){
                let entityName = null;

                switch (this.into.action) {
                    case 'divide':
                        entityName = 'entityDivision';
                        break;
                    case 'multiply':
                        entityName = 'entityMultiplication';
                        break;
                }

                return entityName;
            }
        },
        data: function(){
            return {
                out: this.into
            }
        },
        created: function(){

        },
        methods: {
            calc: function(event, emit){
                this.out.value = event.value;
                if (emit) this.$emit('calc', this.out);
                return this.out;
            }
        },
        components: {
            MathEntity: defineAsyncComponent(() => import('../MathEntity.vue')),
            EntityMultiplication: defineAsyncComponent(() => import('../Multiplication/Multiplication.vue')),
            EntityDivision: defineAsyncComponent(() => import('../Division/Division.vue')),
        }
    }
</script>

<style lang="scss">
    @import '../MathEntity.scss';

    .entity-product-factor {

    }

</style>
