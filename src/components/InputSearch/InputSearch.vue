<template>
  <div class="input-search" v-ripple>
    <input
      class="input-search__input"
      type="text"
      v-model="searchValue"
      v-on:input="update"
      v-bind:placeholder="D('Element name')"
    />
    <ButtonIcon
      class="input-search__clear-button"
      v-if="searchValue"
      v-on:click="clear"
      title="Clear"
      icon="close"
    />
  </div>
</template>

<script>
import ButtonIcon from '/@components/ButtonIcon/ButtonIcon.vue';

export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data: function () {
    return {
      searchValue: this.value,
    };
  },
  methods: {
    clear: function () {
      this.searchValue = '';
      this.update();
    },
    update: function () {
      this.$emit('updateSearch', this.searchValue);
    },
  },
  components: {
    ButtonIcon,
  },
  emits: ['updateSearch'],
};
</script>

<style lang="scss">

.input-search {
  display: flex;
  position: relative;
  border-radius: $grid-1;
  overflow: hidden;

  &__input {
    border: none;
    font-size: $font-size_m;
    display: block;
    width: 100%;
    padding-right: 40px;
    padding-left: $grid-1;
    box-sizing: border-box;
    font-family: $font-family-sans-serif;

    .app_theme_light & {
      background-color: rgba($color-background_theme_light, 1);
      color: rgba($color-content_theme_light, 1);
    }

    .app_theme_dark & {
      background-color: rgba($color-background-tint_theme_dark, 1);
      color: rgba($color-content_theme_dark, 1);
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      .app_theme_light & {
        color: rgba($color-content_theme_light, 0.3);
      }

      .app_theme_dark & {
        color: rgba($color-content_theme_dark, 0.3);
      }
    }
  }

  &__clear-button {
    position: absolute;
    right: 0;
  }

}
</style>
