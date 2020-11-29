<template>
  <div class="logo">
    <LogoSidebar />
  </div>
</template>

<script>
import { VueComponent as LogoSidebar } from './assets/logo_sidebar.svg';

export default {
  name: 'Button',
  props: {},
  components: {
    LogoSidebar,
  },
};
</script>

<style lang="scss">
@import '../../css/main.scss';

.logo {
  &__text {
    .app_theme_light & {
      fill: rgba($color-content_theme-light, 1);
    }
    .app_theme_dark & {
      fill: rgba($color-content_theme-dark, 1);
    }
  }

  &__cursor {
    .app_theme_light & {
      fill: rgba($color-primary_theme-light, 1);
    }
    .app_theme_dark & {
      fill: rgba($color-primary_theme-dark, 1);
    }
  }
} 
</style>
