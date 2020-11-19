<template>
  <div 
    class="textarea" 
    v-ripple="'rgba(0, 0, 0, 0.01)'">
    <textarea 
      ref="textarea"
      v-on:input="change"
      v-bind:placeholder="placeholder">{{value}}</textarea>
  </div>
</template>

<script>
  export default {
    name: 'Textarea',
    props: {
      placeholder: String,
      value: String,
      autofocus: Boolean
    },
    mounted: function(){
      if (this.autofocus) this.$refs.textarea.focus();
    },
    methods: {
      change: function(evt){
        this.$emit('changeValue', this.$refs.textarea.value);
      }
    }
  }    
</script>

<style lang="scss">
  @import '../../css/main.scss';    

  .textarea {
    width: 100%;

    textarea {
      box-sizing: border-box;
      resize: none;
      border-radius: $grid-1;
      width: 100%;
      height: 100px;
      background: $color-light;
      border: solid 1px rgba(0,0,0,0.03);
      padding: $grid-1;
      font-family: $font-family-sans-serif;
      font-size: 16px;
      transition: border .2s;

      &:focus {
        outline: none;
        border: solid 1px $color-primary;
        transition: border .2s;
      }
      &::placeholder {
        color: rgba(0, 0, 0, 0.3);
      }
    }
  }

</style>