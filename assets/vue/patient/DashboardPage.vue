<template>
    <div>
        <div v-if="dashboardNotifications.length" class="dashboard-notif">
            <vs-alert v-for="(notif, i) in dashboardNotifications" :key="i">
                <template #icon>
                    <i class="fe fe-info"></i>
                </template>
                <span v-for="(e, i) in notif.content" :key="i">
                    <span v-if="'user' === e.type">
                        <strong>{{ e.content }}</strong>
                    </span>
                    <span v-if="'text' === e.type">
                        {{ e.content }}
                    </span>
                    <a v-if="'link' === e.type" :href="e.content.url">
                        {{ e.content.text }}
                    </a>
                </span>
            </vs-alert>
        </div>
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
            dashboardNotifications: null,
            // csrfTokenInitWorksheetSessions: null,
        };
    },
    methods: {
        getDashboardNotifications() {
            this.axios
                .get(`/${this.patient.id}/get/patient-dashboard-notifications`)
                .then((response) => {
                    this.dashboardNotifications = response.data;
                })
                .catch((error) => {
                    if (error.response) {
                        console.log(error.response.data.detail);
                    }
                });
        },
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;

        this.getDashboardNotifications();
        // this.csrfTokenInitWorksheetSessions =
        // data.csrfTokenInitWorksheetSessions;
    },
};
</script>

<style lang="scss" scoped>
.dashboard-notif {
    position: relative;
    top: -3em;
}
</style>
