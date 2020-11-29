<template>
  <div
    class="entity-atom entity-empty"
    ref="input"
    v-on:keyup="setValue"
    contenteditable
  ></div>
</template>

<script>
export default {
  name: 'EntityEmpty',
  mounted: function () {
    this.focus();
  },
  methods: {
    focus: function () {
      this.$refs.input.focus();
    },
    setValue: function (evt) {
      let key = this.$root.$refs.canvas.$data.keyboard.keys.shift();

      while (key && key !== evt.key) {
        key = this.$root.$refs.canvas.$data.keyboard.keys.shift();
      }

      if (key) {
        const value = evt.target.innerText;
        const data = {
          key,
          into: {
            type: 'empty',
            value,
          },
        };

        if (value) {
          this.$emit('rebuild', data);
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import '../../../css/main.scss';
@import '../MathEntity.scss';

.entity-empty {
  min-width: 5px;
  min-height: 1em;
  outline: 1px solid red;
}
</style>
