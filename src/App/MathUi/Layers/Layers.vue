<template>
  <div class="math-ui__layers">
    <template v-if="name">
      <component :is="name" v-on:close="close" />
    </template>
  </div>
</template>

<script>
  import MathPopupImportExpression from './PopupImportExpression/PopupImportExpression.vue';

  export default {
    name: 'MathUiLayers',
    props: {
      name: String,
    }, 
    components: {
      MathPopupImportExpression
    },
    methods: {
      close: function() {
        this.$emit('close', null);
      }
    }
  }    
</script>

<style lang="scss">
  @import '../../../css/main.scss';

  .math-ui__layers {
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }
</style>