<template>
  <div class="app">
    <MathCanvas />
    <MathUi />
  </div>
</template>

<script>
import Icon from './components/Icon/Icon.vue';
import MathCanvas from './components/MathCanvas/MathCanvas.vue';
import MathUi from './components/MathUi/MathUi.vue';

export default {
  name: 'App',
  components: {
    Icon,
    MathCanvas,
    MathUi,
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
