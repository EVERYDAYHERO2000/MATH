<template>
  <div class="math-ui__layers">
    <template v-if="name">
      <component :is="name" v-on:close="close" />
    </template>
  </div>
</template>

<script>
  import MathPopupImportExpression from './PopupImportExpression/PopupImportExpression.vue';
  import MathPopupExportAsImage from './PopupExportAsImage/PopupExportAsImage.vue';
  import MathPopupAppSettings from './PopupAppSettings/PopupAppSettings.vue';

  export default {
    name: 'MathUiLayers',
    props: {
      name: String,
    }, 
    components: {
      MathPopupImportExpression,
      MathPopupExportAsImage,
      MathPopupAppSettings,
    },
    methods: {
      close: function() {
        this.$emit('close', null);
      }
    },
    emits: ['close']
  }    
</script>

<style lang="scss">

  .math-ui__layers {
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }
</style>