<template>
  <div class="math-ui">
    <div class="math-ui__panels">
      <SidebarTools />
      <MainMenu 
        v-on:exportToPng="exportToPng"
        v-on:importExpression="importExpression" />
    </div>
    <MathUiLayers 
      v-bind:name="popup.name"
      v-on:close="closePopup" />
  </div>
</template>

<script>
  import SidebarTools from '/@components/SidebarTools/SidebarTools.vue';
  import MathUiLayers from './__layers.vue';
  import MainMenu from '/@components/MainMenu/MainMenu.vue';

  export default {
    name: 'MathUi',
    components: {
      SidebarTools,
      MathUiLayers,
      MainMenu
    },
    props: {
    
    },
    data: function(){
      return {
        popup: {
          name: null
        }
      }
    },
    methods: {
      exportToPng: function () {
        this.$emit('exportToPng', true)
      },
      importExpression: function(evt) {
        this.popup.name = evt;
      },
      closePopup: function() {
        this.popup.name = null;
      }
    }
  }    
</script>

<style lang="scss">
  @import '../../css/main.scss';

  .math-ui {
    font-family: $font-family-sans-serif;
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }
</style>