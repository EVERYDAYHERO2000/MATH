<template>
  <div class="math-entities">
    <component
      :is="entityName"
      v-on:rebuild="rebuild"
      v-on:calc="calc($event, true)"
      v-bind:into="out"
    />
  </div>
</template>

<script>
import Entities from './entities.js';

export default {
  name: 'MathEntity',
  props: {
    into: Object,
  },
  computed: {
    entityName: function () {
      const type = this.out.type;
      return `Entity${type.charAt(0).toUpperCase() + type.slice(1)}`;
    },
  },
  data: function () {
    return {
      out: this.into,
    };
  },
  components: {
    ...Entities,
  },
  created: function () {},
  methods: {
    calc: function (event, emit) {
      this.out.value = event.value;
      if (emit) this.$emit('calc', this.out);
      return this.out;
    },
    rebuild: function (evt) {
      if (evt.into.hasOwnProperty('value')) {
        if (!evt.into.value) {
          this.out = {
            type: 'empty'
          };
        } else {
          const val = evt.into.value;

          if (val.match(/\d*/)) {
            this.out = {
              type: 'number',
              value: val
            };
          }
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import '../../css/main.scss';
@import './MathEntity.scss';

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
