<template>
  <button 
    class="button" 
    v-bind:class="{'button_disabled' : disabled}"
    v-ripple="'rgba(255, 255, 255, 0.05)'"
    v-bind:title="title">{{title}}</button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      title: String,
      disabled: Boolean
    }
  }    
</script>

<style lang="scss">
  @import '../../css/main.scss';

  .button {
    padding: $grid-1 $grid-2;
    border-radius: $grid-1;
    background: $color-primary;
    border: none;
    color: $color-white;
    font-size: 16px;
    transition: all .2s;
    box-shadow: inset 0 0 0 1px rgba($color-black, 0.1);

    &:focus {
      outline: none;
    }
    &:hover {
      background: lighten($color-primary,5%);
      transition: background .2s;
    }
  }

  .button_disabled {
    pointer-events: none;
    opacity: .3;
    filter:grayscale(1);
    transition: all .2s;
  }

</style>