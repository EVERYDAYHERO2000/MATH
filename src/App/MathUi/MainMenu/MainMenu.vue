<template>
  <Sidebar
    class="main-menu"
    v-bind:visible="isVisible"
    v-on:clickOutside="isVisible = false"
    v-bind:backdrop="true"
    attachment="left"
  >
    <template v-slot:header>
      <Logo />
      <ButtonIcon v-on:click="toggleVisible" icon="menu" v-bind:title="D('Main Menu')" />
    </template>

    <template v-slot:body>
      <button
        v-ripple
        class="main-menu__item"
        v-on:click="importExpression"
      >
        {{ D('Import Expression') }}
      </button>
      <button v-ripple class="main-menu__item" v-on:click="exportAsImage">
        {{ D('Export as Image') }}
      </button>
      <button v-ripple class="main-menu__item" v-on:click="appSettings">
        {{ D('App Settings') }}
      </button>
    </template>
  </Sidebar>
</template>

<script>
import Sidebar from '/@components/Sidebar/Sidebar.vue';
import ButtonIcon from '/@components/ButtonIcon/ButtonIcon.vue';
import Logo from '/@components/Logo/Logo.vue';

export default {
  name: 'MainMenu',
  props: {},
  components: {
    ButtonIcon,
    Logo,
    Sidebar,
  },
  data: function () {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleVisible: function () {
      this.isVisible = !this.isVisible;
    },
    exportAsImage: function () {
      this.toggleVisible();
      this.$emit('exportAsImage', 'MathPopupExportAsImage');
      //this.$emit('exportToPng', true);
    },
    importExpression: function () {
      this.toggleVisible();
      this.$emit('importExpression', 'MathPopupImportExpression');
    },
    appSettings: function () {
      this.toggleVisible();
      this.$emit('appSettings', 'MathPopupAppSettings');
    },
  },
  emits: ['exportAsImage', 'importExpression', 'appSettings'],
};
</script>

<style lang="scss">

.main-menu {
  &__item {
    border: none;
    display: block;
    font-size: $font-size_m;
    padding: $grid-2 $grid-3;
    box-sizing: border-box;
    font-weight: 600;
    width: 100%;
    text-align: left;

    .app_theme_light & {
      color: $color-primary_theme_light;
      background-color: rgba($color-background-invert_theme_light, 0);
    }

    .app_theme_dark & {
      color: $color-content_theme_dark;
      background-color: rgba($color-background-invert_theme_dark, 0);
    }

    &:hover {
      .app_theme_light & {
        background-color: rgba($color-background-invert_theme_light, 0.03);
      }

      .app_theme_dark & {
        background-color: rgba($color-background-invert_theme_dark, 0.03);
      }
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
