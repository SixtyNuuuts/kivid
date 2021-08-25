import Vue from 'vue';
import MyWorkSheetsPage from './MyWorkSheetsPage.vue'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Vuesax (UX lib)
import Vuesax from 'vuesax'
Vue.use(Vuesax)

// Youtube player
import VueYoutube from 'vue-youtube'
Vue.use(VueYoutube)

new Vue({
    render: h => h(MyWorkSheetsPage)
}).$mount('#vue')
