import Vue from 'vue';
import DashboardPage from './DashboardPage.vue'

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

// EventBus
Vue.prototype.$bus = new Vue();

new Vue({
    render: h => h(DashboardPage)
}).$mount('#vue')
