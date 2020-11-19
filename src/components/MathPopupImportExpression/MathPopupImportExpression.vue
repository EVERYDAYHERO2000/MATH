<template>
  <Popup title="Import Math Expression">
    <template v-slot:body>
      <Textarea 
        v-on:change="change"
        v-bind:value="expression" 
        v-bind:autofocus="true"
        placeholder="Math Expression" />  
    </template>

    <template v-slot:footer>
      <Button title="Import" />
    </template>

  </Popup>
</template>

<script>
  import Popup from '../Popup/Popup.vue';
  import Button from '../Button/Button.vue';
  import Textarea from '../Textarea/Textarea.vue';

  export default {
    name: 'MathPopupImportExpression',
    props: {
    },
    data: function(){
      return {
        expression: null
      }
    },
    methods: {
      change: function(evt){
        this.expression = evt;
      },
      submitImport: function(){
        this.$emit('submitImport', this.expression);
        this.quit();
      },
      quit: function(){
        this.$emit('quit', true);
      } 
    },
    components: {
      Popup,
      Button,
      Textarea
    }
  }    
</script>

<style lang="scss">
  @import '../../css/main.scss';
</style>