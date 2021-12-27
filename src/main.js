import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCML32BG4_TzbIgVCUSRzunsv1cLrEc7m4',
  authDomain: 'auditech-b6ca7.firebaseapp.com',
  projectId: 'auditech-b6ca7',
  storageBucket: 'auditech-b6ca7.appspot.com',
  messagingSenderId: '485993581143',
  appId: '1:485993581143:web:5509dba1bb09fcf3f7b112',
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
