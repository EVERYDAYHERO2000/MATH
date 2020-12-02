<template>
  <div class="select" :tabindex="tabindex" v-on:blur="open = false" v-bind:class="classSize">
    <div
      class="select__selected"
      v-ripple
      :class="{ select__selected_open: open }"
      v-on:click="open = !open"
    >
      {{ selected[1] }}
    </div>
    <div
      class="select__backdrop"
      v-on:click.self="open = !open"
      v-bind:class="[
        open ? 'select__backdrop_visibility_visible' : 'select__backdrop_visibility_hidden',
      ]"
    >
      <div class="select__dropdown">
        <div
          class="select__item"
          v-ripple
          v-for="(option, i) of options"
          :key="i"
          v-on:click="select(option)"
        >
          <span>{{ option[1] }}</span>
          <Icon v-if="option[0] == selected[0]" color="primary" name="check" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '/@components/icon/icon.vue';
import { size } from '/@fn/propsType/propsType.js';

export default {
  name: 'Select',
  props: {
    size: size('m'),
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  components: {
    Icon
  },
  data() {
    return {
      selected: [null, null],
      open: false,
    };
  },
  methods: {
    select: function (option) {
      this.selected = option;
      this.open = false;
      this.$emit('input', option);
    },
  },
  computed: {
    classSize: function () {
      return `select_size_${this.size}`;
    },
  },
  mounted() {
    for (let l in this.options) {
      if (this.options[l][0] == this.default) {
        this.selected = this.options[l];
      }
    }
    this.$emit('input', this.selected);
  },
  emits: ['input'],
};
</script>

<style lang="scss">
@import '../../css/main.scss';

.select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  font-size: $font-size_m;
  -webkit-tap-highlight-color: transparent;

  &_size_s &__selected {
    padding: 0;
  }
  &_size_m &__selected {
    padding: $grid-1 $grid-2;
    height: $grid-5;
  }
  &_size_l &__selected {
    padding: $grid-2 $grid-3;
    height: $grid-7;
  }

  &__selected {
    border-radius: $grid-1;
    padding-left: $grid-1;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;

    .app_theme_light & {
      box-shadow: inset 0 0 0 1px rgba($color-content_theme_light, 0.1);
      background: rgba($color-background-tint_theme_light, 1);
      color: rgba($color-content_theme_light, 1);
    }

    .app_theme_dark & {
      box-shadow: inset 0 0 0 1px rgba($color-content_theme_dark, 0.03);
      background: rgba($color-background-tint_theme_dark, 1);
      color: rgba($color-content_theme_dark, 1);
    }

    &_open {
      .app_theme_light & {
        background: rgba($color-background-invert_theme_light, 0.05);
      }

      .app_theme_dark & {
        background: rgba($color-background-invert_theme_dark, 0.05);
      }
    }

    &:after {
      display: block;
      content: '';
      transform: translate(0px, 3px);
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-color: #fff transparent transparent transparent;

      .app_theme_light & {
        border-color: rgba($color-content_theme_light, 1) transparent transparent transparent;
      }

      .app_theme_dark & {
        border-color: rgba($color-content_theme_dark, 1) transparent transparent transparent;
      }
    }
  }
  &__backdrop {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100%;

    @include media('<=phone') {
      position: fixed;
      height: 100vh;
      height: calc(var(--vh, 1vh) * 100);
      display: flex;
      z-index: 10000;
      justify-content: center;
      align-items: center;
      bottom: 0;
      box-sizing: border-box;
    }

    .app_theme_light & {
      @include media('<=phone') {
        background-color: rgba($color-black, 0.1);
      }
    }

    .app_theme_dark & {
      @include media('<=phone') {
        background-color: rgba($color-black, 0.6);
      }
    }

    &_visibility {
      &_visible {
        animation: dropdown-show_desktop 0.1s ease-in-out forwards;

      }

      &_hidden {
        display: none;
      }
    }
  }

  &__dropdown {
    border-radius: $grid-1;
    overflow: hidden;
    position: absolute;
    padding: $grid-1 0;
    transform: translateY($grid-1);
    width: 100%;

    @include media('<=phone') {
      width: calc(100% - #{$grid-2} * 2);
      padding: $grid-2 0;
    }

    .app_theme_light & {
      background: rgba($color-background_theme_light, 1);
      box-shadow: 0 3px 10px rgba($color-black, 0.3), 0 2px 20px rgba($color-black, 0.2);
      color: rgba($color-content_theme_light, 1);
    }

    .app_theme_dark & {
      background: rgba($color-background_theme_dark, 1);
      box-shadow: 0 3px 10px rgba($color-black, 0.8), 0 2px 20px rgba($color-black, 0.2),
        0 0 0 1px rgba($color-black, 0.5);
      color: rgba($color-content_theme_dark, 1);
    }

    &:before {
      content: '';
      height: $grid-1;
      display: block;
      position: absolute;
      transform: translateY(-$grid-1);
    }
  }

  &__item {
    user-select: none;
    padding: $grid-1 $grid-2;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include media('<=phone') {
      padding: $grid-2;
    }

    &:hover {
      .app_theme_light & {
        background: rgba($color-background-invert_theme_light, 0.03);
      }

      .app_theme_dark & {
        background: rgba($color-background-invert_theme_dark, 0.03);
      }
    }
  }
}

@keyframes dropdown-show_desktop {
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
