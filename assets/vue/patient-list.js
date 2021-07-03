import Vue from 'vue';
import PatientList from './PatientList.vue'

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax, {
    // options here
})

new Vue({
    render: h => h(PatientList)
}).$mount('#patient-list')
