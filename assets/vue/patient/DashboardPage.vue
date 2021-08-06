<template>
    <div>
        <SensitivityChart :patient="patient" />

        <!-- <AreaChart />
        <PieChart />
        <BarChart />
        <RadarChart />
        <LineChart /> -->
    </div>
</template>

<script>
import SensitivityChart from "./components/charts/SensitivityChart.vue";

// import AreaChart from "./components/charts/AreaChart.vue";
// import PieChart from "./components/charts/PieChart.vue";
// import BarChart from "./components/charts/BarChart.vue";
// import RadarChart from "./components/charts/RadarChart.vue";
// import LineChart from "./components/charts/LineChart.vue";
import f from "../services/function";

export default {
    name: "DashboardPage",
    components: {
        SensitivityChart,
    },
    data() {
        return {
            patient: null,
            patientExerciseStats: [],
            loadingPatientExerciseStats: null,
            // csrfTokenStartWorksheetSession: null,
            // chartData: {
            //     Books: 24,
            //     Magazine: 30,
            //     Newspapers: 10,
            // },
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;

        // this.csrfTokenStartWorksheetSession =
        //     data.csrfTokenStartWorksheetSession;
    },
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
