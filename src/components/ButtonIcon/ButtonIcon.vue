<template>
  <button
    class="button-icon"
    v-ripple
    v-bind:class="[{ 'button-icon_pressed': pressed }, classSize]"
    v-bind:title="title"
  >
    <Icon v-bind:name="icon" v-bind:color="iconColor" />
  </button>
</template>

<script>
import Icon from '/@components/Icon/Icon.vue';
import { size, color } from '/@fn/propsType/propsType.js';

export default {
  name: 'ButtonIcon',
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
    pressed: {
      type: Boolean,
    },
    color: color('primary'),
    size: size('m'),
  },
  computed: {
    iconColor: function () {
      return this.pressed ? 'black' : this.color;
    },
    classSize: function () {
      return `button-icon_size_${this.size}`;
    },
  },
};
</script>

<style lang="scss">

$size-s: $grid-3;
$size-m: $grid-5;

.button-icon {
  display: inline-flex;
  border-radius: $grid-1;
  transition: background-color 0.2s;
  border: none;

  .app_theme_light & {
    background-color: rgba($color-background-invert_theme_light, 0);
  }

  .app_theme_dark & {
    background-color: rgba($color-background-invert_theme_dark, 0);
  }

  &_size {
    &_s {
      padding: 0;
      min-width: $size-s;
      max-width: $size-s;
      min-height: $size-s;
      max-height: $size-s;
    }

    &_m {
      padding: $grid-1;
      min-width: $size-m;
      max-width: $size-m;
      min-height: $size-m;
      max-height: $size-m;
    }

    &_l {
    }
  }

  &_pressed {
    pointer-events: none;

    .app_theme_light & {
      fill: $color-content_theme_light;
      background-color: rgba($color-background-invert_theme_light, 0.05);
    }

    .app_theme_dark & {
      fill: $color-content_theme_dark;
      background-color: rgba($color-background-invert_theme_dark, 0.05);
    }

    &:hover {
      .app_theme_light & {
        background-color: rgba($color-background-invert_theme_light, 0.05);
      }

      .app_theme_dark & {
        background-color: rgba($color-background-invert_theme_dark, 0.05);
      }
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
    .app_theme_light & {
      background-color: rgba($color-background-invert_theme_light, 0.1);
    }

    .app_theme_dark & {
      background-color: rgba($color-background-invert_theme_dark, 0.1);
    }

    @include media('<=phone') {
      transition: none;
      background-color: transparent;
    }
  }
}
</style>
