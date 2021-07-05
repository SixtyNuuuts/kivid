<template>
    <div>
        <AddPatient :patients="allPatients" />
        <PatientList :patients="doctorPatients" />
    </div>
</template>

<script>
import AddPatient from "./components/AddPatient.vue";
import PatientList from "./components/PatientList.vue";

export default {
    name: "MyPatientsPage",
    components: {
        PatientList,
        AddPatient,
    },
    data: () => ({
        doctor: null,
        allPatients: null,
        doctorPatients: null,
    }),
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        // this.axios.get("/kine/1/manage/patient/2").then((response) => {
        //     console.log(response);
        // });

        this.doctor = data.doctor;
        this.allPatients = data.allPatients;
        this.doctorPatients = data.doctorPatients;
    },
};
</script>

<style lang="scss"  scoped>
</style>
