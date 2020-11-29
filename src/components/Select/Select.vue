<template>
  <div class="select" :tabindex="tabindex" v-on:blur="open = false" v-bind:class="classSize">
    <div
      class="select__selected"
      :class="{ select__selected_open: open }"
      v-on:click="open = !open"
    >
      {{ selected[1] }}
    </div>
    <div class="select__items" :class="{ select__items_hide: !open }">
      <div class="select__item" v-for="(option, i) of options" :key="i" v-on:click="select(option)">
        {{ option[1] }}
      </div>
    </div>
  </div>
</template>

<script>
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
  font-size: 16px;

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
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    .app_theme_light & {
      box-shadow: inset 0 0 0 1px rgba($color-background-invert_theme-light, 0.1);
      background: rgba($color-background-tint_theme-light, 1);
      color: rgba($color-content_theme-light, 1);
    }

    .app_theme_dark & {
      box-shadow: inset 0 0 0 1px rgba($color-background-invert_theme-dark, 0.1);
      background: rgba($color-background-tint_theme-dark, 1);
      color: rgba($color-content_theme-dark, 1);
    }

    &_open {
      .app_theme_light & {
        background: rgba($color-background-invert_theme-light, 0.05);
      }

      .app_theme_dark & {
        background: rgba($color-background-invert_theme-dark, 0.05);
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
        border-color: rgba($color-content_theme-light, 1) transparent transparent transparent;
      }

      .app_theme_dark & {
        border-color: rgba($color-content_theme-dark, 1) transparent transparent transparent;
      }
    }
  }

  &__items {
    border-radius: $grid-1;
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;
    padding: $grid-1 0;
    box-shadow: 0 3px 10px rgba($color-black, 0.3);
    transform: translateY($grid-1);

    .app_theme_light & {
      background: rgba($color-background_theme-light, 1);
      color: rgba($color-content_theme-light, 1);
    }

    .app_theme_dark & {
      background: rgba($color-background-tint_theme-dark, 1);
      color: rgba($color-content_theme-dark, 1);
    }

    &:before {
      content: '';
      height: $grid-1;
      display: block;
      position: absolute;
      transform: translateY(-$grid-1);
    }

    &_hide {
      display: none;
    }
  }

  &__item {
    padding-left: 1em;
    cursor: pointer;
    user-select: none;

    .select_size_s & {
      padding: 0;
    }
    .select_size_m & {
      padding: $grid-1 $grid-2;
    }
    .select_size_l & {
      padding: $grid-2 $grid-2;
    }

    &:hover {
      .app_theme_light & {
        background: rgba($color-primary_theme-light, 1);
      }

      .app_theme_dark & {
        background: rgba($color-primary_theme-dark, 1);
      }
    }
  }
}
</style>
