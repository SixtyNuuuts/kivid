import Vue from 'vue';
import CreatePass from './CreatePass.vue'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Vuesax(UX lib)
import Vuesax from 'vuesax'
Vue.use(Vuesax)

new Vue({
    render: h => h(CreatePass)
}).$mount('#vue')
