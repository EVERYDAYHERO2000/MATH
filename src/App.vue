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

    this.setScreenHeight();
    window.addEventListener('resize', this.setScreenHeight);
  },
  methods: {
      exportToPng: function(){
        this.$refs.canvas.renderToPng()
      },
      setScreenHeight: function(){
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
  }
}
</script>

<style lang="scss">
@import './css/main.scss';


.app {
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  min-height: -webkit-fill-available;
  touch-action: none;
  font-size: $font-size_m;

  &_theme {
    &_light {
      background-color: $color-background-tint_theme_light;
    }

    &_dark {
      background-color: $color-background-tint_theme_dark;
    }
  }
}
</style>
