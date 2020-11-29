<template>
  <div class="entity-atom entity-number" v-on:keyup="setValue" contenteditable>
    {{ into.value }}
  </div>
</template>

<script>
export default {
  name: 'EntityNumber',
  props: {
    into: Object,
  },
  data: function () {
    return {
      keys: [],
    };
  },
  methods: {
    setValue: function (evt) {
      // TODO:
      // Focus on mount
      // Other digits on mount
      // Cut
      // Paste
      // Backspace al leftmost
      // Delete at rightmost


      let key = this.$root.$refs.canvas.$data.keyboard.keys.shift();

      while (key && key !== evt.key) {
        key = this.$root.$refs.canvas.$data.keyboard.keys.shift();
      }

      if (key) {
        const value = evt.target.innerText;
        const data = {
          key,
          into: {
            type: 'number',
            value,
          },
        };

        if (isNaN(Number(value)) || !value.trim().length) {
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

.entity-number {
  color: darkred;

  &:hover {
    color: red;
    transition: color 0.2s;
  }
}
</style>
