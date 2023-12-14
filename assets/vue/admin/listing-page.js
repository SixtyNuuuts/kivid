import Vue from 'vue';
import ListingPage from './ListingPage.vue'

// Axios
import axios from 'axios'
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  return config;
});
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Vuesax (UX lib)
import Vuesax from 'vuesax'

new Vue({
    render: h => h(ListingPage)
}).$mount('#vue')
