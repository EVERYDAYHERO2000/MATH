<template>
  <label class="switcher">
    <input
      v-on:change="toggleSwitch"
      v-bind:value="check"
      v-bind:checked="check"
      class="switcher__checkbox"
      type="checkbox"
    />
    <div v-ripple="'rgba(255, 255, 255, 0.05)'" class="switcher__slider"></div>
  </label>
</template>

<script>
export default {
  name: 'Switcher',
  props: {
    check: {
      type: Boolean,
    },
  },
  mounted: function(){

  },
  methods: {
    toggleSwitch: function (evt) {
      this.$emit('toggle', evt.target.checked);
    },
  },
};
</script>

<style lang="scss">
@import '../../css/main.scss';

.switcher {
  position: relative;
  display: inline-block;
  width: $grid-8;
  height: $grid-4;
  border-radius: $grid-4;
  -webkit-tap-highlight-color: transparent;

  .app_theme_light & {
    box-shadow: 0 0 0 1px rgba($color-background-invert_theme-light, 0.15);
  }
  .app_theme_dark & {
    box-shadow: 0 0 0 1px rgba($color-black, 0.2);
  }
}

.switcher:focus {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
}

.switcher__checkbox {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
}

.switcher__checkbox:focus {
  outline: none;
}

.switcher__slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border-radius: $grid-4;
  transition: 0.2s;
  overflow: hidden;

  .app_theme_light & {
    background-color: rgba($color-black,0.1);
  }

  .app_theme_dark & {
    background-color: $color-background-tint_theme-dark;
  }
}

.switcher__slider:focus {
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.switcher__slider:before {
  position: absolute;
  content: '';
  height: $grid-3;
  width: $grid-3;
  left: $grid-0;
  bottom: $grid-0;
  border-radius: 50%;
  transition: 0.2s;
  box-shadow: 0 0 0 1px rgba($color-black, 0.05), 0 2px 3px rgba($color-black, 0.1);

  .app_theme_light & {
    background-color: $color-background_theme-light;
  }

  .app_theme_dark & {
    background-color: $color-content-invert_theme-dark;
  }
}

.switcher__checkbox:checked + .switcher__slider {
  .app_theme_light & {
    background-color: $color-primary_theme-light;
  } 
  .app_theme_dark & {
    background-color: $color-primary_theme-dark;
  }  
}

.switcher__checkbox:focus + .switcher__slider {
  
}

.switcher__checkbox:checked + .switcher__slider:before {
  transform: translateX($grid-4);
}
</style>
