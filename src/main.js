import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMaterila from 'vue-material'
import { routes } from './routes';
import axios from 'axios';

Vue.use(VueRouter);
Vue.use(VueMaterila);


var router = new VueRouter({
  routes,
  mode:'history'
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
