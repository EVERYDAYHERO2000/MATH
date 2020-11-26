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
        .app_theme_light & {
          fill: $color-background-invert_theme-light;
        }
        
        .app_theme_dark & {
          fill: $color-background-invert_theme-dark;
        }
      }
    }

    &_primary {
      rect,
      path,
      circle {
        .app_theme_light & {
          fill: $color-primary_theme-light;
        }
        
        .app_theme_dark & {
          fill: $color-primary_theme-dark;
        }
      }
    }

    &_active {
      rect,
      path,
      circle {
        .app_theme_light & {
          fill: $color-active_theme-light;
        }
        
        .app_theme_dark & {
          fill: $color-active_theme-dark;
        }
      }
    }

    &_content {
      rect,
      path,
      circle {
        .app_theme_light & {
          fill: $color-content_theme-light;
        }
        
        .app_theme_dark & {
          fill: $color-content_theme-dark;
        }
      }
    }

    &_danger {
      rect,
      path,
      circle {
        .app_theme_light & {
          fill: $color-danger_theme-light;
        }
        
        .app_theme_dark & {
          fill: $color-danger_theme-dark;
        }
      }
    }

    &_success {
      rect,
      path,
      circle {
        .app_theme_light & {
          fill: $color-success_theme-light;
        }
        
        .app_theme_dark & {
          fill: $color-success_theme-dark;
        }
      }
    }
  }
}
</style>
