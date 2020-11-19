<template>
  <button 
    class="button" 
    v-ripple="'rgba(0, 0, 0, 0.05)'"
    v-bind:title="title">{{title}}</button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      title: String
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

    &:focus {
      outline: none;
    }
  }

</style>