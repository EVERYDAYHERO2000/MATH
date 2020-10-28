<template>
  <div class="app">
    <Icon />
    <MathCanvas />
    <MathUi />
  </div>
</template>

<script>
import MathCanvas from './components/MathCanvas/MathCanvas.vue';
import MathUi from './components/MathUi/MathUi.vue';
import Icon from './components/Icon/Icon.vue';

export default {
  name: 'App',
  components: {
    MathCanvas,
    MathUi,
    Icon
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