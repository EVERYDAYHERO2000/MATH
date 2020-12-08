<template>
  <div class="entity-inline entity-string">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'EntityString',
  props: {
    value: String,
  },
};
</script>

<style lang="scss">
@import '../MathEntity.scss';

.entity-string {
  display: inline-block;
  box-sizing: border-box;
  letter-spacing: 1px;
}
</style>
