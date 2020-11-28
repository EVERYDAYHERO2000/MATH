import { createApp } from 'vue';
import App from './App.vue';
import Ripple from './fn/ripple-effect/ripple-effect';
import Browser from 'mobile-device-detect';
import D from '/@fn/dictionary/dictionary.js';

import './css/main.scss';

const application = createApp(App);
application.mixin({
  methods: {
    D: D
  },
});
application.directive('ripple', Ripple);
application.mount('#app');

window.browser = Browser;
