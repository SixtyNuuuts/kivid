<template>
    <div>
        <WorksheetList
            :patient="patient"
            :csrfTokenExerciseCompleted="csrfTokenExerciseCompleted"
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
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
        this.csrfTokenExerciseCompleted = data.csrfTokenExerciseCompleted;
    },
};
</script>
