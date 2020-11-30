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
    display: flex;
    flex-direction: column;
    pointer-events: all;
    //overflow: hidden;
    border-radius: $grid-0;
    opacity: 0;
    transition: opacity 0.2s;
    margin: $grid-7 0;

    .app_theme_light & {
      background-color: $color-background_theme-light;
      box-shadow: 0 0 45px rgba($color-black, 0.12);
    }

    .app_theme_dark & {
      background-color: $color-background_theme-dark;
      box-shadow: 0 0 45px rgba($color-black, 0.5), 0 0 0 1px rgba($color-black, 0.5);
    }

    @include media('<=phone') {
      border-radius: $grid-2 $grid-2 0 0;
      padding-bottom: $grid-5;
      margin-bottom: 0;
    }
  }

  &_visibility {
    &_visible {
      .app_theme_light & {
        animation: backdrop-show_theme_light 2s 0.2s ease forwards;
      }
      .app_theme_dark & {
        animation: backdrop-show_theme_dark 2s 0.2s ease forwards;
      }

      .popup__window {
        animation: popup-show_desktop 0.2s 0.2s ease-in-out forwards;

        @include media('<=phone') {
          animation: popup-show_mobile 0.2s 0.2s ease-in-out forwards;
        }  
      }
    }

    &_hide {
      .app_theme_light & {
        animation: backdrop-hide_theme_light 0.1s ease forwards;
      }  
      .app_theme_dark & {
        animation: backdrop-hide_theme_dark 0.1s ease forwards;
      }  

      .popup__window {
        animation: popup-hide_desktop 0.1s ease-in-out forwards;

        @include media('<=phone') {
          animation: popup-hide_mobile 0.1s ease-in-out forwards;
        }
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
    padding: $grid-2 $padding-vertical $grid-2 $padding-vertical;
  }

  &__window-footer {
    box-sizing: border-box;
    padding: $padding-horisontal $padding-vertical $padding-vertical $padding-vertical;
    display: flex;
    justify-content: flex-end;
  }
}

@keyframes backdrop-show_theme_light {
  0% {
    background-color: rgba($color-black, 0);
  }
  100% {
    background-color: rgba($color-black, 0.1);
  }
}

@keyframes backdrop-hide_theme_light {
  0% {
    background-color: rgba($color-black, 0.1);
  }
  100% {
    background-color: rgba($color-black, 0);
  }
}

@keyframes backdrop-show_theme_dark {
  0% {
    background-color: rgba($color-black, 0);
  }
  100% {
    background-color: rgba($color-black, 0.6);
  }
}

@keyframes backdrop-hide_theme_dark {
  0% {
    background-color: rgba($color-black, 0.6);
  }
  100% {
    background-color: rgba($color-black, 0);
  }
}

@keyframes popup-show_desktop {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes popup-hide_desktop {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px);
  }
}

@keyframes popup-show_mobile {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes popup-hide_mobile {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(80px);
  }
}
</style>
