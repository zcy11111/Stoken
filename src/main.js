import Vue from 'vue'
import App from './App.vue'
import router from './router'


import Footer from'@/components/Footer.vue'
Vue.component('Footer',Footer)

import silder from'@/components/slider.vue'
Vue.component('slider',silder)





import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
 
import { Toast } from 'vant';
Vue.use(Toast)

// 视频
import VideoPlayer from'vue-video-player'
require('video.js/dist/video-js.css')
 require('vue-video-player/src/custom-theme.css')
 Vue.use(VideoPlayer);







Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')




