<template>
  <div class="entity-inline entity-number">
      {{value}}
  </div>
</template>

<script>
    export default {
        name: 'EntityNumber',
        props: {
          value: Number
        },
        methods: {
          calc: function(){
            return this.value
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
