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
            // csrfTokenStartWorksheetSession: null,
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;

        // this.csrfTokenStartWorksheetSession =
        // data.csrfTokenStartWorksheetSession;
    },
};
</script>

<style lang="scss" scoped>
</style>
