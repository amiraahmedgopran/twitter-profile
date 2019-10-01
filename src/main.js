import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontawesome-4.7/css/font-awesome.min.css';
import '@/assets/main.scss';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Tweets from './components/Tweets.vue';
import TweetsReplies from './components/TweetsReplies.vue';
import Media from './components/Media.vue';
import Links from './components/Links.vue';


const router = new VueRouter({
  routes: [
    { path: '/', component: Tweets },
    { path: '/TweetsReplies', component: TweetsReplies },
    { path: '/media', component: Media },
    { path: '/links', component: Links }
  ]
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

