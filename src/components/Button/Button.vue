<template>
  <button
    class="button"
    v-bind:class="[{ button_disabled: disabled }, classSize, classColor]"
    v-ripple="'rgba(255, 255, 255, 0.05)'"
    v-bind:title="title"
  >
    {{ title }}
  </button>
</template>

<script>
import { size, color } from '/@fn/propsType/propsType.js';

export default {
  name: 'Button',
  props: {
    title: String,
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
@import '../../css/main.scss';

.button {
  border-radius: $grid-1;
  border: none;
  font-size: 16px;
  transition: all 0.2s;
  box-shadow: inset 0 0 0 1px rgba($color-black, 0.1);

  &:focus {
    outline: none;
  }

  &:hover {
    transition: background-color 0.2s;
  }

  &_size {
    &_s {
      padding: 0;
    }

    &_m {
      padding: $grid-1 $grid-2;
    }

    &_l {
      padding: $grid-2 $grid-3;
    }
  }

  &_color {
    &_black {
      background-color: $color-black;
      color: $color-white;

      &:hover {
        background: lighten($color-black, 5%);
      }
    }

    &_primary {
      background-color: $color-primary;
      color: $color-white;

      &:hover {
        background: lighten($color-primary, 5%);
      }
    }

    &_active {
      background-color: $color-active;
      color: $color-white;

      &:hover {
        background: lighten($color-active, 5%);
      }
    }

    &_content {
      background-color: $color-content;
      color: $color-white;

      &:hover {
        background: lighten($color-content, 5%);
      }
    }

    &_danger {
      background-color: $color-danger;
      color: $color-white;

      &:hover {
        background: lighten($color-danger, 5%);
      }
    }

    &_success {
      background-color: $color-success;
      color: $color-white;

      &:hover {
        background: lighten($color-success, 5%);
      }
    }
  }
}

.button_disabled {
  pointer-events: none;
  opacity: 0.3;
  filter: grayscale(1);
  transition: all 0.2s;
}
</style>
