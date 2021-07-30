<template>
    <div id="vue">
        <WorksheetList :patient="patient" />
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
        };
    },
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.patient = data.patient;
    },
};
</script>
