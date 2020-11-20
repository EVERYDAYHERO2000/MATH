<template>
  <div class="app">
    <MathCanvas ref="canvas" />
    <MathUi v-on:exportToPng="exportToPng" />
  </div>
</template>

<script>
import MathCanvas from '/@app/MathCanvas/MathCanvas.vue';
import MathUi from '/@app/MathUi/MathUi.vue';
import '/@css/main.scss';

export default {
  name: 'App',
  components: {
    MathCanvas,
    MathUi,
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
    background-color: $color-light;
  }

</style>
