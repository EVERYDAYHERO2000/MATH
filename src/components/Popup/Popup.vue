<template>
  <div class="popup" v-on:click.self="close" >
    <div class="popup__window">
      <div class="popup__window-header">
        <div class="popup__window-title">{{title}}</div>
        <ButtonIcon 
          icon="close" 
          title="Close" 
          color="black"
          size="s"
          v-on:click="close" />
      </div>
      <div class="popup__window-body">
        <slot name="body" />

      </div>
      <div class="popup__window-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonIcon from '../ButtonIcon/ButtonIcon.vue';

  export default {
    name: 'Popup',
    props: {
      visible: {
        type: Boolean,
        default: true
      },
      backdrop: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: false
      }
    },
    components: {
      ButtonIcon
    },
    methods: {
      close: function() {
        this.$emit('close', true);
      }
    }
  }    
</script>

<style lang="scss">
  @import '../../css/main.scss';

  $padding-vertical: $grid-3;
  $padding-horisontal: $grid-0;

  .popup {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1000;
    pointer-events: all;
    background-color: rgba(0, 0, 0, 0);
    animation: backdrop-show 2s .2s ease forwards;
  }

  .popup__window {
    background-color: $color-white;
    width: 550px;
    box-shadow: 0 0 45px rgba(0,0,0,.12);
    display: flex;
    flex-direction: column;
    pointer-events: all;
    overflow: hidden;
    border-radius: $grid-2;
    opacity: 0;
    animation: popup-show .2s .2s ease-in-out forwards;
  }

  .popup__window-header {
    box-sizing: border-box;
    padding: $grid-2 $grid-2 0 $padding-vertical;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .popup__window-title {
    font-weight: 500;
    user-select: none;
    box-sizing: border-box;
  }

  .popup__window-body {
    box-sizing: border-box;
    padding: $grid-2 $padding-vertical $padding-horisontal $padding-vertical;
  }

  .popup__window-footer {
    box-sizing: border-box;
    padding: $padding-horisontal $padding-vertical $padding-vertical $padding-vertical;
    display: flex;
    justify-content: flex-end;
  }

  @keyframes backdrop-show {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  @keyframes popup-show {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>