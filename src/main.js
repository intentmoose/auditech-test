import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';

// Decide which server to use by detecting if we are in production or not
process.env.NODE_ENV === 'production'
  ? (axios.defaults.baseURL = 'https://auditeck-backend.herokuapp.com/')
  : (axios.defaults.baseURL = 'http://localhost:3000/');

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
