<template>
  <label class="switcher">
    <input
      v-on:change="toggleSwitch"
      v-bind:value="check"
      v-bind:checked="check"
      class="switcher__checkbox"
      type="checkbox"
    />
    <div v-ripple class="switcher__slider"></div>
  </label>
</template>

<script>
export default {
  name: 'Switcher',
  props: {
    check: {
      type: Boolean,
    },
  },
  mounted: function () {},
  methods: {
    toggleSwitch: function (evt) {
      this.$emit('toggle', evt.target.checked);
    },
  },
  emits: ['toggle'],
};
</script>

<style lang="scss">

.switcher {
  position: relative;
  display: inline-block;
  width: $grid-8;
  height: $grid-4;
  border-radius: $grid-4;
  -webkit-tap-highlight-color: transparent;

  .app_theme_light & {
    box-shadow: 0 0 0 1px rgba($color-background-invert_theme_light, 0.15);
  }
  .app_theme_dark & {
    box-shadow: 0 0 0 1px rgba($color-black, 0.2);
  }

  &:focus {
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
  }

  &__checkbox {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
    -webkit-tap-highlight-color: transparent;
    overflow: hidden;

    &:focus {
      outline: none;
    }
  }

  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: $grid-4;
    transition: 0.2s;
    overflow: hidden;

    .app_theme_light & {
      background-color: rgba($color-black, 0.1);
    }

    .app_theme_dark & {
      background-color: $color-background-tint_theme_dark;
    }

    &:focus {
      outline: none;
      -webkit-tap-highlight-color: transparent;
    }

    &:before {
      position: absolute;
      content: '';
      height: $grid-3;
      width: $grid-3;
      left: $grid-0;
      bottom: $grid-0;
      border-radius: 50%;
      transition: 0.2s;
      box-shadow: 0 0 0 1px rgba($color-black, 0.05), 0 2px 3px rgba($color-black, 0.1);

      .app_theme_light & {
        background-color: $color-background_theme_light;
      }

      .app_theme_dark & {
        background-color: $color-content-invert_theme_dark;
      }
    }
  }

  &__checkbox:checked + &__slider {
    .app_theme_light & {
      background-color: $color-primary_theme_light;
    }
    .app_theme_dark & {
      background-color: $color-primary_theme_dark;
    }
  }

  &__checkbox:checked + &__slider:before {
    transform: translateX($grid-4);
  }
}
</style>
