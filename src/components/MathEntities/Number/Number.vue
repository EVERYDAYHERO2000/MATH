<template>
  <div class="entity-inline entity-number" v-on:keydown="setValue" v-on:paste="setValue" contenteditable>
    {{into.value}}
  </div>
</template>

<script>
    export default {
        name: 'EntityNumber',
        props: {
          into: Object
        },
        methods: {
          setValue: function (evt) {
            const key = this.$root.$refs.canvas.$data.keyboard.keys.pop();
            console.log('child', key);
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
