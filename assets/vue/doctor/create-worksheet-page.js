import Vue from 'vue';
import CreateWorkSheetPage from './CreateWorkSheetPage.vue'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Vuesax (UX lib)
import Vuesax from 'vuesax'
import './vuesax/custom_variables.css'
import 'vuesax/dist/vuesax.css'

// Vuetify (UX lib)
import vuetify from '../plugins/vuetify.js' // path to vuetify export

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
    vuetify,
    render: h => h(CreateWorkSheetPage)
}).$mount('#vue')
