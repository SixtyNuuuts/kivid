import Vue from 'vue';
import DashboardPage from './DashboardPage.vue'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Vuesax (UX lib)
import Vuesax from 'vuesax'

Vue.use(Vuesax, {
    colors: {
        primary: '#ffab2c',
        success: '#17c964',
        danger: '#d60f3a',
        warning: '#ffd667',
        dark: '#0c0b13'
    }
})

new Vue({
    render: h => h(DashboardPage)
}).$mount('#vue')
