<template>
    <div>
        <ExerciseStatsCharts :patient="patient" />
    </div>
</template>

<script>
import ExerciseStatsCharts from "./components/ExerciseStatsCharts.vue";

export default {
    name: "DashboardPage",
    components: {
        ExerciseStatsCharts,
    },
    data() {
        return {
            patient: null,
            // csrfTokenInitWorksheetSessions: null,
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;

        // this.csrfTokenInitWorksheetSessions =
        // data.csrfTokenInitWorksheetSessions;
    },
};
</script>

<style lang="scss" scoped>
</style>
