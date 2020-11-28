<template>
  <Popup ref="popup" v-bind:title="D('Import Math Expression')">

    <template v-slot:body>
      <Textarea 
        v-on:changeValue="checkExpression"
        v-bind:autofocus="true"
        v-bind:placeholder="D('Math Expression')" />  
    </template>

    <template v-slot:footer>
      <Button 
        v-on:click="submitImport" 
        v-bind:label="D('Import')" 
        v-bind:disabled="!validExpression" />
    </template>

  </Popup>
</template>

<script>
  import Popup from '/@components/Popup/Popup.vue';
  import Button from '/@components/Button/Button.vue';
  import Textarea from '/@components/Textarea/Textarea.vue';

  import mathParser from '/@fn/mathParser/mathParser.js'

  export default {
    name: 'PopupImportExpression',
    props: {
    },
    data: function(){
      return {
        expression: null,
        validExpression: false
      }
    },
    methods: {
      checkExpression: function(evt){
        this.expression = evt.trim();
        if (this.expression && this.expression.length) {
          this.validExpression = true;
        } else {
          this.validExpression = false;
        }
      },
      submitImport: function(){
        const testParser = mathParser(this.expression, {latex:true});
        console.log(testParser)
        //this.$refs.popup.close();

        this.$emit('submitImport', this.expression);
        //this.quit();
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
  @import '../../../../css/main.scss';
</style>