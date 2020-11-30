<template>
  <div class="entity-radical">
    <span class="entity-radical__base">&zwj;</span>
    <div class="entity-radical__left">
      <MathEntity v-bind:into="into.index" />
      <div class="entity-radical__hr" />
    </div>
    <div class="entity-radical__center">
      <Line vector-effect="non-scaling-stroke" preserveAspectRatio="none" viewBox="0 0 5 5" />
      <EntityString class="entity-invisible" value="√" />
    </div>
    <div class="entity-radical__right">
      <Line vector-effect="non-scaling-stroke" preserveAspectRatio="none" viewBox="0 0 5 5" />
    </div>
    <div class="entity-radical__expression">
      <div class="entity-radical__hr" />
      <MathEntity v-bind:into="into.expression" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, resolveComponent } from 'vue';

import { VueComponent as Line } from './assets/line.svg';

export default {
  name: 'EntityRadical',
  props: {
    into: Object,
  },
  components: {
    MathEntity: defineAsyncComponent(() => import('../../MathEntity/MathEntity.vue')),
    EntityString: defineAsyncComponent(() => import('../String/String.vue')),
    Line,
  },
};
</script>

<style lang="scss">
@import '../../../css/main.scss';
@import '../MathEntity.scss';

$height-hr: 3px;

.entity-radical {
  display: flex;
  padding-top: $grid-1;
  padding-bottom: $grid-1;
}

.entity-radical__base {
  align-self: center;
  user-select: none;
}

.entity-radical__left,
.entity-radical__center,
.entity-radical__right {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;

  & > svg {
    vector-effect: non-scaling-stroke;

    path {
      vector-effect: non-scaling-stroke;

      .app_theme_light & {
        stroke: $color-entity_theme_light;
      }

      .app_theme_dark & {
        stroke: $color-entity_theme_dark;
      }

      .theme_export & {
        stroke: $color-entity_theme_light!important;
      }
    }
  }
}

.entity-radical__hr {
  height: $height-hr;
  width: 100%;
}

.entity-radical__left {
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  align-items: flex-end;
  box-sizing: border-box;
  padding-bottom: calc(#{$grid-3} - #{$height-hr});
  margin-left: -$grid-0;

  .entity-radical__hr {
    margin-top: -$height-hr;
    transform-origin: right top;
    transform: rotate(-10deg);
    width: $grid-1;

    .app_theme_light & {
      background-color: $color-entity_theme_light;
    }

    .app_theme_dark & {
      background-color: $color-entity_theme_dark;
    }

    .theme_export & {
      background-color: $color-entity_theme_light!important;
    }
  }

  & > .math-entities {
    margin: 0px -6px 3px 12px;
  }
}

.entity-radical__center {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: $grid-1;

  svg {
    height: $grid-3;
    width: $grid-1;
    min-height: $grid-3;
    min-width: $grid-1;

    path {
      stroke-width: $height-hr;
    }
  }

  .entity-invisible {
    font-size: 16px;
  }
}

.entity-radical__right {
  margin-top: -$height-hr;
  width: $grid-2;

  svg {
    height: 100%;
    width: $grid-2;
    min-width: $grid-2;
    transform: scaleX(-1);

    path {
      stroke-width: 2px;
    }
  }
}

.entity-radical__expression {
  & > .math-entities {
    margin: $grid-0 $grid-1 $grid-0 0;
  }

  .entity-radical__hr {
    margin-top: -$height-hr;

    .app_theme_light & {
      background-color: $color-entity_theme_light;
    }

    .app_theme_dark & {
      background-color: $color-entity_theme_dark;
    }

    .theme_export & {
      background-color: $color-entity_theme_light!important;
    }  
  }
}
</style>
