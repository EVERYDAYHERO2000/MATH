<template>
  <div class="form-field">
    <div class="form-field__label">{{ label }}</div>
    <div class="form-field__control">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormField',
  props: {
    label: String,
  },
};
</script>

<style lang="scss">
@import '../../css/main.scss';

.form-field {
  display: flex;
  align-items: center;
  padding: calc(#{$grid-1} + #{$grid-0}) 0;
  user-select: none;

  .app_theme_light & {
    border-bottom: solid 1px rgba($color-content_theme-light, 0.08);
  }
  .app_theme_dark & {
    border-bottom: solid 1px rgba($color-black, 0.5);
  }

  &:last-child {
    .app_theme_light & {
      border-bottom: none;
    }
    .app_theme_dark & {
      border-bottom: none;
    }
  }

  &__label,
  &__control {
    flex-basis: 50%;
  }

  &__label {
    display: flex;
    justify-content: flex-start;

    .app_theme_light & {
      color: rgba($color-content_theme-light, 0.65);
    }
    .app_theme_dark & {
      color: rgba($color-content_theme-dark, 0.65);
    }
  }

  &__control {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
