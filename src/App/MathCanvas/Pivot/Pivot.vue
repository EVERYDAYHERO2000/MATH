<template>
  <div
    v-on:wheel="onWheel"
    v-on:gesturestart="onGesturestart"
    v-on:gesturechange="onGesturechange"
    v-on:gestureend="onGestureend"
    class="math-canvas__pivot"
  >
    <div ref="frame" class="math-canvas__frame">
      <slot> </slot>
    </div>
    <div ref="marker_top" class="math-canvas__marker math-canvas__marker_top" />
    <div ref="marker_bottom" class="math-canvas__marker math-canvas__marker_bottom" />
    <div ref="marker_left" class="math-canvas__marker math-canvas__marker_left" />
    <div ref="marker_right" class="math-canvas__marker math-canvas__marker_right" />
  </div>
</template>

<script>
import renderMarkers from './markers.js';

export default {
  name: 'MathCanvasPivot',
  props: {},
  data: function () {
    return {
      rotation: 0,
      gestureStartRotation: 0,
      gestureStartScale: 0,
      scale: 1,
      posX: 0,
      posY: 0,
      startX: null,
      startY: null,
    };
  },
  mounted: function () {
    this.renderMarkers();
  },
  methods: {
    render: function () {
      window.requestAnimationFrame(() => {
        let val = `translate3D(${this.posX}px, ${this.posY}px, 0px) rotate(${
          this.rotation
        }deg) scale(${this.scale > 0 ? this.scale : 0})`;
        this.$refs.frame.style.transform = val;

        this.renderMarkers();
      });
    },
    onWheel: function (event) {
      event.preventDefault();

      if (event.ctrlKey) {
        this.scale -= event.deltaY * 0.01;
      } else {
        this.posX -= event.deltaX * 2;
        this.posY -= event.deltaY * 2;
      }
      this.render();
    },
    onGesturestart: function (event) {
      event.preventDefault();
      this.startX = event.pageX - this.posX;
      this.startY = event.pageY - this.posY;
      this.gestureStartRotation = this.rotation;
      this.gestureStartScale = this.scale;
    },
    onGesturechange: function (event) {
      event.preventDefault();

      this.rotation = this.gestureStartRotation + event.rotation;
      this.scale = this.gestureStartScale * event.scale;

      this.posX = event.pageX - this.startX;
      this.posY = event.pageY - this.startY;

      this.render();
    },
    onGestureend: function (event) {
      event.preventDefault();
    },
    renderMarkers: renderMarkers,
  },
};
</script>

<style lang="scss">
@import '../../../css/main.scss';

$width-marker: 3px;

.math-canvas {
  &__pivot {
    width: 10000px;
    height: 10000px;
    box-sizing: border-box;
    padding: 200px;
  }
  &__frame {
    transform-origin: center;
    position: absolute;
    padding: $grid-3;
    box-sizing: border-box;
  }

  &__marker {
    position: fixed;
    display: block;
    pointer-events: none;
    touch-action: none;
    z-index: 10000;

    .app_theme_light & {
      background-color: rgba($color-primary_theme_light, 1);
    }

    .app_theme_dark & {
      background-color: rgba($color-primary_theme_dark, 1);
    }

    &_top {
      height: $width-marker;
      top: 0;
    }
    &_bottom {
      height: $width-marker;
      bottom: 0;
    }
    &_left {
      width: $width-marker;
      left: 0;
    }
    &_right {
      width: $width-marker;
      right: 0;
    }
  }
}
</style>
