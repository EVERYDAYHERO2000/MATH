<template>
  <div>
    <span class="atom" v-on:keyup="setValue" ref="input" contenteditable></span>
    <span>Empty</span>
  </div>
</template>

<script>
    export default {
        name: 'Empty',
        mounted: function () {
          this.focus();
        },
        methods:  {
            focus: function () {
              this.$refs.input.focus();
            },
            setValue: function (evt) {
              if (this.$refs.input.innerText.length && !Number(evt.key).isNaN) {
                this.$emit('isnumber', Number(evt.key));
              }
            }
        }
    }
</script>

<style lang="scss">
  .atom {
    padding: 10px;
    border: 1px solid red;
  }
</style>
