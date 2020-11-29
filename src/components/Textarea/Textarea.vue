<template>
  <div class="textarea" v-ripple="'rgba(0, 0, 0, 0.01)'">
    <textarea
      class="textarea__input"
      ref="textarea"
      v-on:input="change"
      v-bind:placeholder="placeholder"
    >
      {{ value }}
    </textarea>
  </div>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    placeholder: String,
    value: String,
    autofocus: Boolean,
  },
  mounted: function () {
    if (this.autofocus) this.$refs.textarea.focus();
  },
  methods: {
    change: function (evt) {
      this.$emit('changeValue', this.$refs.textarea.value);
    },
  },
  emits: ['changeValue'],
};
</script>

<style lang="scss">
@import '../../css/main.scss';

.textarea {
  width: 100%;

  &__input {
    box-sizing: border-box;
    resize: none;
    border-radius: $grid-1;
    width: 100%;
    height: 100px;
    padding: $grid-1;
    font-family: $font-family-sans-serif;
    font-size: 16px;
    transition: border 0.2s;

    .app_theme_light & {
      background: $color-background-tint_theme-light;
      border: solid 1px rgba($color-content_theme-light, 0.03);
    }

    .app_theme_dark & {
      background: $color-background-tint_theme-dark;
      border: solid 1px rgba($color-content_theme-dark, 0.03);
    }

    &:focus {
      outline: none;
      transition: border 0.2s;

      .app_theme_light & {
        border: solid 1px $color-primary_theme-light;
      }
      .app_theme_dark & {
        border: solid 1px $color-primary_theme-dark;
      }
    }
    &::placeholder {
      .app_theme_light & {
        color: rgba($color-content_theme-light, 0.3);
      }
      .app_theme_dark & {
        color: rgba($color-content_theme-dark, 0.3);
      }
    }
  }
}
</style>
