import Vue from 'vue';
import WorkSheetPage from './WorkSheetPage.vue'

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

// Feather icons
import VueFeatherIcon from 'vue-feather-icon'
Vue.use(VueFeatherIcon)

new Vue({
    render: h => h(WorkSheetPage)
}).$mount('#vue')
