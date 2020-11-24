<template>
  <div class="entity-inline entity-number entity-atom" v-on:keyup="setValue" contenteditable>
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
      // Cut
      // Paste
      // Backspace al leftmost
      // Delete at rightmost

      console.log('up', evt.key);

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

        if (!Number(value)) {
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

.entity-atom {
  display: inline-block;
  box-sizing: border-box;
  letter-spacing: 1px;
}

.entity-number {
  color: darkred;

  &:hover {
    color: red;
    transition: color 0.2s;
  }
}
</style>
