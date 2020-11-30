<template>
  <div v-bind:class="[{ sidebar_visibility_visible: visible }, classAttachment]" class="sidebar">
    <div
      v-if="visible"
      v-on:click="clickOutside"
      v-bind:class="['sidebar__backdrop', { sidebar__backdrop_desktop: backdrop }]"
    ></div>
    <div class="sidebar__header">
      <slot name="header"> </slot>
    </div>
    <div v-if="visible" class="sidebar__body">
      <slot name="body"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
    attachment: {
      type: String,
      default: 'left',
    },
    backdrop: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classAttachment: function () {
      return `sidebar_attachment_${this.attachment}`;
    },
  },
  methods: {
    clickOutside: function () {
      this.$emit('clickOutside', true);
    },
  },
  emits: ['clickOutside'],
};
</script>

<style lang="scss">
@import '../../css/main.scss';

$panel-width-desktop: 280px;
$panel-width-mobile: 80vw;
$panel-width-hidden: $grid-7;

.sidebar {
  pointer-events: all;
  position: absolute;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 999;
  width: $panel-width-desktop;

  .app_theme_light & {
    background-color: rgba($color-background_theme_light, 0);
    box-shadow: 0 0 0 1px rgba($color-background-invert_theme_light, 0);
  }

  .app_theme_dark & {
    background-color: rgba($color-background_theme_dark, 0);
    box-shadow: 0 0 0 1px rgba($color-background-invert_theme_dark, 0);
  }

  @include media('<=phone') {
    width: $panel-width-mobile;
  }

  &__backdrop {
    display: block;
    width: 100vw;
    position: absolute;
    height: 100%;
    opacity: 0;
    animation: animate-backdrop 0.2s ease-in-out 0.1s forwards;
    z-index: 10000;

    @include media('<=phone') {
      pointer-events: all;

      .app_theme_light & {
        background-color: rgba($color-background-invert_theme_light, 0.1);
      }

      .app_theme_dark & {
        background-color: rgba($color-black, 0.5);
      }
    }

    @include media('>phone') {
      pointer-events: none;
    }

    &_desktop {
      pointer-events: all;

      .app_theme_light & {
        background-color: rgba($color-background-invert_theme_light, 0.1);
      }

      .app_theme_dark & {
        background-color: rgba($color-black, 0.3);
      }
    }
  }

  &_attachment {
    &_left {
      left: 0;
      transform: translateX(-$panel-width-desktop + $panel-width-hidden);

      @include media('<=phone') {
        transform: translateX(calc(-#{$panel-width-mobile} + #{$panel-width-hidden}));
      }
    }

    &_right {
      right: 0;
      transform: translateX($panel-width-desktop - $panel-width-hidden);

      @include media('<=phone') {
        transform: translateX(calc(#{$panel-width-mobile} - #{$panel-width-hidden}));
      }
    }
  }

  &_attachment_left &__backdrop {
    left: $panel-width-desktop;

    @include media('<=phone') {
      left: $panel-width-mobile;
    }
  }

  &_attachment_right &__backdrop {
    right: $panel-width-desktop;

    @include media('<=phone') {
      right: $panel-width-mobile;
    }
  }

  &__header {
    padding: $grid-1;
    border-bottom: none;
    box-sizing: border-box;
    display: flex;
    min-height: $grid-7;
    max-height: $grid-7;
    justify-content: space-between;
  }

  &__body {
    flex-grow: 1;
    height: calc(100% - #{$grid-7});
  }

  &_visibility {
    &_visible {
      transform: translateX(0px);
      transition: transform 0.2s 0.05s ease-in-out;
      z-index: 1000;

      .app_theme_light & {
        background-color: rgba($color-background_theme_light, 1);
        box-shadow: 0 0 0 1px rgba($color-background-invert_theme_light, 0.03);
      }

      .app_theme_dark & {
        background-color: rgba($color-background_theme_dark, 1);
        box-shadow: 0 0 0 1px rgba($color-black, 0.5);
      }
    }
  }

  &_visibility_visible &__header {
    .app_theme_light & {
      border-bottom: solid 1px rgba($color-background-invert_theme_light, 0.08);
    }

    .app_theme_dark & {
      border-bottom: solid 1px rgba($color-black, 0.5);
    }
  }
}

@keyframes animate-backdrop {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
