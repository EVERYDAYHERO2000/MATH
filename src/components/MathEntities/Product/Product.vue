<template>
  <div class="entity-product">
    <template v-for="(item, index) in into.factors">
      <EntityProductFactor
        v-on:calc="calc($event, true)"
        v-bind:firstChild="(index == 0)"
        v-bind:into="item"
      />
    </template>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'EntityProduct',
  props: {
    into: Object,
  },
  data: function () {
    return {
      out: this.into,
    };
  },
  created: function () {},
  methods: {
    calc: function (event, emit) {
      let expression = '';

      if (emit) this.$emit('calc', this.out);
      return this.out;
    },
  },
  components: {
    EntityProductFactor: defineAsyncComponent(() => import('../ProductFactor/ProductFactor.vue')),
  },
};
</script>

<style lang="scss">
@import '../../../css/main.scss';
@import '../MathEntities.scss';

.entity-product {
  display: inline-flex;
  align-items: baseline;
  white-space: nowrap;

  & .entity-product-factor:first-child {
    .entity-addition {
      display: none;
    }
  }
}
</style>
