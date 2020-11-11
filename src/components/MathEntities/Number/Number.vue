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
  }

</style>
