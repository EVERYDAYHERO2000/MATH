<template>
    <div class="entity-signed">
            <span contenteditable>{{sign}}</span>
            <EntityNumber
                v-on:calc="calc($event, true)"
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
        data: function(){
            return {
                out: this.into
            }
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
        },
        methods: {
          calc: function(event, emit){
            this.out.value = Number(this.sign + event.value)
            if (emit) this.$emit('calc', this.out);
            return this.out
          }
        }
    }
</script>

<style lang="scss">
    @import '../../../css/main.scss';
    @import '../MathEntity.scss';

    .entity-signed {

    }

</style>
