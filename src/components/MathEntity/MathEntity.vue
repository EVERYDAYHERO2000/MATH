<template>
  <div class="math-entities">
    <component
      :is="entityName"
      v-on:rebuild="rebuild"
      v-on:calc="calc($event, true)"
      v-bind:into="into"
    />
  </div>
</template>

<script>
import parse from '/@fn/mathParser/mathParser.js';
import Entities from './entities.js';

const component =  {
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
      const obj = parse(evt.into.value);
      this.out = obj.result;
    },
  },
};

window.MathEntity = component;

export default component;
</script>

<style lang="scss">
@import './MathEntity.scss';

.math-entities {
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;

  .app_theme_light & {
    color: $color-entity_theme_light;
  }

  .app_theme_dark & {
    color: $color-entity_theme_dark;
  }

  .theme_export & {
    color: $color-entity_theme_light!important;
  }
}
</style>
