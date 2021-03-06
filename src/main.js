import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.baseURL = 'https://auditeck-backend.herokuapp.com/'

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
