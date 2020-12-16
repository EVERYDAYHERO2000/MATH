<template>
  <div class="drop-down">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {},
};
</script>

<style lang="scss">

.drop-down {
  border-radius: $grid-1;
  overflow: hidden;
  position: absolute;
  padding: $grid-1 0;
  transform: translateY($grid-1);
  width: 100%;

  .app_theme_light & {
    background-color: rgba($color-background_theme_light, 1);
    color: rgba($color-content_theme_light, 1);
    animation: dropdown-show_desktop_theme_light 0.2s ease-in-out forwards;
  }

  .app_theme_dark & {
    background-color: rgba($color-background_theme_dark, 1);
    color: rgba($color-content_theme_dark, 1);
    animation: dropdown-show_desktop_theme_dark 0.2s ease-in-out forwards;
  }

  @include media('<=phone') {
    width: calc(100% - #{$grid-2} * 2);
    padding: $grid-2 0;

    .app_theme_light & {
      animation: dropdown-show_mobile_theme_light 0.2s ease-in-out forwards;
    }  

    .app_theme_dark & {
      animation: dropdown-show_mobile_theme_light 0.2s ease-in-out forwards;
    }  

  }
}

@keyframes dropdown-show_desktop_theme_light {
  0% {
    opacity: 0;
    transform: translateY(-$grid-1);
    box-shadow: 0 0px 5px rgba($color-black, 0), 0 0px 5px rgba($color-black, 0);
  }
  100% {
    opacity: 1;
    transform: translateY($grid-1);
    box-shadow: 0 3px 10px rgba($color-black, 0.2), 0 2px 20px rgba($color-black, 0.1);
  }
}

@keyframes dropdown-show_desktop_theme_dark {
  0% {
    opacity: 0;
    transform: translateY(-$grid-1);
    box-shadow: 0 0px 5px rgba($color-black, 0), 0 0px 5px rgba($color-black, 0),
      0 0 0 1px rgba($color-black, 0.5);
  }
  100% {
    opacity: 1;
    transform: translateY($grid-1);
    box-shadow: 0 3px 10px rgba($color-black, 0.8), 0 2px 20px rgba($color-black, 0.2),
      0 0 0 1px rgba($color-black, 0.5);
  }
}

@keyframes dropdown-show_mobile_theme_light {
  0% {
    opacity: 0;
    transform: scale(0.8);
    box-shadow: 0 0px 5px rgba($color-black, 0), 0 0px 5px rgba($color-black, 0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 3px 10px rgba($color-black, 0.3), 0 2px 20px rgba($color-black, 0.2);
  }
}

@keyframes dropdown-show_mobile_theme_dark {
  0% {
    opacity: 0;
    transform: scale(0.8);
    box-shadow: 0 0px 5px rgba($color-black, 0), 0 0px 5px rgba($color-black, 0),
      0 0 0 1px rgba($color-black, 0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0 3px 10px rgba($color-black, 0.8), 0 2px 20px rgba($color-black, 0.2),
      0 0 0 1px rgba($color-black, 0.5);
  }
}
</style>
