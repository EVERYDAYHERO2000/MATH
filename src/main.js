import { createApp } from 'vue';
import App from './App.vue';
import Ripple from './fn/ripple-effect/ripple-effect';

import './css/main.scss';

const application = createApp(App); 
window.app = application; 
application.directive('ripple', Ripple);
application.mount('#app');

