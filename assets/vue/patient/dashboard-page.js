import Vue from 'vue';
import DashboardPage from './DashboardPage.vue'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// Vuesax (UX lib)
import Vuesax from 'vuesax'

// Ellipse Progress Bar
import VueEllipseProgress from 'vue-ellipse-progress';
Vue.use(VueEllipseProgress);

// Vue-Chartist
// + Plugin for tooltips
import * as ChartistTooltips from 'chartist-plugin-tooltips';
Vue.use(require('vue-chartist'), {
    messageNoData: "Aucune donnée",
    classNoData: "empty"
})

new Vue({
    render: h => h(DashboardPage)
}).$mount('#vue')
