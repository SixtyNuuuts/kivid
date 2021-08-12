<template>
    <div>
        <WorksheetList
            :patient="patient"
            :csrfTokenExerciseCompleted="csrfTokenExerciseCompleted"
            :csrfTokenCreateExerciseStats="csrfTokenCreateExerciseStats"
            :csrfTokenInitWorksheetSessions="csrfTokenInitWorksheetSessions"
            :csrfTokenStartWorksheetSession="csrfTokenStartWorksheetSession"
        />
    </div>
</template>

<script>
import WorksheetList from "./components/WorksheetList.vue";
import f from "../services/function";

export default {
    name: "MyWorkSheetsPage",
    components: {
        WorksheetList,
    },
    data() {
        return {
            patient: null,
            csrfTokenExerciseCompleted: null,
            csrfTokenCreateExerciseStats: null,
            csrfTokenInitWorksheetSessions: null,
            csrfTokenStartWorksheetSession: null,
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.csrfTokenExerciseCompleted = data.csrfTokenExerciseCompleted;
        this.csrfTokenCreateExerciseStats = data.csrfTokenCreateExerciseStats;
        this.csrfTokenInitWorksheetSessions =
            data.csrfTokenInitWorksheetSessions;
        this.csrfTokenStartWorksheetSession =
            data.csrfTokenStartWorksheetSession;
    },
};
</script>
