<template>
  <div class="textarea" v-ripple>
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
  border-radius: $grid-1;  
  box-sizing: border-box;  

  &__input {
    box-sizing: border-box;
    resize: none;
    width: 100%;
    height: 100px;
    padding: $grid-1;
    border-radius: $grid-1;  
    font-family: $font-family-sans-serif;
    font-size: $font-size_m;
    transition: border 0.2s;
    display: block;

    .app_theme_light & {
      background: $color-background-tint_theme_light;
      border: solid 1px rgba($color-content_theme_light, 0.03);
      color: $color-content_theme_light;
    }

    .app_theme_dark & {
      background: $color-background-tint_theme_dark;
      border: solid 1px rgba($color-content_theme_dark, 0.03);
      color: $color-content_theme_dark;
    }

    &:focus {
      outline: none;
      transition: border 0.2s;

      .app_theme_light & {
        border: solid 1px $color-primary_theme_light;
      }
      .app_theme_dark & {
        border: solid 1px $color-primary_theme_dark;
      }
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
}
</style>
