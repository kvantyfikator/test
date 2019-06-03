import Vue from 'vue'
import App from './App.vue'
import { router } from './routes.js'
import VueResource from 'vue-resource';
import checkbox from 'vue-material-checkbox'

Vue.use(VueResource);
Vue.use(checkbox);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
