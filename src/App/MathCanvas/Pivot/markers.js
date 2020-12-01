const renderMarkers = function () {
  let markerTop = this.$refs.marker_top,
    markerBottom = this.$refs.marker_bottom,
    markerLeft = this.$refs.marker_left,
    markerRight = this.$refs.marker_right,
    frameRect = this.$refs.frame.getBoundingClientRect(),
    windowHeight = window.innerHeight,
    windowWidth = window.innerWidth,
    markerWidth = 3,
    padding = 80;

  markerTop.style.cssText = markerHorizontal('top');
  markerBottom.style.cssText = markerHorizontal('bottom');

  markerLeft.style.cssText = markerVertical('left');
  markerRight.style.cssText = markerVertical('right');

  function markerHorizontal(direction) {
    let style = {};

    if (direction == 'top' ? frameRect.top < 0 : frameRect.bottom > windowHeight) {
      if (frameRect.left + frameRect.width > 0) {
        style.width = frameRect.width ? px(frameRect.width) : px(padding);
        style.left = px(frameRect.left);
        style.right = 'auto';
      } else {
        style.width = px(markerWidth * 2);
        style.left = px(0);
        style.right = 'auto';
      }

      if (frameRect.left > windowWidth) {
        style.width = px(markerWidth * 2);
        style.left = 'auto';
        style.right = px(0);
      }
    } else {
      style.width = px(0);
      style.left = px(0);
    }

    return objectToCSS(style);
  }

  function markerVertical(direction) {
    let style = {};

    if (direction == 'right' ? frameRect.right > windowWidth : frameRect.left < 0) {
      if (frameRect.top + frameRect.height > 0) {
        style.height = frameRect.height > padding ? px(frameRect.height) : px(padding);
        style.top = px(frameRect.top);
        style.bottom = 'auto';
      } else {
        style.height = px(markerWidth * 2);
        style.top = 0;
        style.bottom = 'auto';
      }

      if (frameRect.top > windowHeight) {
        style.height = px(markerWidth * 2);
        style.top = 'auto';
        style.bottom = px(0);
      }
    } else {
      style.height = px(0);
      style.top = px(0);
    }

    return objectToCSS(style);
  }

  function objectToCSS(obj) {
    let result = '';
    for (let k in obj) {
      result += `${k}:${obj[k]};`;
    }
    return result;
  }

  function px(num) {
    return num + 'px';
  }
};

export default renderMarkers;
