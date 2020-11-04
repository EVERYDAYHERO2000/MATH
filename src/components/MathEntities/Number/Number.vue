<template>
  <div>
    <span class="atom" v-on:keyup="setValue" ref="input" contenteditable>{{value || ''}}</span>
    <span>Number {{value}}</span>
  </div>
</template>

<script>
    export default {
        name: 'EntityNumber',
        mounted: function () {
          this.focus();
        },
        props: {
          val: Number
        },
        data: function () {
            return {
                value: Number(this.val)
            }
        },
        methods:  {
            focus: function (pos) {
              var el = this.$refs.input;
              var range = document.createRange();
              var sel = window.getSelection();

              range.setStart(el, String(this.value).length);
              range.collapse(true);

              sel.removeAllRanges();
              sel.addRange(range);
            },
            setValue: function (evt) {

              if (evt.target.innerText.length == 0) {
                this.$emit('isempty');
              }

              this.value = Number(evt.target.innerText);
            }
        }
    }
</script>

<style lang="scss">
  .atom {
    padding: 10px;
    border: 1px solid green;

    &::after {
      content: "";
      display: inline-block;
      width: 0.1em;
    }
  }
</style>
