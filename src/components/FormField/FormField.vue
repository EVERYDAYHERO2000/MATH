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
  padding: $grid-1 0;
  user-select: none;

  .app_theme_light & {
    color: $color-content_theme-light;
  }
  .app_theme_dark & {
    color: $color-content_theme-dark;
  }  
}

.form-field__label, .form-field__control {
  flex-basis: 50%;
}

.form-field__label {
  display: flex;
  justify-content: flex-start;
}

.form-field__control {
  display: flex;
  justify-content: flex-end;
}
</style>
