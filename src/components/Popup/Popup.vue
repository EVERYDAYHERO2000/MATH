<template>
  <div
    class="popup"
    v-bind:class="{ 'popup_visibility_visible': isVisible, 'popup_visibility_hide': hideAnim }"
    v-on:click.self="close"
  >
    <div class="popup__window">
      <div class="popup__window-header">
        <div class="popup__window-title">{{ title }}</div>
        <ButtonIcon icon="close" title="Close" color="content" size="s" v-on:click="close" />
      </div>
      <div class="popup__window-body">
        <slot name="body" />
      </div>
      <div class="popup__window-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonIcon from '/@components/ButtonIcon/ButtonIcon.vue';

export default {
  name: 'Popup',
  props: {
    backdrop: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: false,
    },
  },
  data: function () {
    return {
      isVisible: false,
      hideAnim: false,
    };
  },
  mounted: function () {
    this.switchVisible();
  },
  components: {
    ButtonIcon,
  },
  methods: {
    close: function () {
      this.hideAnim = true;
      setTimeout(
        function (e) {
          e.$emit('close', true);
        },
        300,
        this,
      );
    },
    switchVisible: function () {
      this.isVisible = !this.isVisible;
    },
  },
  emits: ['close'],
};
</script>

<style lang="scss">
@import '../../css/main.scss';

$padding-vertical: $grid-3;
$padding-horisontal: $grid-0;

.popup {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
  pointer-events: all;

  .app_theme_light & {
    background-color: rgba($color-background-invert_theme-light, 0);
  }

  .app_theme_dark & {
    background-color: rgba($color-background-invert_theme-dark, 0);
  }

  @include media('<=phone') {
    align-items: flex-end;
  }

  &__window {
    width: 550px;
    box-shadow: 0 0 45px rgba($color-black, 0.12);
    display: flex;
    flex-direction: column;
    pointer-events: all;
    //overflow: hidden;
    border-radius: $grid-0;
    opacity: 0;
    transition: opacity 0.2s;

    .app_theme_light & {
      background-color: $color-background_theme-light;
    }

    .app_theme_dark & {
      background-color: $color-background_theme-dark;
    }

    @include media('<=phone') {
      border-radius: $grid-2 $grid-2 0 0;
      padding-bottom: $grid-5;
    }
  }

  &_visibility {
    &_visible {
      animation: backdrop-show 2s 0.2s ease forwards;

      .popup__window {
        animation: popup-show 0.2s 0.2s ease-in-out forwards;
      }
    }

    &_hide {
      animation: backdrop-hide 0.1s ease forwards;

      .popup__window {
        animation: popup-hide 0.1s ease-in-out forwards;
      }
    }
  }

  &__window-header {
    box-sizing: border-box;
    padding: $grid-2 $grid-2 0 $padding-vertical;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__window-title {
    font-weight: 500;
    user-select: none;
    box-sizing: border-box;

    .app_theme_light & {
      color: $color-content_theme-light;
    }

    .app_theme_dark & {
      color: $color-content_theme-dark;
    }
  }

  &__window-body {
    box-sizing: border-box;
    padding: $grid-2 $padding-vertical $padding-horisontal $padding-vertical;
  }

  &__window-footer {
    box-sizing: border-box;
    padding: $padding-horisontal $padding-vertical $padding-vertical $padding-vertical;
    display: flex;
    justify-content: flex-end;
  }
}

@keyframes backdrop-show {
  0% {
    background-color: rgba($color-black, 0);
  }
  100% {
    background-color: rgba($color-black, 0.1);
  }
}

@keyframes backdrop-hide {
  0% {
    background-color: rgba($color-black, 0.1);
  }
  100% {
    background-color: rgba($color-black, 0);
  }
}

@keyframes popup-show {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes popup-hide {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px);
  }
}
</style>
