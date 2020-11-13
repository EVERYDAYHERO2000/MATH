<template>
  <div class="entity-inline entity-number">
      {{into.value}}
  </div>
</template>

<script>
    export default {
        name: 'EntityNumber',
        props: {
          into: Object
        },
        data: function(){
          return {
            out: this.into
          }
        },
        mounted: function(){
          this.calc(true);
        },
        methods: {
          calc: function(emit){
            if (emit) this.$emit('calc', this.out);
            return this.out
          }
        }
    }
</script>

<style lang="scss">
  @import '../../../css/main.scss';
  @import '../MathEntities.scss';

  .entity-number {
    display: inline-block;
    box-sizing: border-box;
    letter-spacing: 1px;

    &:hover {
      color: red;
      transition: color .2s;
    }
  }

</style>
