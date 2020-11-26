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
      <ButtonIcon v-on:click="toggleVisible" icon="menu" title="Main Menu" />
    </template>

    <template v-slot:body>
      <button v-ripple="'rgba(0, 0, 0, 0.02)'" class="main-menu__item" v-on:click="exportToPng">
        Export as png
      </button>
      <button
        v-ripple="'rgba(0, 0, 0, 0.02)'"
        class="main-menu__item"
        v-on:click="importExpression"
      >
        Import Expression
      </button>
      <button
        v-ripple="'rgba(0, 0, 0, 0.02)'"
        class="main-menu__item"
        v-on:click="appSettings"
      >
        App Settings
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
    exportToPng: function () {
      this.toggleVisible();
      this.$emit('exportToPng', true);
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
};
</script>

<style lang="scss">
@import '../../../css/main.scss';

.main-menu {
}

.main-menu__item {
  border: none;
  background-color: rgba($color-background-invert_theme-light, 0);
  display: block;
  font-size: 16px;
  color: $color-primary_theme-light;
  padding: $grid-2 $grid-3;
  box-sizing: border-box;
  font-weight: 600;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: rgba($color-background-invert_theme-light, 0.02);
  }

  &:focus {
    outline: none;
  }
}
</style>
