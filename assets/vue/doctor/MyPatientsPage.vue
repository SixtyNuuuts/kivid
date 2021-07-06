<template>
    <div>
        <AddPatient
            :doctor="doctor"
            :patients="allPatients"
            :createPatientForm="createPatientForm"
        />
        <PatientList :doctor="doctor" :patients="doctorPatients" />
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
        createPatientForm: null,
        allPatients: null,
        doctorPatients: null,
    }),
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.createPatientForm = data.createPatientForm;
        this.allPatients = data.allPatients;
        this.doctorPatients = data.doctorPatients;
    },
};
</script>

<style lang="scss"  scoped>
</style>
