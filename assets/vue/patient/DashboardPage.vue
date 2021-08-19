<template>
    <div class="row">
        <div class="col-12 col-md-8">
            <DashboardNotifications
                :patient="patient"
                :csrfTokenAcceptAddRequest="csrfTokenAcceptAddRequest"
                :csrfTokenDeclineAddRequest="csrfTokenDeclineAddRequest"
            />
            <ExerciseStatsCharts :patient="patient" />
        </div>
        <div class="col-12 col-md-4">
            <PatientDetails :patient="patient" />
        </div>
    </div>
</template>

<script>
import ExerciseStatsCharts from "./components/ExerciseStatsCharts.vue";
import DashboardNotifications from "./components/DashboardNotifications.vue";
import PatientDetails from "./components/PatientDetails.vue";

export default {
    name: "DashboardPage",
    components: {
        ExerciseStatsCharts,
        DashboardNotifications,
        PatientDetails,
    },
    data() {
        return {
            patient: null,
            csrfTokenAcceptAddRequest: null,
            csrfTokenDeclineAddRequest: null,
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.csrfTokenAcceptAddRequest = data.csrfTokenAcceptAddRequest;
        this.csrfTokenDeclineAddRequest = data.csrfTokenDeclineAddRequest;
    },
};
</script>

<style lang="scss" scoped>
</style>
