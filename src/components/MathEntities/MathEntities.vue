<template>
  <div class="math-entities">
    <component :is="entityName" v-on:calc="calc($event, true)" v-bind:into="into" />
  </div>
</template>

<script>
import Enities from './entities.js';

export default {
  name: 'MathEntities',
  props: {
    into: Object,
  },
  computed: {
    entityName: function () {
      let type = this.into.type;
      return `Entity${type.charAt(0).toUpperCase() + type.slice(1)}`;
    },
  },
  data: function () {
    return {
      out: this.into,
    };
  },
  components: {
    ...Enities,
  },
  created: function () {},
  methods: {
    calc: function (event, emit) {
      this.out.value = event.value;
      if (emit) this.$emit('calc', this.out);
      return this.out;
    },
  },
};
</script>

<style lang="scss">
@import '../../css/main.scss';
@import './MathEntities.scss';

.math-entities {
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;

  .app_theme_light & {
    color: $color-content_theme-light;
  }

  .app_theme_dark & {
    color: $color-content_theme-dark;
  }
}
</style>
