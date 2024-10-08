import Vue from 'vue';
import WorkSheetPage from './WorkSheetPage.vue'

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
Vue.use(Vuesax)

// Youtube player
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

new Vue({
    render: h => h(WorkSheetPage)
}).$mount('#vue')
