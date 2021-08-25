import Vue from 'vue';
import DashboardPage from './DashboardPage.vue'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Vuesax (UX lib)
import Vuesax from 'vuesax'

new Vue({
    render: h => h(DashboardPage)
}).$mount('#vue')
