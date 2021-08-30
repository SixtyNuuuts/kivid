<template>
    <main>
        <DoctorChoice
            v-if="!patient.doctor"
            :patient="patient"
            :csrfTokenSelectDoctor="csrfTokenSelectDoctor"
        />
        <!-- <div class="col-12 col-md-8">
            <DashboardNotifications
                v-if="!doctorView"
                :patient="patient"
                :csrfTokenAcceptAddRequest="csrfTokenAcceptAddRequest"
                :csrfTokenDeclineAddRequest="csrfTokenDeclineAddRequest"
            />
            <ExerciseStatsCharts :patient="patient" />
        </div>
        <div class="col-12 col-md-4">
            <PatientDetails :patient="patient" />
        </div> -->
    </main>
</template>

<script>
import DoctorChoice from "./components/DoctorChoice.vue";
// import ExerciseStatsCharts from "./components/ExerciseStatsCharts.vue";
// import DashboardNotifications from "./components/DashboardNotifications.vue";
// import PatientDetails from "./components/PatientDetails.vue";

export default {
    components: {
        DoctorChoice,
        // ExerciseStatsCharts,
        // DashboardNotifications,
        // PatientDetails,
    },
    data() {
        return {
            patient: null,
            doctorView: null,
            csrfTokenAcceptAddRequest: null,
            csrfTokenDeclineAddRequest: null,
            csrfTokenSelectDoctor: null,
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.doctorView = data.doctorView;
        this.csrfTokenAcceptAddRequest = data.csrfTokenAcceptAddRequest;
        this.csrfTokenDeclineAddRequest = data.csrfTokenDeclineAddRequest;
        this.csrfTokenSelectDoctor = data.csrfTokenSelectDoctor;
    },
};
</script>

<style lang="scss" scoped>
#dashboard {
    min-height: 100%;
}
</style>
