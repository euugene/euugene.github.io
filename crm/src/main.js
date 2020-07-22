import Vue from 'vue'
import Vuelidate from "./../node_modules/vuelidate";
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import dateFilter  from "./filters/date.filter";
import messagePlugin from "./utils/message.plugin"
import './registerServiceWorker'
import './../node_modules/materialize-css/dist/js/materialize.min'

import firebase from "firebase";
import 'firebase/auth'
import 'firebase/database'
Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('dateFilter', dateFilter); // globally filter declaration


firebase.initializeApp(
    {
      apiKey: "AIzaSyCooZc_yqF-X469neJHQzx7ja_fjy5zwv8",
      authDomain: "vue-crm-431b0.firebaseapp.com",
      databaseURL: "https://vue-crm-431b0.firebaseio.com",
      projectId: "vue-crm-431b0",
      storageBucket: "vue-crm-431b0.appspot.com",
      messagingSenderId: "379150080858",
      appId: "1:379150080858:web:32f9f88751fb18acaef163",
      measurementId: "G-Y4X9JQ2TQM"
    }
)
let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

})
