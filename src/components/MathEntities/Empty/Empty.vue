<template>
  <div>
    <span class="atom" v-on:keydown="setValue" ref="input" contenteditable></span>
    <span>Empty</span>
  </div>
</template>

<script>
    export default {
        name: 'EntityEmpty',
        mounted: function () {
          this.focus();
        },
        methods:  {
            focus: function () {
              this.$refs.input.focus();
            },
            setValue: function (evt) {
              if (!Number(evt.key).isNaN) {
                
                this.$emit('isnumber', Number(evt.key));
              }
            }
        }
    }
</script>

<style lang="scss">
  @import '../../../css/main.scss';
  @import '../MathEntities.scss';
  
  .atom {
    padding: 10px;
    border: 1px solid red;
  }
</style>
