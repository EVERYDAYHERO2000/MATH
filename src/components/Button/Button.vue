<template>
  <button
    class="button"
    v-bind:class="[{ button_disabled: disabled }, classSize, classColor]"
    v-ripple
    v-bind:title="title"
  >
    {{ label }}
  </button>
</template>

<script>

import { size, color } from '/@fn/propsType/propsType.js';

export default {
  name: 'Button',
  props: {
    title: String,
    label: String,
    disabled: Boolean,
    color: color('primary'),
    size: size('m'),
  },
  computed: {
    classColor: function () {
      return `button_color_${this.color}`;
    },
    classSize: function () {
      return `button_size_${this.size}`;
    },
  },
};
</script>

<style lang="scss">

.button {
  border-radius: $grid-1;
  border: none;
  font-size: $font-size_m;
  transition: all 0.2s;

  .app_theme_light & {
    box-shadow: inset 0 0 0 1px rgba($color-background-invert_theme_light, 0.1);
  }

  .app_theme_dark & {
    box-shadow: inset 0 0 0 1px rgba($color-background-invert_theme_dark, 0.1);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    transition: background-color 0.2s;

    @include media('<=phone') {
      transition: none;
      background-color: transparent;
    }
  }

  &_size {
    &_s {
      padding: 0;
    }

    &_m {
      padding: $grid-1 $grid-2;
      height: $grid-5;
    }

    &_l {
      padding: $grid-2 $grid-3;
      height: $grid-7;
    }
  }

  &_color {
    &_black {
      .app_theme_light & {
        background-color: $color-background-invert_theme_light;
        color: $color-content-invert_theme_light;
      }

      .app_theme_dark & {
        background-color: $color-background-invert_theme_dark;
        color: $color-content-invert_theme_dark;
      }

      &:hover {
        .app_theme_light & {
          background: lighten($color-background-invert_theme_light, 5%);
        }

        .app_theme_dark & {
          background: lighten($color-background-invert_theme_dark, 5%);
        }
      }
    }

    &_primary {
      .app_theme_light & {
        background-color: $color-primary_theme_light;
        color: $color-content-invert_theme_light;
      }

      .app_theme_dark & {
        background-color: $color-primary_theme_dark;
        color: $color-content-invert_theme_dark;
      }

      &:hover {
        .app_theme_light & {
          background: lighten($color-primary_theme_light, 5%);
        }

        .app_theme_dark & {
          background: lighten($color-primary_theme_dark, 5%);
        }
      }
    }

    &_active {
      .app_theme_light & {
        background-color: $color-active_theme_light;
        color: $color-content-invert_theme_light;
      }

      .app_theme_dark & {
        background-color: $color-active_theme_dark;
        color: $color-content-invert_theme_dark;
      }

      &:hover {
        .app_theme_light & {
          background: lighten($color-active_theme_light, 5%);
        }

        .app_theme_dark & {
          background: lighten($color-active_theme_dark, 5%);
        }
      }
    }

    &_content {
      .app_theme_light & {
        background-color: $color-content_theme_light;
        color: $color-content-invert_theme_light;
      }

      .app_theme_dark & {
        background-color: $color-content_theme_dark;
        color: $color-content-invert_theme_dark;
      }

      &:hover {
        .app_theme_light & {
          background: lighten($color-content_theme_light, 5%);
        }

        .app_theme_dark & {
          background: lighten($color-content_theme_dark, 5%);
        }
      }
    }

    &_danger {
      .app_theme_light & {
        background-color: $color-danger_theme_light;
        color: $color-content-invert_theme_light;
      }

      .app_theme_dark & {
        background-color: $color-danger_theme_dark;
        color: $color-content-invert_theme_dark;
      }

      &:hover {
        .app_theme_light & {
          background: lighten($color-danger_theme_light, 5%);
        }

        .app_theme_dark & {
          background: lighten($color-danger_theme_dark, 5%);
        }
      }
    }

    &_success {
      .app_theme_light & {
        background-color: $color-success_theme_light;
        color: $color-content-invert_theme_light;
      }

      .app_theme_dark & {
        background-color: $color-success_theme_dark;
        color: $color-content-invert_theme_dark;
      }

      &:hover {
        .app_theme_light & {
          background: lighten($color-success_theme_light, 5%);
        }

        .app_theme_dark & {
          background: lighten($color-success_theme_dark, 5%);
        }
      }
    }
  }

  &_disabled {
    pointer-events: none;
    opacity: 0.2;
    filter: grayscale(1);
    transition: all 0.2s;
  }
}
</style>
