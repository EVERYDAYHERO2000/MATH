<template>
  <div class="entity-parentheses" v-bind:class="{ 'entity-parentheses_inline': !isFractionInside }">
    <template v-if="isFractionInside">
      <span class="entity-parentheses__base">&zwj;</span>
      <div class="entity-parentheses__left">
        <div class="entity-parentheses__left-top">
          <ParenthesesLeftTop preserveAspectRatio="none" viewBox="0 0 8 16" />
        </div>
        <div class="entity-parentheses__left-center">
          <ParenthesesLeftCenter preserveAspectRatio="none" viewBox="0 0 8 3" />
          <EntityString class="entity-invisible" value="(" />
        </div>
        <div class="entity-parentheses__left-bottom">
          <ParenthesesLeftBottom preserveAspectRatio="none" viewBox="0 0 8 16" />
        </div>
      </div>

      <MathEnities class="entity-parentheses__center" v-bind:into="into.expression" />

      <div class="entity-parentheses__right">
        <div class="entity-parentheses__right-top">
          <ParenthesesRightTop preserveAspectRatio="none" viewBox="0 0 8 16" />
        </div>
        <div class="entity-parentheses__right-center">
          <ParenthesesRightCenter preserveAspectRatio="none" viewBox="0 0 8 3" />
          <EntityString class="entity-invisible" value=")" />
        </div>
        <div class="entity-parentheses__right-bottom">
          <ParenthesesRightBottom preserveAspectRatio="none" viewBox="0 0 8 16" />
        </div>
      </div>
    </template>

    <template v-else>
      <EntityString value="(" />
      <MathEnities class="entity-parentheses__center" v-bind:into="into.expression" />
      <EntityString value=")" />
    </template>
  </div>
</template>

<script>
import { defineAsyncComponent, resolveComponent } from 'vue';

import { VueComponent as ParenthesesLeftTop } from './assets/parentheses_left_top.svg';
import { VueComponent as ParenthesesLeftCenter } from './assets/parentheses_left_center.svg';
import { VueComponent as ParenthesesLeftBottom } from './assets/parentheses_left_bottom.svg';
import { VueComponent as ParenthesesRightTop } from './assets/parentheses_right_top.svg';
import { VueComponent as ParenthesesRightCenter } from './assets/parentheses_right_center.svg';
import { VueComponent as ParenthesesRightBottom } from './assets/parentheses_right_bottom.svg';

export default {
  name: 'EntityParentheses',
  props: {
    into: Object,
  },
  created: function () {},
  computed: {
    isFractionInside: function () {
      function testExpression(expression) {
        let level = 0;

        if (expression.type == 'fraction') {
          level++;
        }

        return level;
      }

      return testExpression(this.into.expression);
    },
  },
  components: {
    MathEnities: defineAsyncComponent(() => import('../../MathEntities/MathEntities.vue')),
    EntityString: defineAsyncComponent(() => import('../String/String.vue')),
    ParenthesesLeftTop,
    ParenthesesLeftCenter,
    ParenthesesLeftBottom,
    ParenthesesRightTop,
    ParenthesesRightCenter,
    ParenthesesRightBottom,
  },
};
</script>

<style lang="scss">
@import '../../../css/main.scss';
@import '../MathEntities.scss';

.entity-parentheses {
  display: inline-flex;
  align-items: baseline;
}

.entity-parentheses__base {
  user-select: none;
}

.entity-parentheses svg {
  height: 100%;
  display: block;
  position: absolute;

  path {
    .app_theme_light & {
      fill: $color-content_theme-light;
    }

    .app_theme_dark & {
      fill: $color-content_theme-dark;
    }
  }
}

.entity-parentheses_inline {
  align-items: center;
}

.entity-parentheses__left,
.entity-parentheses__right {
  display: flex;
  flex-direction: column;
  align-self: stretch;
}

.entity-parentheses__right {
  transform: translateX(-$grid-1);
}

.entity-parentheses__left-center,
.entity-parentheses__right-center {
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.entity-parentheses__left-top,
.entity-parentheses__left-bottom,
.entity-parentheses__right-top,
.entity-parentheses__right-bottom {
  height: $grid-3;
  position: relative;
}

.entity-parentheses__center {
  margin: 0 $grid-1;
}

.entity-parentheses_inline {
  .entity-parentheses__center {
    margin: 0;
  }
}
</style>
