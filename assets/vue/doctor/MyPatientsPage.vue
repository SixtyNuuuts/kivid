<template>
    <div>
        <AddPatient
            :doctor="doctor"
            :patients="allPatientsExceptDoctor"
            :createPatientForm="createPatientForm"
            :addPatientForm="addPatientForm"
        />
        <PatientList
            :doctor="doctor"
            :patients="doctorPatients"
            :removePatientForm="removePatientForm"
        />
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
        addPatientForm: null,
        removePatientForm: null,
        allPatients: null,
    }),
    created() {
        const data = JSON.parse(document.getElementById("vueData").innerHTML);

        this.doctor = data.doctor;
        this.createPatientForm = data.createPatientForm;
        this.addPatientForm = data.addPatientForm;
        this.removePatientForm = data.removePatientForm;
        this.allPatients = data.allPatients;
    },
    computed: {
        doctorPatients() {
            return this.allPatients.filter((patient) => {
                if (patient.doctor) {
                    return this.doctor.id === patient.doctor.id;
                }
            });
        },
        allPatientsExceptDoctor() {
            return this.allPatients.filter((patient) => {
                return (
                    !patient.doctor ||
                    (patient.doctor ? this.doctor.id !== patient.doctor.id : "")
                );
            });
        },
    },
};
</script>

<style lang="scss"  scoped>
</style>
