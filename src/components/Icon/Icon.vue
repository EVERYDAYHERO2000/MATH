<template>
  <div class="icon" v-bind:class="[classColor]">
    <component :is="icon" />
  </div>
</template>

<script>
import { color } from '/@fn/propsType/propsType.js';
import svg from './svg.js';

export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
    },
    color: color(),
  },
  computed: {
    classColor: function () {
      return `icon_color_${this.color}`;
    },
    icon: function () {
      return `icon${this.name.charAt(0).toUpperCase() + this.name.slice(1)}`;
    },
  },
  components: {
    ...svg,
  },
};
</script>

<style lang="scss">
@import '../../css/main.scss';

.icon {
  display: inline-flex;
  transform-origin: center;

  svg {
    rect,
    path,
    circle {
    }
  }

  &_color {
    &_black {
      rect,
      path,
      circle {
        fill: $color-black;
      }
    }

    &_primary {
      rect,
      path,
      circle {
        fill: $color-primary;
      }
    }

    &_active {
      rect,
      path,
      circle {
        fill: $color-active;
      }
    }

    &_content {
      rect,
      path,
      circle {
        fill: $color-content;
      }
    }

    &_danger {
      rect,
      path,
      circle {
        fill: $color-danger;
      }
    }

    &_success {
      rect,
      path,
      circle {
        fill: $color-success;
      }
    }
  }
}
</style>
