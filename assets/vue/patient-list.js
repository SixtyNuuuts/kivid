import Vue from 'vue';
import PatientList from './PatientList.vue'

new Vue({
    render: h => h(PatientList)
}).$mount('#patient-list')
