<template>
  <div v-bind:class="['app', `app_theme_${theme}`]">
    <MathCanvas ref="canvas" />
    <MathUi v-on:exportToPng="exportToPng" />
  </div>
</template>

<script>
import MathCanvas from '/@app/MathCanvas/MathCanvas.vue';
import MathUi from '/@app/MathUi/MathUi.vue';
import MathEntity from '/@components/MathEntity/MathEntity.vue';
import '/@css/main.scss';

export default {
  name: 'App',
  components: {
    MathCanvas,
    MathEntity,
    MathUi,
  },
  data: function(){
    return {
      theme: null
    }
  },
  mounted: function(){
    this.theme = localStorage.theme || 'light'; 
  },
  methods: {
      exportToPng: function(){
        this.$refs.canvas.renderToPng()
      }
  }
}
</script>

<style lang="scss">
@import './css/main.scss';

  .app {
    width: 100%;
    height: 100vh;
    touch-action: none;

    &_theme {
      &_light {
        background-color: $color-background-tint_theme-light;
      }

      &_dark {
        background-color: $color-background-tint_theme-dark;
      }
    }
  }

</style>
